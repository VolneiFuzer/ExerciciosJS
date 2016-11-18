
function validaTexto(){
    let contador = 0;
    let string = document.getElementById("input01").value;
    let separado = string.split("");

    for (i = 0; i < string.length; i++){
        if (string[i] == "@"){
            contador ++;
        }
    }
    
    if (contador == 1){
        document.getElementById("div01").innerHTML = "Erro"
    } else {
        document.getElementById("div01").innerHTML = "Sucesso"
    }
} 