// * Ligando os elementos Js com as classes do HTML

let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

// * Definindo qual vai ser os caracteres que podem ser usados para a senha ser gerada,

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
let novaSenha = "";

// * Definindo qual a quantidade de caracteres contidos na senha a partir do "slider"

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

// * Função que gera a senha com base no valor definido pelo client e dentro do charset (randômica)

function generatePassword(){
    let pass= "";
    
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
        }
 
// * Elemento que vai remover e "revelar a senha gerada"        
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}