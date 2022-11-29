// mouse move code start here
let move = (a)=>{
    let circle = document.querySelector(".circle");
    circle.style.left = a.clientX + "px";
    circle.style.top = a.clientY + "px";
    circle.style.transition = "all linear 0.3s";
}

document.addEventListener("mousemove",move);
// mouse move code end here