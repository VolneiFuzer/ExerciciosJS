function substituiNumero(){
    
    let valor = parseInt(document.getElementById("div01").innerHTML);
    
    if(isNaN(valor)){
        document.getElementById("div01").innerHTML = 1;        
    } else {
        document.getElementById("div01").innerHTML = ++ valor;  
    }
} 