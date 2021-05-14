export const fontAnimation = () =>{
    const font = document.querySelector('[data-js="font-animation"]')
    const fontSplit = font.innerText.split('');
    font.innerText = '';
    fontSplit.map(text =>{
        if(text === 'L'){
            font.innerHTML = font.innerHTML + "<span class='big'>" + text + "</span>"
        } else {
            font.innerHTML = font.innerHTML + "<span>" + text + "</span>"
        }
    })
    //font animation
    let char = 0;
    const action = () =>{
        const span = font.querySelectorAll('span')[char]
        span.classList.add('animation')
        if(++char >= fontSplit.length){
            clearInterval(timer);
            setTimeout(()=>{
                font.querySelectorAll('span').forEach(index=>{
                    index.style.opacity = '0';
                })
            },6000)
            setTimeout(()=>{
                fontAnimation();
            },7200)
        }
    }
    const timer = setInterval(action, 50);
}