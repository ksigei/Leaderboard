import './style.css';

const item = document.querySelector('.scores');

const dummyList = [
  {
    user: 'Kip',
    score: 200,
  }, {
    user: 'Raheem',
    score: 200,
  }, {
    user: 'Musk',
    score: 200,
  }, {
    user: 'Koech',
    score: 200,
  },
];

dummyList.forEach((e) => {
  item.innerHTML = `<li>${e.user}: ${e.score} </li>`;
});

for (let i = 0; i < item.length; i = +1) {
  if (i % 2 === 0) {
    item[i].style.backgroundColor = '#fff';
  } else {
    item[i].style.backgroundColor = '#e0dddd';
  }
}