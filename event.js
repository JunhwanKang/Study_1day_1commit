const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

//title.style.color ="blue";

function handleTitleClick(){
    console.log("title was clicked");
    title.style.color ="blue";
}

function handleMouseEnter(){
    title.innerText ="mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone";
}

title.addEventListener("click", handleTitleClick);

title.addEventListener("mouseenter", handleMouseEnter);

title.addEventListener("mouseleave", handleMouseLeave);