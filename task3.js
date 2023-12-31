
// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// 
//   <main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// 
// Цю розмітку потрібно вставити у існуючий html елемент із класом "create_elements"

// Виконання записувати у функцію applyStyles()
// Щоб перевірити правильність виконання введіть команду: npx jest test3.jest.js



function applyStyles() {
    const textElement = document.querySelector(".create_elements");
    textElement.insertAdjacentHTML(
      "afterbegin",
      `<main class="mainClass check item">         
            <div id="myDiv">
                <p>First paragraph</p>           
            </div>
        </main> `,
    );
  }



module.exports = applyStyles;
