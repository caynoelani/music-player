'use strict';

const btnOpenEl = document.querySelector('.btn-open');
const btnCloseEl = document.querySelector('.btn-close');
const mainNav = document.querySelector('.nav-main');
const mainLogo = document.querySelector('.logo-main')

btnOpenEl.addEventListener('click', () => {
    mainNav.style.left = '0rem';
    btnCloseEl.style.display = 'block';
});

btnCloseEl.addEventListener('click', () => {
    mainNav.style.left = '-16rem';
    btnCloseEl.style.display = 'none';
});