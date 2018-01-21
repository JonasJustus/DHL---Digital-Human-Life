var colour = [
    "rgb(216, 205, 205)"
    // "rgb(243, 156, 18)",
    // "rgb(211, 84, 0)",
    // "rgb(0, 106, 63)",
    // "rgb(41, 128, 185)",
    // "rgb(192, 57, 43)",
    // "rgb(135, 0, 0)",
    // "rgb(39, 174, 96)"
];

$(".brick").each(function() {
    this.style.backgroundColor =  colour[colour.length * Math.random() << 0];
    //$(".brick").append('<img src="https://images.fcbayern.com/is/image/fcbayern/product-gallery-small/weihnachtsfiguren-2er-set-20972.jpg?wid=660&hei=660&fmt=png-alpha" alt="">');
});

$(function() {
    var wall = new Freewall("#freewall");
    wall.reset({
        selector: '.brick',
        animate: true,
        cellW: 260,
        cellH: 160,
        delay: 50,
        onResize: function() {
            wall.fitWidth();
        }
    });
    wall.fitWidth();

    console.log(link);
    var temp = '<div class="brick {size}" style="background-color: {color}"><img id="picture" src="{link}"></div>';
    var size = "size33 size32 size31 size23 size22 size21 size13 size12 size11".split(" ");
    $(".add-more").click(function() {
        var html = "";
        for (var i = 0; i < 3; ++i) {
            html += temp.replace('{size}', size[size.length * Math.random() << 0])
                .replace('{color}', colour[colour.length * Math.random() << 0])
                .replace('{link}',link[counter]);
            if(counterlenght == counter){
                $(".add-more").removeAttribute(".add-more");
            }
            counter++;
        }
        wall.prepend(html);
    });
});
