import {fontAnimation} from './font.js';
import {navbarScroll} from './navbar.js';
import {getPortfolio} from './portfolio.js';

getPortfolio();
fontAnimation();

document.addEventListener('scroll', navbarScroll);

