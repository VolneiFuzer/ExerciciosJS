function main () {   
    let numero = document.getElementById("entrada").value;
    let divisor = 2;

    while(divisor <= numero / 2 && !isDivisor(numero, divisor)){
        divisor ++;
    }

    if (numero == 2 || !isDivisor(numero, divisor)){
        document.getElementById("resposta").innerHTML = "É primo";
    } else {
        document.getElementById("resposta").innerHTML = "Não é primo"
    }

    function isDivisor (dividendo, divisor){
        return dividendo % divisor == 0;
    }
}