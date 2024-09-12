/*=============== MOSTRAR Y OCULTAR SIDE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Mostrar Menu */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Ocultar Menu */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== OCULTAR EL MENU AL HACER CLICK ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //cuando clickamos cualquier link se elimina la clase show- menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CAMBIA EL COLOR DEL HEADER AL BAJAR ===============*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    // agrega una clase si la medida del viewport es mayor a 50
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)
bgHeader()

/*=============== SWIPER PROYECTOS ===============*/ 
const swiperproyectos = new Swiper('.proyectos__swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 'auto',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

/*=============== APARECER FLECHA PARA VOLVER A INICIO ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // Cuando el scroll es mayor que la altura de 350 viewport, agrega la clase "show-scroll" a la flecha para volver a inicio para que aparezca en pantalla.
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
scrollUp()

/*=============== SCROLL REVEAL BIBLIOTECA EXTERNA!! ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay: 200,
    //reset: true //animation repeat
})

sr.reveal('.home__content, .proyectos__data, .proyectos__swiper, .footer__container')
sr.reveal('.home__images', {origin: 'bottom', delay: 1000})
sr.reveal('.bio__images, .contacto__img, .testimonios', {origin: 'left'})
sr.reveal('.contacto__data', {origin: 'right'})
sr.reveal('.experiencia__card', {interval: 100})