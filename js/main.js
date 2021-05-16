import {fontAnimation} from './font.js';
import {navbarScroll} from './navbar.js';
import {getPortfolio} from './portfolio.js';
import {openEmail, sendEmail} from './email.js';
getPortfolio();
fontAnimation();
openEmail();
sendEmail;

document.addEventListener('scroll', navbarScroll);