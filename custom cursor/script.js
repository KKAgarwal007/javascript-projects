var main = document.querySelector(".container");
var cursor = document.querySelector(".cursor");
var counter = 1;

main.addEventListener("mousemove", function(e) {
    cursor.style.left = e.x + "px";
    cursor.style.top = e.y + "px";
})


