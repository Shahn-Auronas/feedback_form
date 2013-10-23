//Blinking lights to draw interest to an otherwise boring page: feedback page. 
(function () {
    var textHolder = document.getElementsByTagName("h1")[0],
        text = textHolder.innerHTML,
        chars = text.length,
        newText = "",
        i,
        letters = document.getElementsByTagName("i"),
        flickers = [5, 7, 9, 11, 13, 15],
        randLet,
        fickNum,
        count,
        rand;
    for (i = 0; i < chars; i += 1) {
        newText += "<i>" + text.charAt(i) + "</i>";
    }
    textHolder.innerHTML = newText;
    
    function randFromInterv(from, to) {
        return Math.floor(Math.random() * ( to - from + 1) + from);
    }
    function hasClass(elem, cls) {
        return (" " + elem.className + " ").indexOf(" " + cls + " ") > -1;
    }
    function flick() {
        count += 1;
        if (count === flickNum) {
            return;
        }
        setTimeout(function () {
            if (hasClass(randLet, "off")) {
                randLet.className = "";
            } else {
                randLet.className = "off";
            }
            flick();
        }, 30);
    }
    (function loop() {
        rand = randFromInterv(500, 3000);
        randLet = randFromInterv(0, 26);
        randLet = letters[randLet];
        flickNum = randFromInterv(0, 6);
        flickNum = flickers[flickNum];
        setTimeout(function () {
            counter = 0;
            flick();
            loop();
        }, rand);
    })();
})();
