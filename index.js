function generateCat(){
    var image = document.createElement("img");
    image.setAttribute("style","flex-box img");
    image.src= "./gif/giphyy.webp";
    var div = document.getElementById("content-flex");
    div.appendChild(image);
}
function removeCats(){
    var images = document.getElementById("content-flex");
    images.remove();
    var div = document.createElement("div");
    div.id = "content-flex";
    var div2=document.getElementById("flexbox");
    div2.appendChild(div);
    
}