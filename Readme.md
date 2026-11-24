# 📚 Guia de Estudos — JavaScript e Consumo de APIs

Material de apoio para consulta e revisão dos principais conceitos de JavaScript, com foco em manipulação de dados, consumo de APIs e integração com páginas HTML.

---

# 1. Variáveis

As variáveis servem para armazenar informações que podem ser utilizadas durante o código.

### let
Permite criar uma variável cujo valor pode ser alterado.

```javascript
let nome = "Marcus";
nome = "João";

console.log(nome);
```

### const
Cria uma variável que não pode receber uma nova atribuição.

```javascript
const idade = 20;

console.log(idade);
```

### var
Forma antiga de declarar variáveis. Atualmente, é mais recomendado utilizar `let` e `const`.

```javascript
var cidade = "Blumenau";

console.log(cidade);
```

**Resumo:**
- `let`: permite alterar o valor.
- `const`: não permite reatribuir o valor.
- `var`: declaração antiga.

---

# 2. Tipos de dados

Os tipos de dados definem quais informações uma variável pode armazenar.

| Tipo | Exemplo |
|---|---|
| String | `"Olá"` |
| Number | `25` |
| Boolean | `true` ou `false` |
| Array | `[10, 20, 30]` |
| Object | `{ nome: "Ana" }` |
| Null | `null` |
| Undefined | `undefined` |

Exemplo:

```javascript
const nome = "Marcus";
const idade = 20;
const aprovado = true;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof aprovado);
```

O `typeof` identifica o tipo de dado de uma variável.

---

# 3. Condicionais

Permitem executar diferentes partes do código dependendo de uma condição.

### if e else

```javascript
const idade = 20;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
```

### else if

Utilizado quando existem várias condições.

```javascript
const nota = 8;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
```

### Operadores de comparação

| Operador | Significado |
|---|---|
| `==` | Igualdade de valor |
| `===` | Igualdade de valor e tipo |
| `!=` | Diferente |
| `!==` | Diferente em valor ou tipo |
| `>` | Maior que |
| `<` | Menor que |
| `>=` | Maior ou igual |
| `<=` | Menor ou igual |

**Dica:** prefira utilizar `===` para comparar valores.

### Operadores lógicos

| Operador | Significado |
|---|---|
| `&&` | E (as duas condições precisam ser verdadeiras) |
| `\|\|` | OU (pelo menos uma condição precisa ser verdadeira) |
| `!` | NÃO (inverte o resultado) |

Exemplo:

```javascript
const idade = 20;
const possuiIngresso = true;

if (idade >= 18 && possuiIngresso) {
    console.log("Entrada permitida");
}
```

---

# 4. Funções

Funções são blocos de código que executam uma tarefa específica e podem ser reutilizados.

### Função tradicional

```javascript
function saudacao() {
    console.log("Olá, mundo!");
}

saudacao();
```

### Função com parâmetros

Parâmetros permitem enviar informações para uma função.

```javascript
function saudacao(nome) {
    console.log("Olá, " + nome);
}

saudacao("Marcus");
```

### return

O `return` devolve um resultado da função.

```javascript
function somar(a, b) {
    return a + b;
}

const resultado = somar(10, 20);

console.log(resultado);
```

### Arrow Function

É uma maneira mais curta de escrever funções.

```javascript
const somar = (a, b) => {
    return a + b;
};

console.log(somar(10, 20));
```

---

# 5. Arrays

Arrays são utilizados para armazenar vários valores dentro de uma única variável.

```javascript
const frutas = ["Maçã", "Banana", "Uva"];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
```

Os índices começam em zero.

### Métodos importantes de Array

#### push()

Adiciona um elemento no final do array.

```javascript
const frutas = ["Maçã", "Banana"];

frutas.push("Uva");

console.log(frutas);
```

Resultado: `["Maçã", "Banana", "Uva"]`

#### pop()

Remove o último elemento do array.

```javascript
const frutas = ["Maçã", "Banana", "Uva"];

frutas.pop();

console.log(frutas);
```

Resultado: `["Maçã", "Banana"]`

#### length

Retorna a quantidade de elementos do array.

```javascript
const frutas = ["Maçã", "Banana", "Uva"];

console.log(frutas.length);
```

Resultado: `3`

#### includes()

Verifica se determinado elemento existe no array.

```javascript
const frutas = ["Maçã", "Banana", "Uva"];

console.log(frutas.includes("Banana"));
```

Resultado: `true`

---

# 6. Métodos de Array mais importantes

Esses métodos são muito utilizados quando consumimos APIs, pois permitem manipular os dados recebidos.

## map()

O `map()` percorre todos os elementos de um array e cria um NOVO array com os resultados de cada operação.

**Exemplo:** criar um novo array contendo apenas os nomes dos usuários.

```javascript
const usuarios = [
    { nome: "Marcus", idade: 20 },
    { nome: "Ana", idade: 22 },
    { nome: "João", idade: 25 }
];

const nomes = usuarios.map(usuario => usuario.nome);

console.log(nomes);
```

Resultado:

```javascript
["Marcus", "Ana", "João"]
```

**Quando utilizar?**

Quando precisar transformar os dados de um array ou extrair informações específicas.

## filter()

O `filter()` percorre o array e retorna um NOVO array contendo somente os elementos que atendem a uma condição.

**Exemplo:** encontrar usuários maiores de 21 anos.

```javascript
const usuarios = [
    { nome: "Marcus", idade: 20 },
    { nome: "Ana", idade: 22 },
    { nome: "João", idade: 25 }
];

const maiores = usuarios.filter(usuario => usuario.idade > 21);

console.log(maiores);
```

Resultado: Ana e João.

**Quando utilizar?**

Quando precisar filtrar informações de acordo com uma condição.

## find()

O `find()` retorna o primeiro elemento que atende a uma condição.

```javascript
const usuarios = [
    { id: 1, nome: "Marcus" },
    { id: 2, nome: "Ana" },
    { id: 3, nome: "João" }
];

const usuario = usuarios.find(usuario => usuario.id === 2);

console.log(usuario);
```

Resultado:

```javascript
{ id: 2, nome: "Ana" }
```

**Quando utilizar?**

Quando precisar encontrar um único elemento dentro de um array.

## forEach()

O `forEach()` percorre todos os elementos de um array e executa uma ação para cada elemento.

```javascript
const frutas = ["Maçã", "Banana", "Uva"];

frutas.forEach(fruta => {
    console.log(fruta);
});
```

Resultado:

```text
Maçã
Banana
Uva
```

**Quando utilizar?**

Quando precisar executar uma ação para cada elemento, sem criar um novo array como resultado.

## reduce()

O `reduce()` percorre o array e acumula os valores em um único resultado.

**Exemplo:** somar os preços dos produtos.

```javascript
const precos = [10, 20, 30];

const total = precos.reduce((soma, preco) => {
    return soma + preco;
}, 0);

console.log(total);
```

Resultado: `60`

**Quando utilizar?**

Quando precisar somar valores, calcular totais ou transformar vários elementos em um único resultado.

### Resumo dos métodos

| Método | O que faz? |
|---|---|
| `map()` | Cria um novo array transformado |
| `filter()` | Filtra elementos por condição |
| `find()` | Encontra o primeiro elemento |
| `forEach()` | Executa uma ação em cada elemento |
| `reduce()` | Transforma vários valores em um resultado |
| `includes()` | Verifica se existe um elemento |

**Atenção para a prova:** `map()` e `filter()` retornam novos arrays. `find()` retorna um elemento ou `undefined`. `forEach()` não retorna um novo array.

---

# 7. Objetos

Objetos permitem armazenar informações relacionadas utilizando propriedades e valores.

```javascript
const usuario = {
    nome: "Marcus",
    idade: 20,
    cidade: "Blumenau"
};

console.log(usuario.nome);
console.log(usuario.idade);
```

### Acessando propriedades

Existem duas formas principais:

```javascript
console.log(usuario.nome);

console.log(usuario["nome"]);
```

### Alterando propriedades

```javascript
const usuario = {
    nome: "Marcus",
    idade: 20
};

usuario.idade = 21;

console.log(usuario.idade);
```

---

# 8. JSON

JSON significa JavaScript Object Notation.

É um formato utilizado para armazenar e trocar informações entre aplicações, principalmente quando trabalhamos com APIs.

Exemplo de JSON:

```json
{
    "nome": "Marcus",
    "idade": 20,
    "cidade": "Blumenau"
}
```

### JSON.stringify()

Transforma um objeto JavaScript em uma string JSON.

```javascript
const usuario = {
    nome: "Marcus",
    idade: 20
};

const dados = JSON.stringify(usuario);

console.log(dados);
```

### JSON.parse()

Transforma uma string JSON em um objeto JavaScript.

```javascript
const dados = '{"nome":"Marcus","idade":20}';

const usuario = JSON.parse(dados);

console.log(usuario.nome);
```

**Lembrete:**
- `stringify()`: objeto → string JSON.
- `parse()`: string JSON → objeto.

---

# 9. Consumo de APIs

API significa Application Programming Interface.

Uma API permite que diferentes aplicações se comuniquem e troquem informações.

Por exemplo, podemos criar um site que busca informações de usuários em outro servidor.

### O que é uma requisição?

É uma solicitação feita para um servidor, pedindo ou enviando informações.

Exemplo de URL de uma API:

```text
https://jsonplaceholder.typicode.com/users
```

Essa API retorna uma lista de usuários fictícios.

### Principais métodos HTTP

| Método | Função |
|---|---|
| GET | Buscar informações |
| POST | Cadastrar informações |
| PUT | Atualizar informações completas |
| PATCH | Atualizar parcialmente |
| DELETE | Excluir informações |

---

# 10. Fetch API

O `fetch()` é utilizado para realizar requisições HTTP e consumir APIs.

### Exemplo básico com GET

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados);
    })
    .catch(erro => {
        console.log("Erro:", erro);
    });
```

### Entendendo o código

1. `fetch()`: realiza a requisição para a API.
2. `.then()`: executa uma ação quando a Promise é resolvida.
3. `resposta.json()`: transforma o corpo da resposta em dados JavaScript.
4. `dados`: contém as informações recebidas.
5. `.catch()`: captura erros ocorridos durante a requisição ou processamento.

---

# 11. Promises

Uma Promise representa uma operação que será concluída no futuro.

Ela pode ter três estados:

- Pending: aguardando a conclusão.
- Fulfilled: operação concluída com sucesso.
- Rejected: operação rejeitada ou com falha.

Exemplo:

```javascript
const promessa = new Promise((resolve, reject) => {
    const sucesso = true;

    if (sucesso) {
        resolve("Operação realizada!");
    } else {
        reject("Ocorreu um erro!");
    }
});

promessa
    .then(resultado => {
        console.log(resultado);
    })
    .catch(erro => {
        console.log(erro);
    });
```

### O que são resolve e reject?

- `resolve()`: indica que a operação foi concluída com sucesso.
- `reject()`: indica que a operação falhou.

---

# 12. Async e Await

`async` e `await` são utilizados para trabalhar com operações assíncronas, deixando o código mais organizado e fácil de entender.

### async

Indica que uma função trabalha com operações assíncronas e retorna uma Promise.

### await

Aguarda a conclusão de uma Promise antes de continuar a execução daquela função.

### Exemplo consumindo uma API

```javascript
async function buscarUsuarios() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

        const dados = await resposta.json();

        console.log(dados);

    } catch (erro) {
        console.log("Erro ao buscar usuários:", erro);
    }
}

buscarUsuarios();
```

### Entendendo o código

1. `async`: transforma a função em uma função assíncrona.
2. `await fetch()`: aguarda a resposta da API.
3. `await resposta.json()`: aguarda a conversão dos dados.
4. `try`: executa o código que pode apresentar erro.
5. `catch`: captura o erro caso aconteça.

**Dica:** `async/await` é uma maneira de trabalhar com Promises.

### Verificando se a requisição foi bem-sucedida

O Fetch não lança erro automaticamente para respostas HTTP como 404 ou 500. Por isso, é importante verificar `resposta.ok`.

```javascript
async function buscarUsuarios() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!resposta.ok) {
            throw new Error("Erro na requisição");
        }

        const dados = await resposta.json();

        console.log(dados);

    } catch (erro) {
        console.log(erro.message);
    }
}

buscarUsuarios();
```

---

# 13. POST, PUT, PATCH e DELETE com Fetch

Além de buscar informações, também podemos enviar, atualizar e excluir dados através de uma API.

## GET — Buscar informações

```javascript
async function buscarUsuarios() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

    const dados = await resposta.json();

    console.log(dados);
}

buscarUsuarios();
```

## POST — Cadastrar informações

O POST envia novas informações para a API.

```javascript
async function cadastrarUsuario() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Marcus",
            email: "marcus@email.com"
        })
    });

    const dados = await resposta.json();

    console.log(dados);
}

cadastrarUsuario();
```

### Entendendo as propriedades

- `method`: informa o método HTTP.
- `headers`: informa o formato dos dados enviados.
- `Content-Type`: informa que estamos enviando JSON.
- `body`: contém as informações que serão enviadas.
- `JSON.stringify()`: transforma o objeto em string JSON.

## PUT — Atualizar informações completas

```javascript
async function atualizarUsuario() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Marcus Atualizado",
            email: "novo@email.com"
        })
    });

    const dados = await resposta.json();

    console.log(dados);
}

atualizarUsuario();
```

## PATCH — Atualizar parcialmente

```javascript
async function atualizarEmail() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: "novo@email.com"
        })
    });

    const dados = await resposta.json();

    console.log(dados);
}

atualizarEmail();
```

## DELETE — Excluir informações

```javascript
async function excluirUsuario() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "DELETE"
    });

    console.log("Usuário excluído!");
}

excluirUsuario();
```

**Atenção:** JSONPlaceholder é uma API de testes. As operações simulam as alterações e não modificam permanentemente um banco de dados real.

---

# 14. Manipulação do HTML com DOM

DOM significa Document Object Model.

Permite que o JavaScript acesse e modifique os elementos HTML de uma página.

### getElementById()

Busca um elemento pelo seu ID.

```javascript
const titulo = document.getElementById("titulo");
```

### querySelector()

Busca o primeiro elemento que corresponde a um seletor CSS.

```javascript
const botao = document.querySelector(".botao");
```

### textContent

Altera ou recupera o texto de um elemento.

```javascript
const titulo = document.getElementById("titulo");

titulo.textContent = "Olá, mundo!";
```

### innerHTML

Permite inserir HTML dentro de um elemento.

```javascript
const conteudo = document.getElementById("conteudo");

conteudo.innerHTML = "<p>Olá, mundo!</p>";
```

**Atenção:** evite inserir conteúdo não confiável com `innerHTML`. Para texto simples, prefira `textContent`.

### addEventListener()

Permite executar uma função quando determinado evento acontece.

```javascript
const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
    console.log("Botão clicado!");
});
```

### Eventos comuns

| Evento | Função |
|---|---|
| `click` | Quando clica |
| `input` | Quando o valor muda durante a digitação |
| `change` | Quando o valor é alterado |
| `submit` | Quando um formulário é enviado |
| `keydown` | Quando uma tecla é pressionada |

---

# 15. Exemplo prático: Consumindo uma API e exibindo usuários

Este exemplo reúne alguns dos conceitos mais importantes da matéria.

### HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Lista de Usuários</title>
</head>
<body>

    <h1>Usuários</h1>

    <button id="buscar">Buscar usuários</button>

    <div id="resultado"></div>

    <script src="script.js"></script>
</body>
</html>
```

### JavaScript (script.js)

```javascript
const botao = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

async function buscarUsuarios() {
    try {
        resultado.textContent = "Carregando...";

        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!resposta.ok) {
            throw new Error("Erro ao buscar usuários");
        }

        const usuarios = await resposta.json();

        resultado.innerHTML = "";

        usuarios.forEach(usuario => {
            resultado.innerHTML += `
                <div>
                    <h3>${usuario.name}</h3>
                    <p>${usuario.email}</p>
                </div>
            `;
        });

    } catch (erro) {
        resultado.textContent = erro.message;
    }
}

botao.addEventListener("click", buscarUsuarios);
```

### Conceitos utilizados

- `getElementById()`: seleciona os elementos HTML.
- `addEventListener()`: identifica o clique no botão.
- `async/await`: trabalha com operações assíncronas.
- `fetch()`: realiza a requisição para a API.
- `json()`: transforma a resposta em dados JavaScript.
- `forEach()`: percorre os usuários.
- `innerHTML`: exibe as informações no HTML.
- `try/catch`: trata possíveis erros.

---

# 16. Diferenças que você precisa saber para a prova

| Conceito | Para que serve? |
|---|---|
| `fetch()` | Realiza requisições HTTP |
| `async` | Declara uma função assíncrona |
| `await` | Aguarda uma Promise |
| `then()` | Trata o resultado de uma Promise |
| `catch()` | Captura erros |
| `json()` | Converte o corpo da resposta JSON |
| `map()` | Cria um novo array transformado |
| `filter()` | Filtra elementos |
| `find()` | Encontra um elemento |
| `forEach()` | Percorre elementos |
| `reduce()` | Transforma vários valores em um resultado |
| `addEventListener()` | Escuta eventos |
| `getElementById()` | Seleciona um elemento pelo ID |
| `JSON.stringify()` | Transforma objeto em string JSON |
| `JSON.parse()` | Transforma string JSON em objeto |

---

# 17. Erros comuns que podem aparecer

### Esquecer de utilizar await

Errado:

```javascript
const resposta = fetch(url);
const dados = resposta.json();
```

Correto:

```javascript
const resposta = await fetch(url);
const dados = await resposta.json();
```

### Esquecer de converter o JSON

Errado:

```javascript
const resposta = await fetch(url);

console.log(resposta);
```

Correto:

```javascript
const resposta = await fetch(url);
const dados = await resposta.json();

console.log(dados);
```

### Não verificar se a requisição deu certo

Errado:

```javascript
const resposta = await fetch(url);
const dados = await resposta.json();
```

Correto:

```javascript
const resposta = await fetch(url);

if (!resposta.ok) {
    throw new Error("Erro na requisição");
}

const dados = await resposta.json();
```

### Confundir map com forEach

Errado quando a intenção é apenas percorrer os elementos:

```javascript
usuarios.map(usuario => {
    console.log(usuario.name);
});
```

Mais adequado:

```javascript
usuarios.forEach(usuario => {
    console.log(usuario.name);
});
```

---

# 18. Resumo rápido para consulta durante a prova

```javascript
// Buscar dados de uma API
const resposta = await fetch(url);

// Converter resposta em JSON
const dados = await resposta.json();

// Criar um novo array
const novoArray = dados.map(item => item.nome);

// Filtrar informações
const filtrados = dados.filter(item => item.id > 2);

// Encontrar um elemento
const encontrado = dados.find(item => item.id === 1);

// Percorrer um array
dados.forEach(item => console.log(item));

// Somar valores
const total = dados.reduce((soma, item) => soma + item.preco, 0);

// Enviar dados
await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome: "Marcus" })
});

// Atualizar um elemento HTML
document.getElementById("titulo").textContent = "Novo título";

// Escutar um clique
botao.addEventListener("click", () => {
    console.log("Clicou!");
});
```

**Importante:** os exemplos que utilizam `await` devem estar dentro de uma função `async` ou em um ambiente que aceite top-level await.

---

# 19. Dicas finais para a prova

1. Sempre lembre que o `fetch()` retorna uma Promise.
2. Utilize `await` para aguardar a resposta de uma requisição.
3. Utilize `.json()` para transformar o corpo da resposta em dados JavaScript.
4. Utilize `try/catch` para tratar erros.
5. Saiba diferenciar GET, POST, PUT, PATCH e DELETE.
6. Entenda a diferença entre `map()`, `filter()`, `find()` e `forEach()`.
7. Saiba utilizar objetos e arrays para manipular os dados recebidos.
8. Entenda como selecionar elementos HTML através do DOM.
9. Conheça os eventos do JavaScript, principalmente `click`, `input` e `submit`.
10. Lembre-se de verificar `resposta.ok` para identificar respostas HTTP com erro.

**Boa prova! 🚀**

Este material foi organizado para servir como consulta rápida, com exemplos pequenos e práticos de JavaScript.