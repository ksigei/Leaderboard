import './style.css';

import { item, dummyList } from './modules/list.js';

dummyList.forEach((e) => {
  item.innerHTML = `<li>${e.user}: ${e.score} </li>`;
});
