console.log("JavaScript is working!");

async function init() {
    const domElement = document.getElementById("news");

    const character = await getSwapiData();
    console.log(character.articles[0].title)
    const div = document.createElement('p');
    div.innerHTML ='breaking news:' +`${character.articles[0].title}`;
    domElement.append(div);

    // comparison with a .then syntax
    // getSwapiData().then((character) => {
    //   const ul = document.createElement("ul");
    //   ul.innerHTML = `<li>${character.name}</li>`;
    //   domElement.append(ul);
    // });
}

/**
 * Async function to get the data from the SWAPI api
 * @returns - returns a promise
 */
async function getSwapiData() {
    try {
        let response = await fetch("https://newsapi.org/v2/everything?q=max%20verstappen&apiKey=886de0e5fdfc4c418e15410d188988dd");
        let character = await response.json();
        return character;
    } catch (err) {
        console.error("Error: ", err);
    }
}

init();