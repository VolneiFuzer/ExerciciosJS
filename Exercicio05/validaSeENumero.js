
function validaSeENumero(){
    let texto = parseInt(document.getElementById("input02").value);
    let validaRange = ( texto >= 0 && texto <= 99);
    if (isNaN(texto)){
        document.getElementById("divTeste").innerHTML = "Campo deve ser numérico";
    } else if (!validaRange) {
        document.getElementById("divTeste").innerHTML = "O valor deve estar contido no intervalo entre 0 e 99";
    } else {
        document.getElementById("divTeste").innerHTML = "";
    }
} 