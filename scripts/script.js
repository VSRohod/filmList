const cadastrarFilmesBtn = document.querySelector("#cadastroFilmesBtn");
const listarFilmesBtn = document.querySelector("#listarFilmesBtn");
const hideFilmesBtn = document.querySelector("#hideFilmesBtn");
const qtFilmesSpan = document.querySelector("#qtFilmes");
var filmes = [];

cadastrarFilmesBtn.addEventListener("click",cadastrar);
listarFilmesBtn.addEventListener("click",listar);
hideFilmesBtn.addEventListener("click",hideShow);

function cadastrar(){
    let nomeFilme = document.querySelector("#nomeFilme").value;
    let descricaoFilme = document.querySelector("#descricaoFilme").value;
    let dataFilme = document.querySelector("#dataFilme").value;
    let diretorFilme = document.querySelector("#diretorFilme").value;
    let categoriaFilme = document.querySelector("#categoriaFilme").value;
    let msgCadastro = document.querySelector("#msgCadastro");
    let msgResposta = document.querySelector("#msgResposta");

    msgResposta.innerHTML = "";

    var verificaFilme = false;
    var mapFilmes = filmes.map((x) => x.nome);
    for(let i = 0 ; i<= filmes.length;i++) {
        if( mapFilmes[i] == nomeFilme){
            verificaFilme = true;
            break;
        }
    }

    if(verificaFilme == true){
        msgCadastro.innerHTML = `<h4 class="error">Filme já cadastrado! Por favor insira um novo filme.</h4>`;
    }else if(nomeFilme == "" || descricaoFilme == "" || dataFilme == "" || diretorFilme == "" || categoriaFilme == "" ){
        msgCadastro.innerHTML = `<h4 class="error">Por favor, insira as informações corretamente!</h4>`;
    }else{
        filmes.push(new Filmes(nomeFilme,descricaoFilme,dataFilme,diretorFilme,categoriaFilme));
        qtFilmesSpan.innerHTML = filmes.length;
        msgCadastro.innerHTML = `<h4 class="success">Filme cadastrado com sucesso!</h4>`;
    } 
}

function listar(){
    let resposta = document.querySelector("#resposta");
    let msgCadastro = document.querySelector("#msgCadastro");
    let msgResposta = document.querySelector("#msgResposta");
    resposta.innerHTML = "";
    msgCadastro.innerHTML = "";

    if(filmes.length == 0){
        msgResposta.innerHTML = `<h4 class="error">Não há filmes disponíveis! Por favor cadastre um filme.</h4>`;
    }else{
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
}

function hideShow(){
    let resposta = document.querySelector("#resposta");

    resposta.innerHTML = "";
}

// for tests
filmes.push(new Filmes("O exterminador do futuro","Disfarçado de humano, o assassino conhecido como o Exterminador viaja de 2029 a 1984 para matar Sarah Connor. Enviado para proteger Sarah está Kyle Reese, que divulga a chegada do Skynet, um sistema de inteligência artificial que detonará um holocausto nuclear. Sarah é o alvo porque a Skynet sabe que seu futuro filho comandará a luta contra eles. Com o implacável Exterminador os perseguindo, Sarah e Kyle tentam sobreviver.","25/03/1985","James Cameron","Ação/Ficção científica"));

qtFilmesSpan.innerHTML = filmes.length;