
function mudaFundo(){
    let texto = document.getElementById("input01").value;

    if (texto === ""){
        document.getElementById("input01").style.backgroundColor = "#d80202";
    } else {
        document.getElementById("input01").style.backgroundColor = "";
    }
    
}


