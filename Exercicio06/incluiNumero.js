let valor2 = 1;

function incluiNumero(){
    
    let valor = document.getElementById("div01").innerHTML;
    
    if(valor === ""){
        document.getElementById("div01").innerHTML = 1;        
    } else {
        valor2 ++;
        document.getElementById("div01").innerHTML = valor + ", " + valor2;  
    }
} 