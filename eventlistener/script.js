let container = document.querySelector(".rectangle");
var blue = 0;

container.addEventListener("mousemove", function(e){

    if(e.offsetX < 255){
        container.style.backgroundColor = `rgb(255, ${e.offsetX}, ${e.offsetX})`;
    }

    else{
        blue = 400 - e.offsetX;
        // console.log(blue)
        container.style.backgroundColor = `rgb(${blue}, ${blue}, 255)`;
    }
})