const filter = document.querySelector('[data-js="projects-filter"]');
const btnAll = filter.querySelector('#all');
const btnJs = filter.querySelector('#js');
const btnStyle = filter.querySelector('#styling');

const displayItem = (item)=>{
    setTimeout(()=>{
        item.style.display = 'flex';
        setTimeout(()=>{
            item.style.opacity = 1;
        },100)
    },300);
}
const hideItem = (item)=>{
    item.style.opacity = 0;
    setTimeout(()=>{
        item.style.display = 'none'
    }, 300);
}

export const portfolioFilter = (e) =>{
    e.preventDefault();
    const portfolios = document.querySelectorAll('.portfolio__item');
    const btn = filter.querySelectorAll('button');
    const event = e.target;
    btn.forEach(item=>{
        switch (event){
            case 'all':
                item.id === 'all'
                ? item.style.color = 'hsl(272, 76%, 53%)'
                : item.style.color = 'hsl(0, 0%, 22%)';
                break;
            case 'js':
                item.id === 'js'
                ? item.style.color = 'hsl(272, 76%, 53%)'
                : item.style.color = 'hsl(0, 0%, 22%)';
                break;
            case 'styling':
                item.id === 'styling'
                ? item.style.color = 'hsl(272, 76%, 53%)'
                : item.style.color = 'hsl(0, 0%, 22%)';
                break;
        }
    })
    portfolios.forEach(item => {
        
        switch (event.id){
            case 'all':
                hideItem(item);
                displayItem(item);
                break;
            case 'js':
                hideItem(item);
                if(item.dataset.id === 'javascript') displayItem(item)
                // : hideItem(item);
                break;
            case 'styling':
                hideItem(item);
                if(item.dataset.id === 'styling') displayItem(item)
                break;
            default:
                hideItem(item);
                displayItem(item);
        }
    })
} 

filter.addEventListener('click', (e)=> portfolioFilter(e))