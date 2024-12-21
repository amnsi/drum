const noOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < noOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        const buttonInnerHtml = this.innerHTML;

        switch (buttonInnerHtml) {
            case "w":
                const tom1Audio = new Audio("./sounds/tom-1.mp3");
                tom1Audio.play();
                break;
            case "a":
                const tom2Audio = new Audio("./sounds/tom-2.mp3");
                tom2Audio.play();
                break;
            case "s":
                const tom3Audio = new Audio("./sounds/tom-3.mp3");
                tom3Audio.play();
                break;
            case "d":
                const tom4Audio = new Audio("./sounds/tom-4.mp3");
                tom4Audio.play();
                break;
            case "j":
                const crashAudio = new Audio("./sounds/crash.mp3");
                crashAudio.play();
                break;
            case "k":
                const kickAudio = new Audio("./sounds/kick-bass.mp3");
                kickAudio.play();
                break;
            case "l":
                const snareAudio = new Audio("./sounds/snare.mp3");
                snareAudio.play();
                break;
            default:
                console.log("Issue with button text:");
                console.log(this);
                break;
        }


    });
}


