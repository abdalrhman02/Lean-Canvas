
/* Hi JS :> */
let myPrompt = document.getElementById("prompt");
let generateBtn = document.getElementById("generateBtn");
let canvasResult = document.getElementById("canvas-result")

let loadingDiv = document.getElementById("loading");

generateBtn.addEventListener('click', (event) => {
   
    if(myPrompt.value !== '') {
        event.preventDefault()

        loadingDiv.style.cssText = "display:flex"
       
        setTimeout(()=> { 
            canvasResult.style.cssText = "display:grid"
            loadingDiv.style.cssText = "display:none"
        }, 2000)    
    }

});



/* Game Notifaction :> */
let noti = document.getElementById("play");
let notiBtn = document.getElementById("notiBtn");
let theGame = document.getElementById("theGame");

setTimeout(() => {
    noti.style.cssText = "transform: translateX(0em);"
}, 6000);

notiBtn.addEventListener("click", () => {
    noti.style.cssText = "display:none"
    theGame.style.cssText = "display: flex"
});


let question = document.getElementById("question");
let yesBtn = document.getElementById("yesAnswer");
let noBtn = document.getElementById("noAnswer");

let yesDiv = document.getElementById("yes");
let noDiv = document.getElementById("no");

yesBtn.addEventListener('click', () => {
    question.style.cssText = "display:none"
    yesDiv.style.cssText = "display:block"
});

noBtn.addEventListener('click', () => {
    question.style.cssText = "display:none"
    noDiv.style.cssText = "display:block"
});


let notiExitIcon = document.querySelectorAll(".fa-xmark");

notiExitIcon.forEach(exit => {
    exit.addEventListener("click", () => {
        theGame.style.cssText = "display:none"
    });
});


/* Cursor Script */

/*
    Remove the comment if you want see the cursor
    Dont forgot to see its html code and style
*/

// var cursor = document.querySelector(".cursor");
// var cursorTwo = document.querySelector(".cursor2");

// document.addEventListener("mousemove", (e) => {
//     cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;"
// })