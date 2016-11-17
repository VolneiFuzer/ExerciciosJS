
let imagem = document.createElement("img");
imagem.src = "http://danielrosa.info/wp-content/uploads/2016/07/balanca-darktaco-ajustada-300x204.jpg";
imagem.id = "imagemId";
document.getElementById("div01").appendChild(imagem);

function mouseOver(){
    document.getElementById("imagemId").src = "http://globoesporte.globo.com/platb/files/162/2013/12/balan%C3%A7a-e1386946728643.jpg";
}

function mouseOut(){
    document.getElementById("imagemId").src = "http://danielrosa.info/wp-content/uploads/2016/07/balanca-darktaco-ajustada-300x204.jpg";
}