export const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SiR96bAia8ODy3OSMi9e/scores';

export const scoreUl = document.querySelector('.scores');
// const gameID = 'zRPcLNnykoeas7KKzkpU'


export default async function displayData() {
    const fetchData = await fetch(url).then((response) => response.json());
    console.log("line61", fetchData.result)
    fetchData.result.forEach(item => {
        console.log("inside displaydata", item);
        const scoreContainer = document.createElement('li');
        scoreContainer.className = 'li_item';
        scoreContainer.innerHTML = `${item.user} : ${item.score}`;
        scoreUl.appendChild(scoreContainer);
        scoreUl.style.display = 'block';

    })
};