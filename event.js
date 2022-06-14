const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

//h1.style.color ="blue";

function handleh1Click(){
    console.log("h1 was clicked");
    h1.style.color ="blue";
}

function handleMouseEnter(){
    h1.innerText ="mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOffline(){
    alert("ALL GOOOD");
}

//h1.addEventListener("click", handleh1Click);
h1.onclick = handleh1Click;

//h1.addEventListener("mouseenter", handleMouseEnter);
h1.onmouseenter = handleMouseEnter;

//h1.addEventListener("mouseleave", handleMouseLeave);
h1.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);