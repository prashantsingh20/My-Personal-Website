const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 100})
sr.reveal('.home__img', {origin:'right', delay: 200})

sr.reveal('.about__img', {delay: 250})
sr.reveal('.about__subtitle', {delay: 150})
sr.reveal('.about__gallery', {delay: 200})
sr.reveal('.about__text', {delay: 250})
sr.reveal('.about__social-icon', {delay: 300, interval: 100})

sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 25, interval: 500})
sr.reveal('.skills__img', {delay: 200})

sr.reveal('.gallery__img', {interval: 100})
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 100})
sr.reveal('.contact__input', {delay: 200})
sr.reveal('.contact__button', {delay: 300})
