const itemContainer = document.querySelector('[data-js="portfolio"]');
export const getPortfolio = async function init() {
  try {
    const res = await fetch('./js/data.json');
    if (!res.ok) {
      throw new Error('What happend to my data?');
    }
    const data = await res.json();
    printData(data);
  } catch (err) {
    console.log(err);
  }
};

const skillLabelHover = (skill) => {
  switch (skill) {
    case 'html':
      return 'HTML5';
    case 'js':
      return 'Javascript';
    case 'css':
      return 'Css3';
    case 'react':
      return 'React & Hook';
    case 'scss':
      return 'Sass';
    case 'styled':
      return 'Styled-component';
    case 'api':
      return 'Consumes API';
    default:
      return null;
  }
};

const printData = (data) => {
  data.forEach((item) => {
    itemContainer.insertAdjacentHTML(
      'beforeend',
      `
        <div class="portfolio__item" id="${item.id}" data-id="${item.focus}">
            <div class="portfolio__image">
                <img src="${item.image}" alt="${item.alt}">
                <div class="portfolio__image--hover">
                    <a href="${
                      item.live
                    }" class="portfolio__button" target="__blank" rel="noopener noreferrer nofollow"><span>Live</span></a>
                    <a href="${
                      item.code
                    }" class="portfolio__button" target="__blank" rel="noopener noreferrer nofollow"><span>Code</span></a>
                </div>
            </div>
            <div class="portfolio__skills">
            ${item.skill
              .map((skill) => {
                return `<span class="portfolio__skill portfolio__skill--${skill}" title="${skillLabelHover(
                  skill
                )}">${skill}</span>`;
              })
              .join('')}
            </div>
            <div class="portfolio__title">${item.name}</div>
        </div>
        `
    );
  });
};
