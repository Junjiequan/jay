let prevScrollpos = window.pageYOffset;

export const navbarScroll = ()=>{
    let currentScrollpos = window.pageYOffset;
    if(prevScrollpos > currentScrollpos){
        document.querySelector('[data-js="navbar"]').style.top="0";
    } else {
        document.querySelector('[data-js="navbar"]').style.top="-72px";
    }
    prevScrollpos = currentScrollpos;
}