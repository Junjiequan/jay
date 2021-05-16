import {fontAnimation} from './font.js';
import {navMobileToggle, navbarScroll} from './navbar.js';
import {getPortfolio} from './portfolio.js';
import {openEmail, sendEmail} from './email.js';
getPortfolio();
fontAnimation();
openEmail();
sendEmail;
navMobileToggle();

document.addEventListener('scroll', navbarScroll);