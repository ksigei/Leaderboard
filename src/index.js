import './style.css';

import {displayData, url, scoreUl } from './modules/display_data.js';

const nameValue = document.querySelector('#name');
const scoreValue = document.querySelector('#score');
const addBtn = document.querySelector('#submit_score');
const ourRefreshBtn = document.querySelector('#refresh_btn');

addBtn.addEventListener('click', () => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: nameValue.value,
      score: scoreValue.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
});

ourRefreshBtn.addEventListener('click', () => {
  if (scoreUl.innerHTML !== '') {
    scoreUl.innerHTML = '';
    displayData();
  } else {
    displayData();
  }
});

nameValue.value = '';
scoreValue.value = '';