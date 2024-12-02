// javascript is a sequentially run language

// document.getElementById('owl').onclick = function(){
//     alert('owl')
// }

// attachEvent() -> used for Internet explorer
// jquery

// best approach
// document.getElementById("owl").addEventListener(
//   "click",
//   (e) => {
//     console.log(e);
//   },
//   false
// );

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altKey, ctrlKey, shiftKey, KeyCode

// event propagation
// event bubbling, eventCapturing
// document.getElementById("images").addEventListener(
//   "click",
//   (e) => {
//     console.log("clicked inside the ul");
//   },
//   false
// );

// document.getElementById("owl").addEventListener(
//   "click",
//   (e) => {
//     console.log("owl clicked");
//     e.stopPropagation();
//   },
//   false
// );

// preventDefault
// document.getElementById('google').addEventListener('click',(e)=>{
//     console.log("google clicked");
//     e.preventDefault()
//     e.stopPropagation()
// })

    document.querySelector('#images').addEventListener('click',(e)=>{
        if(e.target.tagName === 'IMG'){
            console.log(e.target.id);
            let removeIt = e.target.parentNode
            removeIt.remove()
        }
        
    }, false)