import 'https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js';

const trigger = document.querySelector('[data-js="email-box-trigger"]')
const triggerBtn = document.querySelector('[data-js="email-box-btn-icon"]')
const emailBox = document.querySelector('[data-js="email-box"]')
const bgTrigger = document.querySelector('[data-js="blur-trigger"]')
const popSuccess = document.querySelector('[data-js="sending-success"]')
const navContact = document.querySelector('[data-js="contact"]')


const btnIconAnim = (icon) =>{
    triggerBtn.style.transform = "scale(0)"
    setTimeout(()=>{
        triggerBtn.className = `${icon}` 
        triggerBtn.style.transform = "scale(1)"
    }, 180)
}
const open = ()=>{
    bgTrigger.classList.add('email--backDrop')
    document.querySelector('.email--backDrop').style.backdropFilter = "blur(2px)"
    document.querySelector('.email--backDrop').style.background = "rgba(0,0,0,0.3)"  //backdropFilter fallback
    emailBox.style.display = "block";
    setTimeout(()=> emailBox.style.opacity= "1" , 50)
    btnIconAnim('fas fa-angle-down')

}
const close = ()=>{
    document.querySelector('.email--backDrop').style.backdropFilter = ""
    document.querySelector('.email--backDrop').style.background = ""    //backdropFilter fallback
    emailBox.style.opacity = "0";
    setTimeout(()=>{
        bgTrigger.classList.remove('email--backDrop')
        emailBox.style.display = "none";
    },400)
    btnIconAnim('far fa-comment-dots')
}

export const openEmail = ()=>{
    trigger.addEventListener('click', ()=>{
        emailBox.style.display !== "block" ? open() : close()
    });
    navContact.addEventListener('click', ()=>{
        emailBox.style.display !== "block" ? open() : close()
    });
    document.addEventListener('click', (e)=>{
        const parent = e.target.closest('[data-js="email-box"]')
        if( emailBox.style.display === "block" 
            && parent !== emailBox
            && e.target !== trigger 
            && e.target !== navContact) 
        close();
    })
}

export const sendEmail = document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const form = e.target
    popSuccess.style.top = "2rem";
    emailjs.sendForm('Gmail', 'FromPortfolio', form , 'user_TV8FyBqlJdT9MLqlMZjuh')
        .then(result => {
            console.log('SUCCESS!', result.text)
            popSuccess.innerHTML = `
            <span> Message received. 👏</span>
            <p>I'll get back to you as soon as possible. 😉 </p>
            `
            setTimeout(()=>{
                popSuccess.style.top = "-10rem";
                setTimeout(()=>{
                    popSuccess.innerHTML = `
                    <span> Message sending. 📣</span>
                    `
                },1000)
            },3000)
        }), error => {
            console.log('FAILED...', error)
        }
        form.reset();
})