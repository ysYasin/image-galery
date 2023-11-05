const gImgContainer = $('.g-img-container');

const images = [
    { src: './imgs/img1.jpeg', alt: 'River and nature' },
    { src: './imgs/img2.jpeg', alt: 'Hill Before naptune' },
    { src: './imgs/img3.jpeg', alt: 'Road on a forest' },
    { src: './imgs/img6avif.avif', alt: 'Road on a forest' },
    { src: './imgs/img4.jpeg', alt: 'Hard working boy' },
    { src: './imgs/img5.jpeg', alt: 'Jannah Of Bok' },
    { src: './imgs/img7.avif', alt: 'Jannah Of Bok' },
    { src: './imgs/img8.avif', alt: 'Jannah Of Bok' },
    { src: './imgs/img-9.jpg', alt: 'Jannah Of Bok' },
    { src: './imgs/img1.jpeg', alt: 'River and nature' },
    { src: './imgs/img2.jpeg', alt: 'Hill Before naptune' },
    { src: './imgs/img3.jpeg', alt: 'Road on a forest' },
    { src: './imgs/img6avif.avif', alt: 'Road on a forest' },
    { src: './imgs/img4.jpeg', alt: 'Hard working boy' },
    { src: './imgs/img5.jpeg', alt: 'Jannah Of Bok' },
    { src: './imgs/img7.avif', alt: 'Jannah Of Bok' },
    { src: './imgs/img8.avif', alt: 'Jannah Of Bok' },
    { src: './imgs/img-9.jpg', alt: 'Jannah Of Bok' },
]

images.forEach((img) => {
    const div = document.createElement('div');
    $(div).addClass("img-div");
    const imgTag = document.createElement('img');
    $(imgTag).attr("src", img.src)
    $(imgTag).attr("alt", img.alt)
    $(imgTag).attr("onclick", "addgalery(this)")
    $(div).html(imgTag);

    gImgContainer.append(div)
})

const addgalery = (imgs) => {
    const display = $("#display");
    const imgtext = $("#imgtext");
    $(display).attr("src", imgs.src)
    display.parent().css("display", "block");
    imgtext.text(imgs.alt)
}