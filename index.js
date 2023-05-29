import { list } from "./data.js";

const jsonList = JSON.parse(list);

const body = document.querySelector('body');
const ulEl = document.createElement("ul");
body.append(ulEl);
jsonList.forEach((el) => {
    const liEl = document.createElement('li');

    const pictEl = document.createElement('img');
    pictEl.src = el.image;
    liEl.append(pictEl);

    const pText = document.createElement('p');
    pText.innerText = el.text;
    liEl.append(pText);

    ulEl.append(liEl);
});