export function stop() {
    var audio = document.getElementById("idAudio"); 
    audio.pause(); 
    audio.currentTime = 0;
}