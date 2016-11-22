function main () {   
    let valor =document.getElementById("entrada").value;
    let paridade;
    if (valor % 2 == 0){
        paridade = "par";
    } else {
        paridade = "impar";
    }

    document.getElementById("resposta").innerHTML = "Paridade: " + paridade;
}