export const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SiR96bAia8ODy3OSMi9e/scores';

export const scoreUl = document.querySelector('.scores');

const displayData = async () => {
  const fetchData = await fetch(url).then((response) => response.json());
  fetchData.result.sort((a, b) => b.score - a.score);
  fetchData.result.forEach((item) => {
    const scoreContainer = document.createElement('tr');
    scoreContainer.className = 'li_item';
    scoreContainer.innerHTML = `<td>${item.user} </td>: <td>${item.score}</td>`;
    scoreUl.appendChild(scoreContainer);
    scoreUl.style.display = 'block';
  });
};

export { displayData };