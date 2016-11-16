
function mostraOuOcultaDiv(){
    if(document.getElementById("divTeste").innerHTML == ""){
        document.getElementById("divTeste").innerHTML = "Mostrando a div!!!";
        document.getElementById("bt01").innerHTML = "Ocultar a div";
    } else {
        document.getElementById("divTeste").innerHTML = "";
        document.getElementById("bt01").innerHTML = "Mostrar a div";
    }
} 