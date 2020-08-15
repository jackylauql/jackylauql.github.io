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

var portfolioScroll = $('#portfolio').offset().top
var aboutScroll = $('#about').offset().top
var contactScroll = $('#contact').offset().top

var introLinkImg = document.getElementById('intro-link-img')
var portfolioLinkImg = document.getElementById('portfolio-link-img')
var aboutLinkImg = document.getElementById('about-link-img')
var contactLinkImg = document.getElementById('contact-link-img')


const reset = () =>{
    if (window.innerWidth > 1300) {
        navBar.style.transform ="translateX(0px)"
    }
    if (navBar.style.transform ==="translateX(0px)") {
        navMenu.style.transform = "translateX(200px)"
    }
    portfolioScroll = $('#portfolio').offset().top
    aboutScroll = $('#about').offset().top
    contactScroll = $('#contact').offset().top
}

window.onresize = reset

const resetImageColor = () => {
    introLinkImg.src = "/images/links/intro_white.png"
    portfolioLinkImg.src = "/images/links/portfolio_white.png"
    aboutLinkImg.src = "/images/links/about_white.png"
    contactLinkImg.src = "/images/links/contact_white.png"
}


$(window).scroll(() =>{
    var currentScroll = $(window).scrollTop()
    resetImageColor()
    if (currentScroll >= contactScroll) {
        $('#intro-link').removeClass("active-scroll-nav")
        $('#portfolio-link').removeClass("active-scroll-nav")
        $('#about-link').removeClass("active-scroll-nav")
        $('#contact-link').addClass("active-scroll-nav")
        contactLinkImg.src = "/images/links/contact_black.png"
    } else if (currentScroll >= aboutScroll) {
        $('#intro-link').removeClass("active-scroll-nav")
        $('#portfolio-link').removeClass("active-scroll-nav")
        $('#about-link').addClass("active-scroll-nav")
        aboutLinkImg.src = "/images/links/about_black.png"
        $('#contact-link').removeClass("active-scroll-nav")
    } else if (currentScroll >= portfolioScroll) {
        $('#intro-link').removeClass("active-scroll-nav")
        $('#portfolio-link').addClass("active-scroll-nav")
        portfolioLinkImg.src = "/images/links/portfolio_black.png"
        $('#about-link').removeClass("active-scroll-nav")
        $('#contact-link').removeClass("active-scroll-nav")
    } else {
        $('#intro-link').addClass("active-scroll-nav")
        introLinkImg.src = "/images/links/intro_black.png"
        $('#portfolio-link').removeClass("active-scroll-nav")
        $('#about-link').removeClass("active-scroll-nav")
        $('#contact-link').removeClass("active-scroll-nav")
    }   
})
