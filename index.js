for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);//first parameter is which event and second is which function 
function handleClick(){
    var buttonInnerHtml=this.innerHTML;
    makesound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml

    )
    
        
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key)
    })
}};
function makesound(key){
    switch (key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
        case "a ":
            var tom2=new Audio("sounds/tom-2  .mp3");
            tom2.play();
        case "s":
            var tom3 =new Audio("sounds/tom-3.mp3");
            tom3.play();
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        case "w":
            var bass=new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;
    
        default: console.log ()
            break;
    }

}
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
}