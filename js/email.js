import 'https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js';

const trigger = document.querySelector('[data-js="email-box-trigger"]')
const triggerBtn = document.querySelector('[data-js="email-box-btn-icon"]')
const emailBox = document.querySelector('[data-js="email-box"]')
const bgTrigger = document.querySelector('[data-js="blur-trigger"]')
const popSuccess = document.querySelector('[data-js="sending-success"]')
const navContact = document.querySelector('[data-js="contact"]')
const dropdown = document.querySelector('[data-js="dropdown-email-input"]')
const dropdownIcon = document.querySelector('[data-js="dropdown-icon"]')
const dropdownInput = document.querySelector('[data-js="dropdown-input"]')
const form = document.querySelector('[data-js="email-box"]')

const btnIconAnim = (icon) =>{
    triggerBtn.style.transform = "scale(0)"
    setTimeout(()=>{
        triggerBtn.className = `${icon}` 
        triggerBtn.style.transform = "scale(1)"
    }, 180)
}

const emailInputDropdown = {
    show(){
        dropdownIcon.style.transform = "rotate(90deg)" 
        dropdownInput.style.opacity = "1"
        dropdownInput.style.margin = ".5rem 0"
        dropdownInput.style.height = "2.4rem"
    },
    hide(){
        dropdownIcon.style.transform = ""
        dropdownInput.style.height = "0"
        dropdownInput.style.margin = "0"
        dropdownInput.style.opacity = "0"
    }
}

const backgroundBlur = (background='')=>{
    document.querySelector('.email--backDrop').style.background = `${background}`;    
}

const open = () =>{      
    bgTrigger.classList.add('email--backDrop')
    emailBox.style.display = "block";
    setTimeout(()=> emailBox.style.opacity= "1" , 50)
    backgroundBlur("rgba(0,0,0,0.4)")
    btnIconAnim('fas fa-angle-down')
}

const close = () =>{ 
    emailBox.style.opacity = "0";
    emailInputDropdown.hide
    backgroundBlur();
    btnIconAnim('far fa-comment-dots')

    setTimeout(()=>{
        bgTrigger.classList.remove('email--backDrop')
        emailBox.style.display = "none";
    },400);
}

const openEmailBox = ()=>{
    const emailBoxAct = function (){
        emailBox.style.display !== "block" ? open() : close();
    }

    trigger.addEventListener('click', emailBoxAct);

    navContact.addEventListener('click', emailBoxAct);

    //click outsider to close email-box
    document.addEventListener('click', (e)=>{
        const notEmailBox = !e.target.closest('[data-js="email-box"]')
        const notTrigger = e.target !== trigger;
        const notNavContact = e.target !== navContact;
        if( emailBox.style.display === "block"){
            notEmailBox && notTrigger && notNavContact 
            ? close() 
            : false;
        }
    })
    document.addEventListener('keydown', (e)=> e.key === 27 && emailBox.style.display === "block" ? trigger.click() : false);
    dropdown.addEventListener('click', ()=> {
        dropdownIcon.style.transform === "" 
        ? emailInputDropdown.show() 
        : emailInputDropdown.hide()
    })
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const openPopup = (text) =>{
        popSuccess.innerHTML = `${text}`;
        popSuccess.style.opacity="1"
        popSuccess.style.bottom = "9rem";
    }

    const closePopup = (text) =>{
        popSuccess.innerHTML = `${text}`;
        setTimeout(()=>{
            popSuccess.style.opacity="0"
            popSuccess.style.bottom = "-10rem";
        },2000)
    }
    const messageText = {
        sending: `<p>Message sending</p> <div class="lds-circle"><div></div></div> `,
        successed: `<p> <span>Message Received <i class="fas fa-check-square" style="margin-left:.5rem;"></i></span> </p>`,
        failed: `<p>Message sending failed!</p> `
    }

    openPopup(messageText.sending);

    emailjs.sendForm('Gmail', 'FromPortfolio', form , 'user__vC5IRi7AoVWfPldq')
        .then(result => {
            console.log('SUCCESS!', result.text);
            closePopup(messageText.successed);
        }), error => {
            console.log('FAILED...', error);
            closePopup(messageText.failed);
        }
        form.reset();
})

export {openEmailBox};