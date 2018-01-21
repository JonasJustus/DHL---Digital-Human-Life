function on() {
    document.getElementById("overlay").style.display = "block";
    // var wall = new Freewall("#freewall");
    // wall.reset({
    //     selector: '.brick',
    //     animate: true,
    //     cellW: 160,
    //     cellH: 160,
    //     delay: 50,
    //     onResize: function() {
    //         wall.fitWidth();
    //     }
    // });
}

function off() {
    document.getElementById("overlay").style.display = "none";
}
