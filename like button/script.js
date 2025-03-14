var container = document.querySelector(".container");
var likebutton = document.querySelector("i");

container.addEventListener("dblclick", function() {
    likebutton.style.transform = "translate(-50%, -50%) scale(1)";
    likebutton.style.opacity = 0.9;
    setTimeout(function() {
        likebutton.style.opacity = 0;
    }, 2000);
    setTimeout(function() {
        likebutton.style.transform = "translate(-50%, -50%) scale(0)";
    }, 2000);
})