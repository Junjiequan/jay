const filter = document.querySelector('[data-js="projects-filter"]');
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

const portfolioFilter = (event) =>{
    'use strict';
    const portfolios = document.querySelectorAll('.portfolio__item');
    const btn = filter.querySelectorAll('button');

    portfolios.forEach(item => {
        switch (event.value){
            case 'all':
                hideItem(item);
                displayItem(item);
                break;
            case 'js':
                hideItem(item);
                if(item.dataset.id === 'javascript') displayItem(item)
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

filter.addEventListener('change', (e)=>{
    portfolioFilter(e.target);
});

export {portfolioFilter}; 