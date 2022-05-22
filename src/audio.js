// export function chooseAudio(final_ans) {
//     var source = document.createElement('source');
//     console.log(final_ans);
//     source.src = "http://127.0.0.1:8887/audio/" + final_ans + ".m4a";
//     document.getElementById("idAudio").appendChild(source);
// }

export function chooseAudio(final_ans) {
    var source = document.getElementById('source');
    var audio = document.getElementById("idAudio"); 
    source.src = "http://192.168.10.9:8080/" + final_ans + ".m4a";
    audio.load();
}