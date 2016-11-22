function main(){
    let mes = document.getElementById("entrada").value;
    let qtDias;

    switch(mes){
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            qtDias  = 31;
            break;
        case "4":
        case "6":
        case "9":
        case "11":
            qtDias = 30
            break;
        case "2":
            qtDias = 28
            break;
        default:
            qtDias = -1;        
    }

    document.getElementById("resposta").innerHTML = "Qnt de dias do mes " + mes +": " + qtDias;
}