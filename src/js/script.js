/* Burger menu show function */
function ShowBurgerMenu() {
    $('.burger-menu--inactive').addClass('visible');

    $('.header').css('background-color', 'black');
    $('.logo').addClass('logo--active');
    $('.burger-menu--active').removeClass('visible');

    $('.menu-block').css('display', 'block');
    setTimeout(function () {
        $('.menu-block').css('right', '0');
    }, 100);

    setTimeout(function () {
        $('.header').addClass('header-fixed');
    }, 300);

    checkShowBM = true;
}

/* Burger menu hide function */
function HideBurgerMenu() {
    $('.header').removeClass('header-fixed');
    $('.menu-block').css('right', '-100%');
    setTimeout(function () {
        $('.menu-block').css('display', 'none');
    }, 300);

    $('.burger-menu--active').addClass('visible');

    $('.header').css("background-color", "transparent");
    $('.logo').removeClass('logo--active');
    $('.burger-menu--inactive').removeClass('visible');

    checkShowBM = false;
}

function ResizeScreen() {
    let widthScreen = $(window).width();
    
    if (widthScreen >= 768 && checkShowBM == true) {
        HideBurgerMenu();    
    }
}

function ScrollToTitle(e) {
    e.preventDefault();

    let href = $(this).find('a').attr('href');
    let a = $(`${href}`).offset().top;

    $(window).scrollTop(a);
}

/* Vars */
var checkShowBM = false;

/* Burger menu show/hide event click */
$('.burger-menu--inactive').click(ShowBurgerMenu);
$('.burger-menu--active').click(HideBurgerMenu);

$('.menu-mobile__item').click(HideBurgerMenu);

/* Resize screen */
$(window).resize(ResizeScreen);

/* Scroll to title */
$('.menu__item').click(ScrollToTitle);
$('.menu-mobile__item').click(ScrollToTitle);