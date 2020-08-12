var navMenu = document.getElementsByClassName('nav-menu')[0]
var navBar = document.getElementsByClassName('navigation-bar')[0]

navMenu.addEventListener('click', () => {
    if (navMenu.style.transform === "translateX(0px)") {
        navMenu.style.transform = "translateX(200px)"
        navBar.style.transform ="translateX(0px)"
        navBar.style.minWidth ="200px"
    } else {
        navMenu.style.transform = "translateX(0px)"
        navBar.style.transform ="translateX(-200px)"
    }
    
})

var portfolioScroll = $('#portfolio').offset().top - (window.innerHeight * 0.3)
var aboutScroll = $('#about').offset().top - (window.innerHeight * 0.3)
var contactScroll = $('#contact').offset().top - (window.innerHeight * 0.3)

const reset = () =>{
    if (window.innerWidth > 1300) {
        navBar.style.transform ="translateX(0px)"
    }
    if (navBar.style.transform ==="translateX(0px)") {
        navMenu.style.transform = "translateX(200px)"
    }
    portfolioScroll = $('#portfolio').offset().top - (window.innerHeight * 0.3)
    aboutScroll = $('#about').offset().top - (window.innerHeight * 0.3)
    contactScroll = $('#contact').offset().top - (window.innerHeight * 0.3)
}

window.onresize = reset



$(window).scroll(() =>{
    var currentScroll = $(window).scrollTop()
    if (currentScroll >= contactScroll) {
        $('#intro-link').removeClass("active-scroll-nav")
        $('#portfolio-link').removeClass("active-scroll-nav")
        $('#about-link').removeClass("active-scroll-nav")
        $('#contact-link').addClass("active-scroll-nav")
    } else if (currentScroll >= aboutScroll) {
        $('#intro-link').removeClass("active-scroll-nav")
        $('#portfolio-link').removeClass("active-scroll-nav")
        $('#about-link').addClass("active-scroll-nav")
        $('#contact-link').removeClass("active-scroll-nav")
    } else if (currentScroll >= portfolioScroll) {
        $('#intro-link').removeClass("active-scroll-nav")
        $('#portfolio-link').addClass("active-scroll-nav")
        $('#about-link').removeClass("active-scroll-nav")
        $('#contact-link').removeClass("active-scroll-nav")
    } else {
        $('#intro-link').addClass("active-scroll-nav")
        $('#portfolio-link').removeClass("active-scroll-nav")
        $('#about-link').removeClass("active-scroll-nav")
        $('#contact-link').removeClass("active-scroll-nav")
    }   
})
