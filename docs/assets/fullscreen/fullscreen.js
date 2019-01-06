function fullscreen(){
    let goFS = document.getElementById("goFS");
    goFS.addEventListener("click", function() {
        alert('sdf');
        document.body.requestFullscreen();
    }, false);
}