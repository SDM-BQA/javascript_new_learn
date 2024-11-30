// selecting the body
const body = document.querySelector("#body");

// selecting thr buttons
const buttons = document.querySelectorAll('.btn')

buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
       const color = e.target.id
       body.style.backgroundColor = color
    })
})