const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

//h1.style.color ="blue";

function handleh1Click(){
/*  const clickedClass = "active";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass)= "";
    } else {
        h1.classList.add(clickedClass); 
    }
*/
    h1.classList.toggle("active");
}

h1.addEventListener("click", handleh1Click);



