const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

//h1.style.color ="blue";

// js에서 css를 변경하는 것을 선호하지 않는다.
function handleh1Click(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    }else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleh1Click);



