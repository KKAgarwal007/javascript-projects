var arr = [
    {dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1669748151567-f2c4c55be354?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1737712334392-1bb8d27f1326?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1741851374435-4f6a4ad679e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1604681630513-69474a4e253f?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1737597230788-21c5a56d5d8a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://plus.unsplash.com/premium_photo-1675107359685-f268487a3a46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1740326874966-65843b3e15ac?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

];
var cluster = "";
arr.forEach(function(item, index){
    cluster += `<div class="story">
                <img id = "${index}"src=${item.dp} alt="">
            </div>`;
})
document.querySelector(".stories").innerHTML = cluster;
document.querySelector(".stories").addEventListener("click", function(e){
    document.querySelector(".fullscreen").style.display = "block";
    document.querySelector(".fullscreen").style.backgroundImage = `url(${arr[e.target.id].story})`

    setTimeout(function(){
        document.querySelector(".fullscreen").style.display = "none";
    },3000)
})
