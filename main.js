

const p = document.querySelector("p");
const span =document.querySelector("span");


const newAdvice=()=>{
  
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data =>{
            span.innerHTML=data.slip.id;
            p.innerHTML=data.slip.advice;
        });
}