class Filmes {
    constructor(nome,descricao,data,diretor,categoria){
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.diretor = diretor;
        this.categoria = categoria;
    }
}

var cadastrarFilmesBtn = document.querySelector("#cadastroFilmesBtn");
var listarFilmesBtn = document.querySelector("#listarFilmesBtn");
var qtFilmesSpan = document.querySelector("#qtFilmes");
var filmes = [];

cadastrarFilmesBtn.addEventListener("click",cadastrar);
listarFilmesBtn.addEventListener("click",listar);

function cadastrar(){
    let nomeFilme = document.querySelector("#nomeFilme").value;
    let descricaoFilme = document.querySelector("#descricaoFilme").value;
    let dataFilme = document.querySelector("#dataFilme").value;
    let diretorFilme = document.querySelector("#diretorFilme").value;
    let categoriaFilme = document.querySelector("#categoriaFilme").value;
    let erro = document.querySelector("#erroCadastro");

    if(nomeFilme == "" || descricaoFilme == "" || dataFilme == "" || diretorFilme == "" || categoriaFilme == "" ){
        erro.innerHTML = "Por favor, insira as informações corretamente!";
    }else{
        filmes.push(new Filmes(nomeFilme,descricaoFilme,dataFilme,diretorFilme,categoriaFilme));
        qtFilmesSpan.innerHTML = filmes.length;
        erro.innerHTML = "";
    } 
}

function listar(){
    let resposta = document.querySelector("#resposta");
    resposta.innerHTML = "";

    filmes.forEach((element) => {
        resposta.innerHTML += `<div class="filme">
        <h3 class="tituloFilme">${element.nome}</h3>
        <p class="textoFilme">Descrição: ${element.descricao}</p>
        <p class="dataFilme">Data de lançamento : ${element.data}</p>
        <p class="diretorFilme">Diretor do filme : ${element.diretor}</p>
        <p class="categoriaFilme">${element.categoria}</p>
        </div>`
    });
}

filmes.push(new Filmes("O exterminador do futuro","Disfarçado de humano, o assassino conhecido como o Exterminador viaja de 2029 a 1984 para matar Sarah Connor. Enviado para proteger Sarah está Kyle Reese, que divulga a chegada do Skynet, um sistema de inteligência artificial que detonará um holocausto nuclear. Sarah é o alvo porque a Skynet sabe que seu futuro filho comandará a luta contra eles. Com o implacável Exterminador os perseguindo, Sarah e Kyle tentam sobreviver.","25/03/1985","James Cameron","Ação/Ficção científica"));
qtFilmesSpan.innerHTML = filmes.length;