"use strict";
let menuBtn = document.querySelector('.db-header__menu-toggle');
let menuWrap = document.querySelector('.db-header__list');

menuBtn.addEventListener('click', () => {
    menuWrap.classList.toggle('active');
});
