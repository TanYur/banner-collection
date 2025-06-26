
window.onscroll = function () {
    scrollsticker();
};
var sticker = document.getElementById("sticker");
var sticky = sticker.offsetTop;

function scrollsticker() {
    if (window.pageYOffset > sticky) {
        sticker.classList.add("sticky")
    } else {
        sticker.classList.remove("sticky");
    }
};
