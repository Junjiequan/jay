const navMobile = document.querySelector('[data-js="nav-mobile"]')
const navToggle = document.querySelector('[data-js="nav-toggle"]')
let prevScrollpos = window.pageYOffset;

export const navbarScroll = ()=>{
    let currentScrollpos = window.pageYOffset;
    if(currentScrollpos > 400){
        prevScrollpos > currentScrollpos
        ? document.querySelector('[data-js="navbar"]').style.top="0"
        : document.querySelector('[data-js="navbar"]').style.top="-85px";
    }
    prevScrollpos = currentScrollpos;
}
export const navMobileToggle = ()=>{
    document.addEventListener('click',(e)=>{
        if(e.target === navToggle){
            navToggle.classList.toggle('active')
            if(navToggle.classList.contains('active')){
                navMobile.style.right = "0"
                document.body.style.overflow = "hidden"
            } else {
                navMobile.style.right = "-100%"
                document.body.style.overflow = "auto"
            }
        } else {
            if(navToggle.classList.contains('active')){
                navToggle.classList.toggle('active')
                navMobile.style.right = "-100%"
                document.body.style.overflow = "auto"
            }
        }
    })
}