var navMenu = document.getElementsByClassName('nav-menu')[0]
var navBar = document.getElementsByClassName('navigation-bar')[0]
var containerHeader = document.getElementsByClassName('containerHeader')
var project = document.getElementById('project')
var about = document.getElementById('about')
var contact = document.getElementById('contact')
var projectContainer = document.getElementsByClassName('projectContainer')[0]
var aboutContainer = document.getElementsByClassName('aboutContainer')[0]
var aboutLeftItems = document.getElementsByClassName('aboutLeftItems')[0]
var aboutLanguageContainer = document.getElementsByClassName('aboutLanguageContainer')[0]
var contactItems = document.getElementsByClassName('contactItems')[0]



var projectScroll = $('#project').offset().top
var projectContainerScroll = $('.projectContainer').offset().top
var aboutScroll = $('#about').offset().top
var contactScroll = $('#contact').offset().top
var aboutContainerScroll = $('.aboutContainer').offset().top
var halfWindowHeight = Math.floor((window.innerHeight) / 2)




const reset = () =>{
    // if (window.innerWidth > 1300) {
    //     navBar.style.transform ="translateX(0px)"
    // }
    // if (navBar.style.transform ==="translateX(0px)") {
    //     navMenu.style.transform = "translateX(200px)"
    // }
    halfWindowHeight = Math.floor((window.innerHeight) / 2)
    projectScroll = $('#project').offset().top
    projectContainerScroll = $('.projectContainer').offset().top
    aboutScroll = $('#about').offset().top
    aboutContainerScroll = $('.aboutContainer').offset().top
    contactScroll = $('#contact').offset().top
}

window.onresize = reset

var currentScroll = $(window).scrollTop()
if (currentScroll >= (contactScroll - Math.floor(halfWindowHeight/2 * 3))) {
    contact.firstElementChild.firstElementChild.style.animationName = "slideFromLeft";
    contact.firstElementChild.firstElementChild.style.opacity = "1";
    contactItems.style.animationName = "popIn"
    contactItems.style.animationDuration = "1s"
    contactItems.style.transform = "scale(1)"
} 
if (currentScroll >= (aboutScroll - halfWindowHeight)) {
    about.firstElementChild.firstElementChild.style.animationName = "slideFromLeft";
    about.firstElementChild.firstElementChild.style.opacity = "1";
} 
if (currentScroll >= (projectScroll - halfWindowHeight)) {
    project.firstElementChild.firstElementChild.style.animationName = "slideFromLeft";
    project.firstElementChild.firstElementChild.style.opacity = "1";
} 
if (currentScroll >= (projectContainerScroll - halfWindowHeight)) {
    const numberOfProjects = projectContainer.children.length
    var index = 0
    while (index < numberOfProjects) {
        projectContainer.children[index].style.animationName = "slideFromBottom"
        projectContainer.children[index].style.opacity = "1"
        var delay = index * 0.3 + 0.7
        projectContainer.children[index].style.animationDuration = `${delay}s`
        index = index + 1
    }
}
if (currentScroll >= (aboutContainerScroll - halfWindowHeight)) {
    aboutLeftItems.style.animationName = "slideFromBottom"
    aboutLeftItems.style.animationDuration = "1s"
    aboutLeftItems.style.opacity = "1"

    const numberOfLanguages = aboutLanguageContainer.children.length
    console.log(numberOfLanguages)
    var index = 0
    var delay = 1
    while (index < numberOfLanguages) {
        aboutLanguageContainer.children[index].style.animationName = "rotateHorizontal"
        aboutLanguageContainer.children[index].style.opacity = "1"
        aboutLanguageContainer.children[index].style.animationDuration = `${delay}s`
                   
        index = index + 1
        delay = delay + 0.1
        
    }
    
}

$(window).scroll(() =>{
    currentScroll = $(window).scrollTop()
    if (currentScroll >= (contactScroll - Math.floor(halfWindowHeight/2 * 3))) {
        contact.firstElementChild.firstElementChild.style.animationName = "slideFromLeft";
        contact.firstElementChild.firstElementChild.style.opacity = "1";
        contactItems.style.animationName = "popIn"
        contactItems.style.animationDuration = "1s"
        contactItems.style.transform = "scale(1)"
    } 
    if (currentScroll >= (aboutScroll - halfWindowHeight)) {
        about.firstElementChild.firstElementChild.style.animationName = "slideFromLeft";
        about.firstElementChild.firstElementChild.style.opacity = "1";
    } 
    if (currentScroll >= (projectScroll - halfWindowHeight)) {
        project.firstElementChild.firstElementChild.style.animationName = "slideFromLeft";
        project.firstElementChild.firstElementChild.style.opacity = "1";
    } 
    if (currentScroll >= (projectContainerScroll - halfWindowHeight)) {
        const numberOfProjects = projectContainer.children.length
        var index = 0
        while (index < numberOfProjects) {
            projectContainer.children[index].style.animationName = "slideFromBottom"
            projectContainer.children[index].style.opacity = "1"
            var delay = index * 0.3 + 0.7
            projectContainer.children[index].style.animationDuration = `${delay}s`
            index = index + 1
        }
    }
    if (currentScroll >= (aboutContainerScroll - halfWindowHeight)) {
        aboutLeftItems.style.animationName = "slideFromBottom"
        aboutLeftItems.style.animationDuration = "1s"
        aboutLeftItems.style.opacity = "1"

        const numberOfLanguages = aboutLanguageContainer.children.length
        console.log(numberOfLanguages)
        var index = 0
        var delay = 1
        while (index < numberOfLanguages) {
            aboutLanguageContainer.children[index].style.animationName = "rotateHorizontal"
            aboutLanguageContainer.children[index].style.opacity = "1"
            aboutLanguageContainer.children[index].style.animationDuration = `${delay}s`
                       
            index = index + 1
            delay = delay + 0.1
            
        }
        
    }
})


// For highlighting active navigation
// var introLinkImg = document.getElementById('intro-link-img')
// var projectLinkImg = document.getElementById('project-link-img')
// var aboutLinkImg = document.getElementById('about-link-img')
// var contactLinkImg = document.getElementById('contact-link-img')
// const resetImageColor = () => {
//     introLinkImg.src = "/images/links/intro_white.png"
//     projectLinkImg.src = "/images/links/project_white.png"
//     aboutLinkImg.src = "/images/links/about_white.png"
//     contactLinkImg.src = "/images/links/contact_white.png"
// }
// $(window).scroll(() =>{
//     var currentScroll = $(window).scrollTop()
//     resetImageColor()
//     if (currentScroll >= contactScroll) {
//         $('#intro-link').removeClass("active-scroll-nav")
//         $('#project-link').removeClass("active-scroll-nav")
//         $('#about-link').removeClass("active-scroll-nav")
//         $('#contact-link').addClass("active-scroll-nav")
//         contactLinkImg.src = "/images/links/contact_black.png"
//     } else if (currentScroll >= aboutScroll) {
//         $('#intro-link').removeClass("active-scroll-nav")
//         $('#project-link').removeClass("active-scroll-nav")
//         $('#about-link').addClass("active-scroll-nav")
//         aboutLinkImg.src = "/images/links/about_black.png"
//         $('#contact-link').removeClass("active-scroll-nav")
//     } else if (currentScroll >= projectScroll) {
//         $('#intro-link').removeClass("active-scroll-nav")
//         $('#project-link').addClass("active-scroll-nav")
//         projectLinkImg.src = "/images/links/project_black.png"
//         $('#about-link').removeClass("active-scroll-nav")
//         $('#contact-link').removeClass("active-scroll-nav")
//     } else {
//         $('#intro-link').addClass("active-scroll-nav")
//         introLinkImg.src = "/images/links/intro_black.png"
//         $('#project-link').removeClass("active-scroll-nav")
//         $('#about-link').removeClass("active-scroll-nav")
//         $('#contact-link').removeClass("active-scroll-nav")
//     }   
// })

// For clicking on navigation menu
// navMenu.addEventListener('click', () => {
//     if (navMenu.style.transform === "translateX(0px)") {
//         navMenu.style.transform = "translateX(200px)"
//         navBar.style.transform ="translateX(0px)"
//         navBar.style.minWidth ="200px"
//     } else {
//         navMenu.style.transform = "translateX(0px)"
//         navBar.style.transform ="translateX(-200px)"
//     }
    
// })