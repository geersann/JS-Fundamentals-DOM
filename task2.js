// Простилізуйте елементи як показано на картинці task2.png
// Застосування стилів запишіть у функції applyStyles
// Для перевірки завдання введіть команду npm jest task2.test.js



document.addEventListener('DOMContentLoaded', function () {
    applyStyles();
  });

function applyStyles() {
    const titleElement = document.getElementById("title");
        titleElement.style.backgroundColor = "#90ee90";

    const paragraphElement = document.querySelectorAll("#myDiv p");
        paragraphElement.forEach((paragraph, index) => {
            if(index === 0) paragraph.style.fontWeight = "bold";
            if(index === 1)paragraph.style.color = "red";
            if(index === 2)paragraph.style.textDecoration = "underline";
            if(index === 3)paragraph.style.fontStyle = "italic";
        });
    const horizontalList = document.getElementById("myList");
        horizontalList.innerHTML = horizontalList.innerText;
    
    const invisibleText = document.querySelector(".style_elements  span");
        invisibleText.innerHTML = "";
}
applyStyles();



module.exports = applyStyles;