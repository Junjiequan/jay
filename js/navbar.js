let prevScrollpos = window.pageYOffset;

export const navbarScroll = ()=>{
    let currentScrollpos = window.pageYOffset;
    
    prevScrollpos > currentScrollpos
    ? document.querySelector('[data-js="navbar"]').style.top="0"
    : document.querySelector('[data-js="navbar"]').style.top="-72px";

    prevScrollpos = currentScrollpos;
}