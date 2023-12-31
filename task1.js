// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// За допомогою засобів Dom доступитись до усіх елементів списку, в черговості
// перший елемент - змінна firstEl
// останній елемент - змінна lastEl
// другий елемент - змінн secondEl
// четвертний елемент - змінна fourthEl
//третій елемент - змінна thirdEl
// для перевірки завдання запустити команду npx jest task1.test.js

const listItems = document.querySelectorAll("#list li");

const firstEl = listItems[0];
const lastEl = listItems[4];
const secondtEl = listItems[1];
const fourthEl = listItems[3];
const thirdtEl = listItems[2];

module.exports = {
   firstEl,
   lastEl,
   secondtEl,
   fourthEl,
   thirdtEl,
 };
