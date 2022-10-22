


for (var i = 0; i< 7; i++) {
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var innerhtml = this.innerText;
    console.log(innerhtml);
   playsound(innerhtml);
var newinnerhtml = innerhtml.toLowerCase();
animation(newinnerhtml);
   })

}

function playsound(innerhtml){
    
switch (innerhtml) {
    case  "W":
        var audio = new Audio("DRUMKIT SOUNDS/crash.mp3");
    audio.play();
        break;
        case "A":
            var audio = new Audio("DRUMKIT SOUNDS/kick-bass.mp3");
        audio.play();
            break;
            case "S":
            var audio = new Audio("DRUMKIT SOUNDS/snare.mp3");
        audio.play();
            break;
            case "D":
            var audio = new Audio("DRUMKIT SOUNDS/tom-1.mp3");
        audio.play();
            break;
            case "J":
            var audio = new Audio("DRUMKIT SOUNDS/tom-2.mp3");
        audio.play();
            break;
            case "K":
            var audio = new Audio("DRUMKIT SOUNDS/tom-3.mp3");
        audio.play();
            break;
            case "L":
            var audio = new Audio("DRUMKIT SOUNDS/tom-4.mp3");
        audio.play();
            break;
    default:
        break;
}

}

document.addEventListener("keypress",function(event){
var keyboardkey = event.key ;

playsoundusingkayboard(keyboardkey);
animation(keyboardkey);
})

function playsoundusingkayboard(keyboardkey){
    switch (keyboardkey) {
        case  "w":
            var audio = new Audio("DRUMKIT SOUNDS/crash.mp3");
        audio.play();
            break;
            case "a":
                var audio = new Audio("DRUMKIT SOUNDS/kick-bass.mp3");
            audio.play();
                break;
                case "s":
                var audio = new Audio("DRUMKIT SOUNDS/snare.mp3");
            audio.play();
                break;
                case "d":
                var audio = new Audio("DRUMKIT SOUNDS/tom-1.mp3");
            audio.play();
                break;
                case "j":
                var audio = new Audio("DRUMKIT SOUNDS/tom-2.mp3");
            audio.play();
                break;
                case "k":
                var audio = new Audio("DRUMKIT SOUNDS/tom-3.mp3");
            audio.play();
                break;
                case "l":
                var audio = new Audio("DRUMKIT SOUNDS/tom-4.mp3");
            audio.play();
                break;
        default:
            break;
    }
    
    

}
function animation(currentkey){
   document.querySelector("."+currentkey).classList.add("pressed");
setTimeout(function(){
    document.querySelector("."+currentkey).classList.remove("pressed");

},100);
}
