function main () {   
    let valor = document.getElementById("entrada").value;

    if (valor < 0) {
        valor =  -valor;
    }

    document.getElementById("resposta").innerHTML = "Valor absoluto: " + valor;
}