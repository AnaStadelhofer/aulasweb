const lightbox = document.getElementById("lightbox");
const palco = document.getElementById("palco");
const close = document.getElementById("close");
const img_palco = palco.querySelector("img");

console.log(lightbox)

function abreLb(el) {
    let thumb = el.querySelector("img");
    console.log(thumb.src)

    img_palco.src = thumb.dataset.full;

    palco.classList.remove('hide')
}

close.addEventListener(
    'click',
    function () {
        palco.classList.add('hide')
    }
)