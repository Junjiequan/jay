const navMobile = document.querySelector('[data-js="nav-mobile"]')
const navToggle = document.querySelector('[data-js="nav-toggle"]')
let prevScrollpos = window.pageYOffset;

const openMobNavBar = () =>{
    navMobile.style.right = "0"
    document.body.style.overflow = "hidden"
}
const closeMobNavBar = () =>{
    navMobile.style.right = "-100%"
    document.body.style.overflow = "auto"
}

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
        const onClick = e.target;
        if(onClick === navToggle){
            navToggle.classList.toggle('active');
            navToggle.classList.contains('active')? openMobNavBar() :  closeMobNavBar();
        }
        if(onClick !== navToggle && navToggle.classList.contains('active')){
            navToggle.classList.toggle('active' );
            closeMobNavBar();
        }
    })
}