// 첫번째거 하나만 가져온다. Element
// querySelector와 getElementById의 차이점을 알아보자...
const title1 = document.querySelector(".hello h1");

// 모두를 가져옴. Array
const title2 = document.querySelectorAll(".hello h1");

console.log(title1);

console.log(title2);