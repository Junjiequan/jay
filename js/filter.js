const filter = document.querySelector('[data-js="projects-filter"]');
const btnAll = filter.querySelector('#all');
const btnJs = filter.querySelector('#js');
const btnStyle = filter.querySelector('#styling');

export const portfolioFilter = (event) =>{
    const portfolios = document.querySelectorAll('.portfolio__item');
    portfolios.forEach(item => {
        switch (event.id){
            case 'all':
                item.style.display = 'flex';
                setTimeout(()=>{
                    item.style.opacity = 1;
                    item.style.transform = 'scale(1)';
                },50)
                break;
            case 'js':
                if(item.dataset.id === 'javascript'){
                    item.style.display = 'flex';
                    setTimeout(()=>{
                        item.style.opacity = 1;
                        item.style.transform = 'scale(1)';
                    },50);
                } else {
                    item.style.opacity = 0;
                    item.style.transform = 'scale(0)';
                    setTimeout(()=>item.style.display = 'none', 300);
                };
                break;
            case 'styling':
                if(item.dataset.id === 'styling'){
                    item.style.display = 'flex';
                    setTimeout(()=>{
                        item.style.opacity = 1;
                        item.style.transform = 'scale(1)';
                    },50);
                } else {
                    item.style.opacity = 0;
                    item.style.transform = 'scale(0)';
                    setTimeout(()=>item.style.display = 'none', 300);
                };
                break;

        }
    })
} 

filter.addEventListener('click', (e)=> portfolioFilter(e.target))