//essa é a URL do JSON que irá recuperar a variável.
var requestURL = "https://quiz-trainee.herokuapp.com/questions"
// é o ajax que torna possível fazer tudo sem a necessidade de recarregar a página.
// 
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();

var forms;
aux=0; 


//o readyState faz com que o cabecalho da requisicao retorne e o 4 siginifica: operacao concluida.
// o 'status = 200' siginifica  a resposta da requisição e que foi bem sucedida.
//JSON.parse converte o texto em um objeto do js.
request.onreadystatechange = function(){
    if (request.readyState===4){
        if(request.status===200){
            formulario = JSON.parse (request.responseText);


        }
    }
}



request.send(null)


// infelizmente mesmo com os códigos abertos dos companheiros eu não consegui desenvolver além disso
// me esforcei e procurei dar o melhor porém não consegui entender bem como os códigos funcionam o que me impediu de prosseguir no desafio, eu não quis apenas copiar e colar os códigos ...
// ... dos meus colegas sem entender o que eu estava fazendo e entregar desafio de qualquer jeito, não seria justo com meus amigos e nem com os valores da empresa.
// por isso peço desculpas por não ter conseguido entregar o que pediram e não obter êxito nesse desafio. 


function mostrarQuestao() {
    
    
}

function finalizarQuiz() {
    
}