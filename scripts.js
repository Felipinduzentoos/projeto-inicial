var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");
 
var telefone = document.getElementById ("telefone")
var cep = document.getElementById ("cep")
var logradouro = document.getElementById ("logradouro")
var numero = document.getElementById ("numero")
var complemento = document.getElementById ("complemento")
var bairro = document.getElementById ("bairro")
var cidade = document.getElementById ("cidade")
var estado = document.getElementById("estado")
var email = document.getElementById ("email")

var saida = document.getElementById ("saida-de-dados")
function alertar(event){
    //alert("Você clicou no botão!!! " +" " + nome.value);
 
    //var numero = 7;
    //var resultado = numero % 2;
    //if(resultado == 0){
       // alert("este número é par!");
    
       saida.innerText = "nome: " + telefone.value +
       "\n telefone " + telefone.value +
       "\n cep " + cep.value +
       "\n logradouro " + logradouro.value +
       "\n numero " + numero.value +
       "\n complemento " + complemento.value +
       "\n bairro " + bairro.value +
       "\n cidade " + cidade.value +
       "\n estado " + estado.value +

    }
