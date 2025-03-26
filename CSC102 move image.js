//I'm trimming this up as much as possible. It became a confusing rat's nest of bugs so I'm deffering to simplicity. 
// I'm using let instead of var in the spirit of keeping things as clean as possible...I've been playing whack a bug for a while.
let meme;
let startButton;
let stopButton;

function startMoving()
{
    meme.classList.add("rise-up"); //This feels like bullying my css, but if it works..
    startButton.disabled = true; //I'm disabling the start and enabling my stop at the start of my animation. The opposite at the end. 
    stopButton.disabled = false; // This is mostly out of spite for how much time I've wasted on those buttons. 

        setTimeout(() => {
            meme.classList.remove("rise-up"); // bring him back down
        
            setTimeout(() => {
                startButton.disabled = false; // re-enable after retreat
            }, 1000); // wait 1 second for retreat
        }, 2000); // wait 2 seconds before starting retreat
}
    
function stopMoving()
{
    meme.classList.remove("rise-up"); //get back down there!
    startButton.disabled = false;
    stopButton.disabled = true; 
}

function initialize() 
{
    meme = document.getElementById("meme");
    startButton = document.getElementById("startButton");
    stopButton = document.getElementById("stopButton");
    
    startButton.onclick = startMoving;
    stopButton.onclick = stopMoving;
}

window.onload = function ()// It was executing to quickly, so I'm using this to slow it down and get my page out of its own way.   
{
    initialize();
};

//I went from well over a hundred lines down to this. 
//I've learned that it is easy to get tangled up and have redundant or conflicting code while hyperfocused on a specific outcome.
// Despite what isn't here, this project taught me about keyframes in css, nesting lines within parent and child code, and how handy using "let" when "var" is not helping my cause.










