
function colorir(valor){

    switch(valor){
        case "verde": document.getElementById("div01").style.color = "#009102"; break;
        case "vermelho": document.getElementById("div01").style.color = "#ff0000"; break;
        case "azul": document.getElementById("div01").style.color = "#0000ff"; break;
        default : document.getElementById("div01").style.color = ""; break;
    }

}