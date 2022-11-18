'use strict';

import musicData from "./musicData.js";

const btnOpenEl = document.querySelector('.btn-open');
const btnCloseEl = document.querySelector('.btn-close');
const mainNav = document.querySelector('.nav-main');
const mainLogo = document.querySelector('.logo-main')
const songlist = document.querySelector(".songlist");

// NAVBAR FUNCTIONALITY
btnOpenEl.addEventListener('click', () => {
    mainNav.style.left = '0rem';
    btnCloseEl.style.display = 'block';
});

btnCloseEl.addEventListener('click', () => {
    mainNav.style.left = '-16rem';
    btnCloseEl.style.display = 'none';
});

// PLAYLIST
for(let song of musicData){
    songlist.innerHTML += `
    <li>
        <button class="song-item">
            <img src="${song.posterUrl}" alt="${song.title} Cover Art" class="song-img">
        </button>
    </li>
    `
}
