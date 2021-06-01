import {fontAnimation} from './font.js';
import {navMobileToggle, navbarScroll} from './navbar.js';
import {getPortfolio} from './portfolio.js';
import {openEmailBox} from './email.js';
import {portfolioFilter} from './filter.js';

getPortfolio();
fontAnimation();
openEmailBox();
navMobileToggle();
portfolioFilter;

document.addEventListener('scroll', navbarScroll);
