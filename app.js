// ==========================================================
// PROJETO: DEV CURSOS
// Conceitos praticados: variáveis, funções, arrays, objetos,
// map, filter, find, forEach, reduce, fetch, JSON, async/await,
// Promises, try/catch, DOM, eventos e métodos HTTP.
// ==========================================================

// URL pública que retorna uma lista de cursos de programação.
// A API Sample APIs possui diferentes categorias de cursos.
const API_URL = "https://api.sampleapis.com/codingresources/codingResources";

// Selecionamos os elementos HTML que serão usados no JavaScript.
const botaoBuscar = document.getElementById("buscar-cursos");
const formularioBusca = document.getElementById("form-busca");
const campoPesquisa = document.getElementById("pesquisa");
const campoCategoria = document.getElementById("categoria");
const botaoLimpar = document.getElementById("limpar-filtros");
const listaCursos = document.getElementById("lista-cursos");
const mensagem = document.getElementById("mensagem");
const resumo = document.getElementById("resumo");

// Array que guardará os cursos recebidos da API.
// let é usado porque o conteúdo será atualizado após a requisição.
let cursos = [];

// ----------------------------------------------------------
// 1. FUNÇÃO ASSÍNCRONA + FETCH + JSON + TRY/CATCH
// ----------------------------------------------------------

// async indica que a função trabalha com operações assíncronas.
// await aguarda a conclusão da Promise retornada pelo fetch.
async function buscarCursos() {
    // Desabilitamos o botão para evitar várias requisições seguidas.
    botaoBuscar.disabled = true;
    mensagem.textContent = "Carregando cursos...";
    listaCursos.innerHTML = "";

    try {
        // GET é o método padrão do fetch: busca informações na API.
        const resposta = await fetch(API_URL);

        // fetch não considera respostas HTTP 404 ou 500 como falhas
        // de conexão. Por isso verificamos a propriedade ok.
        if (!resposta.ok) {
            throw new Error("Não foi possível buscar os cursos.");
        }

        // json() lê o corpo da resposta e transforma o JSON
        // recebido em dados que podemos usar no JavaScript.
        const dados = await resposta.json();

        // Guardamos os dados recebidos na variável cursos.
        cursos = dados;

        mensagem.textContent = `${cursos.length} cursos carregados com sucesso!`;

        // Chamamos funções que trabalham com os dados recebidos.
        preencherCategorias();
        exibirCursos(cursos);
        mostrarResumo(cursos);

    } catch (erro) {
        // catch é executado se acontecer uma falha na requisição
        // ou no processamento dos dados.
        mensagem.textContent = "Ocorreu um erro ao carregar os cursos.";
        listaCursos.innerHTML = `<p class="aviso">${erro.message}</p>`;
        resumo.textContent = "Não foi possível gerar o resumo.";

        // console.error mostra detalhes do erro no console do navegador.
        console.error("Erro:", erro);

    } finally {
        // finally é executado tendo ocorrido erro ou não.
        // Reativamos o botão ao terminar a operação.
        botaoBuscar.disabled = false;
    }
}

// ----------------------------------------------------------
// 2. MAP: TRANSFORMAR DADOS DE UM ARRAY
// ----------------------------------------------------------

// O map percorre todos os cursos e retorna um novo array.
// Aqui pegamos somente o nome da categoria de cada curso.
function preencherCategorias() {
    // A API de recursos de programação pode não fornecer uma categoria.
    // Por isso, usamos "Geral" como categoria padrão quando ela não existir.
    const categorias = cursos.map(curso => curso.category || curso.type || "Geral");

    // Set remove valores repetidos.
    const categoriasUnicas = [...new Set(categorias)];

    // Ordenamos as categorias em ordem alfabética.
    categoriasUnicas.sort();

    // Limpamos as opções anteriores, mantendo a primeira opção.
    campoCategoria.innerHTML = '<option value="">Todas as categorias</option>';

    // forEach executa uma ação para cada categoria.
    categoriasUnicas.forEach(categoria => {
        const opcao = document.createElement("option");

        // value guarda o valor que será usado no filtro.
        opcao.value = categoria;
        opcao.textContent = categoria;

        campoCategoria.appendChild(opcao);
    });
}

// ----------------------------------------------------------
// 3. FOREACH + DOM: EXIBIR OS CURSOS NA PÁGINA
// ----------------------------------------------------------

function exibirCursos(lista) {
    // Limpamos a lista antes de adicionar os novos resultados.
    listaCursos.innerHTML = "";

    // Se não houver cursos, mostramos uma mensagem.
    if (lista.length === 0) {
        listaCursos.innerHTML = '<p class="aviso">Nenhum curso encontrado.</p>';
        return;
    }

    // forEach percorre cada curso da lista recebida.
    lista.forEach(curso => {
        // Criamos um elemento HTML para representar o card.
        const card = document.createElement("article");
        card.classList.add("card-curso");

        // Criamos o título do curso.
        const titulo = document.createElement("h3");
        // A API Coding Resources usa description como título do recurso.
        titulo.textContent = curso.description || curso.course || curso.name || "Recurso sem título";

        // Criamos a categoria do curso.
        const categoria = document.createElement("span");
        categoria.classList.add("categoria");
        categoria.textContent = curso.category || curso.type || "Geral";

        // Criamos a descrição. Algumas APIs podem não fornecer
        // uma descrição, então usamos um texto padrão.
        const descricao = document.createElement("p");
        // Se a descrição foi usada como título, mostramos um texto complementar.
        descricao.textContent = curso.name || curso.type || "Recurso para aprendizado e desenvolvimento em programação.";

        // Criamos o link para acessar o curso.
        const link = document.createElement("a");
        link.textContent = "Acessar curso";

        // Algumas respostas podem ter o endereço no campo url.
        // Validamos o endereço antes de utilizá-lo.
        const endereco = curso.url || curso.link || curso.website;

        if (endereco && endereco.startsWith("https://")) {
            link.href = endereco;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        } else {
            link.removeAttribute("href");
            link.textContent = "Link não disponível";
        }

        // Adicionamos os elementos dentro do card.
        card.appendChild(categoria);
        card.appendChild(titulo);
        card.appendChild(descricao);
        card.appendChild(link);

        // Adicionamos o card na lista de cursos da página.
        listaCursos.appendChild(card);
    });
}

// ----------------------------------------------------------
// 4. FILTER: FILTRAR OS CURSOS
// ----------------------------------------------------------

// Esta função será chamada quando o usuário pesquisar
// pelo nome do curso ou selecionar uma categoria.
function filtrarCursos() {
    // Pegamos o texto digitado e transformamos em letras minúsculas.
    const texto = campoPesquisa.value.toLowerCase();

    // Pegamos a categoria selecionada.
    const categoriaSelecionada = campoCategoria.value;

    // filter cria um novo array somente com os cursos
    // que atendem às condições.
    const cursosFiltrados = cursos.filter(curso => {
        // Verificamos se o nome do curso contém o texto pesquisado.
        const nomeCurso = (curso.description || curso.course || curso.name || "").toLowerCase();
        const combinaNome = nomeCurso.includes(texto);

        // Verificamos se a categoria corresponde à selecionada.
        const combinaCategoria =
            categoriaSelecionada === "" ||
            (curso.category || curso.type || "Geral") === categoriaSelecionada;

        // O curso precisa atender às duas condições.
        return combinaNome && combinaCategoria;
    });

    // Exibimos somente os cursos encontrados.
    exibirCursos(cursosFiltrados);

    // Atualizamos a mensagem com a quantidade de resultados.
    mensagem.textContent = `${cursosFiltrados.length} curso(s) encontrado(s).`;
}

// ----------------------------------------------------------
// 5. FIND: ENCONTRAR UM ELEMENTO
// ----------------------------------------------------------

// Exemplo de uso do find: encontrar o primeiro curso
// que tenha uma categoria específica.
function encontrarPrimeiroCurso(categoriaProcurada) {
    const cursoEncontrado = cursos.find(curso => {
        return curso.category === categoriaProcurada;
    });

    // find retorna undefined quando não encontra nenhum resultado.
    return cursoEncontrado;
}

// ----------------------------------------------------------
// 6. REDUCE: CALCULAR UM ÚNICO RESULTADO
// ----------------------------------------------------------

// Aqui usamos reduce para contar quantos cursos existem.
// O acumulador começa em zero e aumenta uma unidade por curso.
function mostrarResumo(lista) {
    const quantidade = lista.reduce((total, curso) => {
        return total + 1;
    }, 0);

    resumo.textContent = `Total de cursos disponíveis: ${quantidade}.`;
}

// ----------------------------------------------------------
// 7. EVENTOS DO DOM
// ----------------------------------------------------------

// click: executa buscarCursos quando o botão é clicado.
botaoBuscar.addEventListener("click", buscarCursos);

// submit: impede o recarregamento do formulário e filtra os cursos.
formularioBusca.addEventListener("submit", evento => {
    evento.preventDefault();
    filtrarCursos();
});

// input: filtra enquanto o usuário digita.
campoPesquisa.addEventListener("input", filtrarCursos);

// change: filtra quando a categoria selecionada muda.
campoCategoria.addEventListener("change", filtrarCursos);

// click: limpa os campos e mostra novamente todos os cursos.
botaoLimpar.addEventListener("click", () => {
    campoPesquisa.value = "";
    campoCategoria.value = "";

    exibirCursos(cursos);
    mensagem.textContent = `${cursos.length} cursos carregados.`;
});

// ----------------------------------------------------------
// 8. EXEMPLO DE POST, PUT, PATCH E DELETE
// ----------------------------------------------------------

// A API de cursos é utilizada para consulta (GET).
// Para estudar os outros métodos HTTP, usamos a API de testes
// JSONPlaceholder. Ela simula as operações e não salva alterações reais.

const API_TESTE = "https://jsonplaceholder.typicode.com/posts";

// POST: envia um novo registro de teste.
async function criarRegistro() {
    const resposta = await fetch(API_TESTE, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Meu curso de JavaScript",
            body: "Estudando consumo de APIs",
            userId: 1
        })
    });

    const dados = await resposta.json();
    console.log("POST - registro criado:", dados);
}

// PUT: substitui os dados de um registro de teste.
async function substituirRegistro() {
    const resposta = await fetch(`${API_TESTE}/1`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: 1,
            title: "Título atualizado",
            body: "Conteúdo atualizado",
            userId: 1
        })
    });

    const dados = await resposta.json();
    console.log("PUT - registro atualizado:", dados);
}

// PATCH: altera somente parte dos dados de um registro.
async function atualizarParteRegistro() {
    const resposta = await fetch(`${API_TESTE}/1`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Somente o título foi alterado"
        })
    });

    const dados = await resposta.json();
    console.log("PATCH - registro atualizado:", dados);
}

// DELETE: solicita a exclusão de um registro de teste.
async function excluirRegistro() {
    const resposta = await fetch(`${API_TESTE}/1`, {
        method: "DELETE"
    });

    console.log("DELETE - status da resposta:", resposta.status);
}

// As quatro funções acima ficam disponíveis para estudo.
// Não são executadas automaticamente para não enviar requisições
// desnecessárias quando a página é aberta.

// ----------------------------------------------------------
// 9. EXEMPLO DE THEN E CATCH COM PROMISE
// ----------------------------------------------------------

// Esta é outra forma de consumir uma API, sem async/await.
// O then trata o resultado e o catch captura erros.
function buscarCursosComThen() {
    fetch(API_URL)
        .then(resposta => {
            // Verifica se a resposta HTTP foi bem-sucedida.
            if (!resposta.ok) {
                throw new Error("Erro ao consultar cursos.");
            }

            // Converte o corpo da resposta para JSON.
            return resposta.json();
        })
        .then(dados => {
            // Executa quando os dados estiverem disponíveis.
            console.log("Cursos recebidos com then:", dados);
        })
        .catch(erro => {
            // Executa caso ocorra algum erro.
            console.error("Erro na Promise:", erro);
        });
}

// Para testar a versão com then, descomente a linha abaixo.
// buscarCursosComThen();

// ----------------------------------------------------------
// 10. EXEMPLO DE OPERADORES E FUNÇÕES
// ----------------------------------------------------------

// Função tradicional que recebe dois valores e retorna a soma.
function somar(a, b) {
    return a + b;
}

// Arrow function: mesma ideia, escrita de forma mais curta.
const multiplicar = (a, b) => a * b;

// Exemplos no console:
console.log("Soma:", somar(5, 3));
console.log("Multiplicação:", multiplicar(5, 3));

// ----------------------------------------------------------
// INÍCIO DO PROJETO
// ----------------------------------------------------------

// Carregamos os cursos automaticamente quando a página abre.
// Isso permite visualizar o consumo da API sem precisar clicar.
buscarCursos();
