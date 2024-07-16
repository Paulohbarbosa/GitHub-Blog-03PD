<div align="center"> 
<img height="180" src="./public/logo.png"> logo do projeto

<h1><img src="./public/ícone.svg"> Ícone + GitHub Blog Ignite</h1>

![Static Badge](https://img.shields.io/badge/Rocketseat%20-%20Desafio%20Prático-%237159c1?style=for-the-badge)

[![PyPi license](https://badgen.net/pypi/license/pip/)](https://pypi.org/project/pip/)
<h4 align="center"> 
    🚧 Projeto em ReactJS.  🚀 Em construção...  🚧
</h4>
</div>
# Github Blog Ignite

Projeto desafio da trilha ReactJS do Ignite da RocketSeat.

Nesse desafio, vou desenvolver uma aplicação que utilizará da API do GitHub para buscar issues de um repositório, dados do meu perfil e exibir elas como um blog.

## Funcionalidades

- [ ]  Listagem do seu perfil com:
    - [ ]  imagem;
    - [ ]  número de seguidores;
    - [ ]  nome, e 
    - [ ]  outras informações disponíveis pela API do GitHub.
- [ ]  Listar e filtrar todas as issues do repositório com um pequeno resumo do conteúdo dela
- [ ]  Criar uma página para exibir um post (issue) completo.

Será necessário usar conceitos como:

- [ ]  Fetch / Axios
- [ ]  Roteamento e React Router DOM
- [ ]  Formulários
## Tecnologias

- [ ]  Vite;
- [ ]  TypeScript;
- [ ]  Axios;
- [ ]  React-hook-form;

## Preparativos

- [ ]  Primeiramente, criar um repositório público no GitHub. Nesse vai criar issues que serão os posts do blog;
- [ ]  O título da issue será o nome do Post e o conteúdo será o corpo do post [exemplo](https://github.com/rocketseat-education/reactjs-github-blog-challenge/issues/1);

Depois disso, vou precisar utilizar algumas API’s do GitHub:

- [GitHub Users API](https://docs.github.com/pt/rest/users/users#get-a-user): Será utilizada para:
    - [ ]  Buscar os dados do seu usuário do GitHub.  
    
- [GitHub Search API:](https://docs.github.com/pt/rest/search) Será utilizada a API de busca do GitHub para:
    - [ ]  Filtrar por issues do repositório que você criou;
    - [ ]  E fazer o filtro por busca.

- [GitHub Issues API:](https://docs.github.com/pt/rest/issues/issues#get-an-issue) Para exibir o post completo, vou usar para:
    - [ ]  Retornar todos os dados de uma issue.
    - [ ]  Utilizar as rotas dinâmicas do react-router, para receber os parâmetros através da pagina do post completa;
E por fim
- [ ]  Utilizar o react-markdown para formatar o conteúdo que vem da API.

## Instalação

Pré-requisitos: NODE e npm

```bash
# clonar repositório
git clone https://...

# entrar na pasta do projeto raiz e instalar as dependências
npm install

# executar o projeto, em seguida clique no endereço que foi exibido no seu promt
npm rum dev
```

### Autor

<a href="https://github.com/Paulohbarbosa">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/29965327?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Paulo Barbosa</b></sub></a> <a href="https://github.com/Paulohbarbosa" >🚀</a>

Feito com ❤️ por Paulo Barbosa 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Paulo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/paulo-henrique-barbosa-495492160/) 
[![Gmail Badge](https://img.shields.io/badge/-Paulobarbosa@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:paulobarbosah.ph@gmail.com)](mailto:paulobarbosah.ph@gmail.com)
