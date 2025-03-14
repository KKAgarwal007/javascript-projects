var isStatus = document.querySelector("h4");
var addbtn = document.querySelector("#add");
var flag = 0;

addbtn.addEventListener("click", function() {
    if(flag==0){
        isStatus.innerHTML = "Friend";
        isStatus.style.color = "green";
        addbtn.innerHTML = "Remove Friend";
        addbtn.style.backgroundColor = "#76a4f3";
        flag = 1;
    }
    else{
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "red";
        addbtn.innerHTML = "Add Friend";
        addbtn.style.backgroundColor = "rgb(93, 93, 230)";
        flag = 0;
    }
});

