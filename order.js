
const root = document.querySelector('.root');

function load(key) {
    try {
        const res = localStorage.getItem(key);
        return res === null ? undefined : JSON.parse(res)
    }
    catch (error) {
        console.log(error.message)
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}


const arr = [];

function renderOrder() {
    root.innerHTML = `
     <div class="oreder-wrapper">
          <p class="order-text">Спасибо за заказ</p>
          <p class="order-text">
            Ваш заказ № <span class="order-number">${load('order').orderNumber}</span>
          </p>
          <button class="back-to-oreder-btn">Вернуться к заказу</button>
        </div>
    `
}

renderOrder();

// for (let i = 0; i < 8; i += 1){
//     let number = randomInteger(0, numbers.length-1);
//     console.log(number)
//     arr.push(numbers[number])
// }

// const orderNumber = document.querySelector('.order-number');


// orderNumber.textContent = arr.join('');

const backToFormBtn = document.querySelector('.back-to-oreder-btn');

backToFormBtn.addEventListener('click', onBackBtnClick);

function onBackBtnClick() {
    location.href = "./index.html"
}

console.log(load('order'))



