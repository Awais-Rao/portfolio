/*==================== HIDE LOADER====================*/
const loader = document.getElementById('preloader');
window.addEventListener("load", ()=>{
    loader.style.visibility= "hidden";
    // const screenWidth  = window.screen.width;
    // alert(screenWidth);
})

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenue = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close') 


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenue.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenue.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

    function toggleSkills(){
        let itemclass = this.parentNode.className;

        for(i=0; i<skillsContent.length; i++){
            skillsContent[i].className='skills__content skills__close'
        }
        if(itemclass === 'skills__content skills__close'){
            this.parentNode.className = 'skills__content skills__open'
        }
    }

    skillsHeader.forEach((el)=>{
        el.addEventListener('click', toggleSkills)
    })

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach(tab =>{
        tab.addEventListener('click', ()=>{
            const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')

        })
    })

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('services__modal-close'),
      modalCloseBtn1 = document.getElementById('close'),
      modalCloseBtn2 = document.getElementById('close2'),
      modalCloseBtn3 = document.getElementById('close3');

    let modal = function(modalClick){
        modalViews[modalClick].classList.add('active-modal')
    }

    modalBtns.forEach((modalBtn, i) => {
        modalBtn.addEventListener('click', () =>{
           modal(i)
    })   
    }); 


    modalCloseBtn1.addEventListener('click', ()=>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal');
        })
    } )
    
    modalCloseBtn3.addEventListener('click', ()=>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal');
        })
    } )
    
    modalCloseBtn2.addEventListener('click', ()=>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal');
        })
    } )
    

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    // Optional parameters    
    loop: true,
    cssMode : true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial_container', {
    // Optional parameters    
    loop: true,
    grabCursor : true,
    spaceBetween : 48,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active__link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active__link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*==================== SEND CONTACT FORM ====================*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message'),
    contactAlert = document.getElementById('contact-alert');


const sendEmail = (e) =>{

    e.preventDefault()

    //check if the field has a value
    if( contactName.value === '' || contactProject.value === '' || contactEmail.value === ''){
        //Add color
        contactAlert.classList.remove('color-green')
        contactAlert.classList.add('color-red')


        //Show message
        contactAlert.innerHTML = 'Write all the input fields  <i class="uil uil-envelope-exclamation contact-alert-icon"></i>';
        
        //remove message after five seconds
        setTimeout(()=>{
            contactAlert.innerHTML= ''
        }, 5000)
        

    }else{

       // Check for internet connection
       if(navigator.onLine){
                 //service-ID , templet-TD , #form , publicKey
                 emailjs.sendForm('service_qqx9kkb','template_zqpegsw','#contact-form','6gWau3TH7iSHrm1ez')
                 .then(()=> {
                     contactAlert.classList.remove('color-red')
                     contactAlert.classList.add('color-green')
                     contactAlert.innerHTML = 'Form sent successfuly  <i class="uis uis-check-circle contact-alert-icon"></i>';
         
                     // reset form Values
                     contactForm.reset();
                     
                     //remove message after five seconds
                     setTimeout(()=>{
                         contactAlert.innerHTML= ''
                     }, 7000)
         
                 },(error)=>{
                     alert("OOPS! Something has failed......")
                 })
       }
       // If device dont have connection
       else{
        //Add color
        contactAlert.classList.remove('color-green')
        contactAlert.classList.add('color-red')

        //Show message
        contactAlert.innerHTML = 'looks like you dont have internet connection...  <i class="uil uil-wifi-slash contact-alert-icon"></i>';
        setTimeout(()=>{
            contactAlert.innerHTML= ''
        }, 5000)
       }
    }

}

contactForm.addEventListener('submit', sendEmail)


/*==================== TO DISABLE RIGHT CLICK ====================*/

document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);

/*==================== TO DISABLE SCREENSHOTS ====================*/
document.addEventListener('keyup', (e) => {
    if (e.key == 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screenshots disabled!');
    }
});

/*==================== TO DISABLE PRINTS WHIT CTRL+P ====================*/
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key == 'p') {
        alert('This section is not allowed to print or export to PDF');
        e.cancelable = true;
        e.preventDefault();
        e.stopImmediatePropagation();
    }
});

/*==================== TO DISABLE SHORTCUTS ====================*/
document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        alert('This web page do not allow to open Developers tool....');
        e.cancelable = true;
        e.preventDefault();
        e.stopImmediatePropagation();
       
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        alert('This web page do not allow Inspect tool....');
        e.cancelable = true;
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        alert('Editable elements are protected on this webpage.');
        e.cancelable = true;
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }


/*==================== SCROLL REVEAL ====================*/

// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2000,
//     delay: 400
// })

// sr.reveal(`.home__img`)
// sr.reveal(`.home__data` , {origin:'bottom'})

// sr.reveal(`.about__img` , {origin: 'right'})
// sr.reveal(`.about__data, .qualification__button` , {origin: 'left'})
// sr.reveal(`.home__social` , {origin:'left'} )
// sr.reveal(`.home__scroll` , {origin:'right'} )

// sr.reveal(`.section__title, .section__subtitle` )

// sr.reveal(`.skills__content` , {interval:600 , origin:'right'})

// sr.reveal(`.qualification__active`)

// sr.reveal(`.portfolio__container`, {origin:'bottom'})

// sr.reveal(`.project`)
// sr.reveal(`.project__data`, {origin:'right'})
// sr.reveal(`.project__img`, {origin:'left'})

// sr.reveal(`.testimonial_container`, {origin:'bottom'})

// sr.reveal(`.contact__information`, {origin:'left', interval:700})
// sr.reveal(`.contact__form`, {origin:'right'})

// sr.reveal(`.footer__container`)
// sr.reveal(`.footer__copy`, {origin:'bottom'})