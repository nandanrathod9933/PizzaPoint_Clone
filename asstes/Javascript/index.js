


function setimg(imgdata, card_title, card_txt) {
    $('#cardimgdata').attr('src', imgdata);
    $('#card_title').html(card_title);
    $('#card_txt').html(card_txt);

    $(".cover ").fadeIn("300 ");

    $(".cover ").click(function () {
        $(".cover ").fadeOut("300 ");
    })
    // $(".contents ").click(function(e) {
    //     e.stopPropagation();
    // })

}





// var activator = $('#activator');
var navBg = $('#fade-bg');
var addbtn = $('#menubars')
var removebtn = $('#removebtn')

addbtn.on('click', function () {
    $('#activate-menu').toggleClass('visible');
    navBg.fadeToggle();
});


navBg.on('click', function () {
    $('#activate-menu').removeClass('visible');
    $(this).hide();
});

removebtn.on('click', function () {
    navBg.fadeToggle();
    $('#activate-menu').removeClass('visible');

})



const btn = document.querySelector(".bar");
const navbar = document.querySelector(".list");
const anyone = document.querySelectorAll(".list li");

btn.addEventListener("click", () => {
    // console.log("hello");
    btn.classList.toggle("show");
    navbar.classList.toggle("show");
});

let chokdi = document.querySelector(".bar");
let way = document.querySelector(".fa-bars");
chokdi.onclick = function () {
    if (way.classList.contains("fa-bars")) {
        way.classList.replace("fa-bars", "fa-times");
    } else {
        way.classList.replace("fa-times", "fa-bars");
    }
}


anyone.forEach(element => {
    element.addEventListener("click", () => {
        navbar.classList.toggle("show");
        way.classList.replace("fa-times", "fa-bars");

    })
});

window.onscroll = () => {
    const header = document.querySelector('#header');
    const list = document.querySelector(".list");
    if (this.scrollY <= 10) {

        header.className = '';
        list.classList.remove("list1");
    } else {
        header.className = 'scroll';
        list.classList.add("list1");
    }

};


$(document).ready(function () {
    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    })
})