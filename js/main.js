import {fontAnimation} from './font.js';


//selectors
const itemContainer = document.querySelector('[data-js="portfolio"]')

//functions
async function init(){
    try{
        const res = await fetch('./js/data.json');
        if(!res.ok){
            throw new Error('What happend to my data?');
        }
        const data = await res.json();
        printData(data);
    } catch(err){
        console.log(err)
    }
}
init();

const printData = (data)=>{
    data.forEach(item => {
        itemContainer.insertAdjacentHTML('beforeend',
        `
        <div class="portfolio__item" id="${item.id}">
        <div class="portfolio__image">
            <img src="${item.image}" alt="${item.alt}">
            <div class="portfolio__image--hover">
                <a href="${item.live}" class="portfolio__button" target="__blank"><span>Live</span></a>
                <a href="${item.code}" class="portfolio__button" target="__blank"><span>Code</span></a>
            </div>
        </div>
    
        <div class="portfolio__skills">
        ${item.skill.map(skill =>{
            return `<span class="portfolio__skill portfolio__skill--${skill}">${skill}</span>`
        }).join('')}
        </div>
        <div class="portfolio__title">${item.name}</div>
        </div>
        `
        )
    })
}

//eventListeners
document.addEventListener('DOMContentLoaded ', fontAnimation());