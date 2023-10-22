var img = document.querySelector("img");
    var cnt = 0;
    function jump() {
        console.log("hi");
        cnt++;
        if (cnt == 7) {
            cnt = 1;
        }
        img.src = "img/step" + cnt + ".jpg";

    }
    var interval = null;
    function repeat() {
        interval = setInterval(jump, 200);
    }
    function stop() {
        if (interval !== null)
            clearInterval(interval);
    }