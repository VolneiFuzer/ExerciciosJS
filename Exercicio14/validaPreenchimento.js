
function validaPreenchimento(){
    
    let valorinputtext = document.getElementById("texto01").value != "";
    let valorinputradio = document.getElementById("ra").checked || 
                            document.getElementById("rb").checked || 
                                document.getElementById("rc").checked;
    let valorchackbox = document.getElementById("checkbox01").checked;

    if (valorinputtext == false){
        document.getElementById("div01").style.color = "#ff0000";
        document.getElementById("div01").innerHTML  = "Erro";
    } else {
        document.getElementById("div01").innerHTML  = "";
    }

    if (valorinputradio == false){
        document.getElementById("div02").style.color = "#ff0000";
        document.getElementById("div02").innerHTML  = "Erro";
    } else {
        document.getElementById("div02").innerHTML  = "";
    }

    if (valorchackbox == false){
        document.getElementById("div03").style.color = "#ff0000";
        document.getElementById("div03").innerHTML  = "Erro";
    } else {
        document.getElementById("div03").innerHTML  = "";
    }   
    
}


