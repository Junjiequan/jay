import 'https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js';

const trigger = document.querySelector('[data-js="email-box-trigger"]')
const emailBox = document.querySelector('[data-js="email-box"]')
const bgTrigger = document.querySelector('[data-js="blur-trigger"]')
const popSuccess = document.querySelector('[data-js="sending-success"]')
const navContact = document.querySelector('[data-js="contact"]')
const open = ()=>{
    // document.body.style.overflow = "hidden"
    bgTrigger.classList.add('email--backDrop')
    document.querySelector('.email--backDrop').style.backdropFilter = "blur(2px)"
    //backdropFilter fallback
    document.querySelector('.email--backDrop').style.background = "rgba(0,0,0,0.3)"
    emailBox.style.display = "block";
    setTimeout(()=>{
        trigger.innerHTML = `<i class="fas fa-angle-down"></i>`
        emailBox.style.opacity= "1";
    },50)
}
const close = ()=>{
    // document.body.style.overflow = "auto"
    trigger.innerHTML = `<i class="far fa-comment-dots"></i>`
    document.querySelector('.email--backDrop').style.backdropFilter = ""
    //backdropFilter fallback
    document.querySelector('.email--backDrop').style.background = ""
    emailBox.style.opacity = "0";
    setTimeout(()=>{
        bgTrigger.classList.remove('email--backDrop')
        emailBox.style.display = "none";
    },400)
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