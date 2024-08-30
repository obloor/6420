window.onload = function () {
    let scene = 0;
    let scenes = [
        document.getElementById("sidebar_scene1"),
        document.getElementById("sidebar_scene2"),
        document.getElementById("sidebar_scene3")
    ];
    let timer = null;

    document.getElementById("sidebarReplay").addEventListener("click", play);
    function changeScene() {
        switch (scene) {
            case 0:
                scenes[0].style.visibility = "visible";
                scenes[1].style.visibility = "hidden";
                scenes[2].style.visibility = "hidden";
                break;
            case 1:
                scenes[0].style.visibility = "hidden";
                scenes[1].style.visibility = "visible";
                scenes[2].style.visibility = "hidden";
                break;
            case 2:
                scenes[0].style.visibility = "hidden";
                scenes[1].style.visibility = "hidden";
                scenes[2].style.visibility = "visible";
                break;
            default:
                break;
        }
    }

    function animateSidebar() {
        scene++;
        if (scene >= scenes.length) {
            clearInterval(timer);
        }
        changeScene();
        
    }

    function play() {
        scene = 0;
        changeScene();
        timer = setInterval(animateSidebar, 3000);
    }

    play();
}