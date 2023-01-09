var botonEncriptar= document.querySelector(".btn-encriptar");
var botonDesencriptar =document.querySelector(".btn-desencriptar"); 

var contenedorMuñeco = document.querySelector(".contenedor-munieco");
var h3 =document.querySelector(".contenedor-h3");
var parrafo=document.querySelector(".contenedor-parrafo");
var textoresul=document.querySelector(".textoresul");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick=desencriptar;


function encriptar(){
    ocultaPAdelante()
    var area= recuperartexto();
    textoresul.textContent = EncriptarTXT(area);
    
}
function desencriptar (){
    ocultaPAdelante()
    var area = recuperartexto();
    textoresul.textContent = DesencriptarTXT(area);

}

function recuperartexto(){
    var area =document.querySelector(".area");
    return area.value;
}

function ocultaPAdelante(){
    contenedorMuñeco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function EncriptarTXT(mensaje){
    var texto=mensaje;
    var textofinal="";

    for( var i=0; i< texto.length; i++){
        if (texto[i] == "a"){
            textofinal=textofinal+"ai"
        }
        else if (texto[i] == "e"){
            textofinal=textofinal+"enter"
        }
        else if (texto[i] == "i"){
            textofinal=textofinal+"imes"
        }
        else if (texto[i] == "o"){
            textofinal=textofinal+"ober"
        }
        else if (texto[i] == "u"){
            textofinal=textofinal+"ufat"
        }
        else{
            textofinal=textofinal+texto[i];
        }
    

    }

    
    return textofinal;
}

function DesencriptarTXT(mensaje){
    var texto=mensaje;
    var textofinal="";

    for( var i=0; i< texto.length; i++){
        if (texto[i] == "a"){
            textofinal=textofinal+"a"
            i=i+1;
        }
        else if (texto[i] == "e"){
            textofinal=textofinal+"e"
            i=i+4;
        }
        else if (texto[i] == "i"){
            textofinal=textofinal+"i"
            i=i+3;
        }
        else if (texto[i] == "o"){
            textofinal=textofinal+"o"
            i=i+3;
        }
        else if (texto[i] == "u"){
            textofinal=textofinal+"u"
            i=i+3;
        }
        else{
            textofinal=textofinal+texto[i];
        }
    

    }

    
    return textofinal;
}

const btnCopiar = document.querySelector(".btn-copiar"); 

    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".textoresul").textContent;
    navigator.clipboard.writeText(contenido);
});