
const btnMinus = document.getElementById('btn-minus');
const btnPlus = document.getElementById('btn-plus');
const quantityValue = document.getElementById('quantity-value');
const totalPriceDisplay = document.getElementById('total-price');


const BASE_PRICE = 260; 
let currentQuantity = 1;


function updateCalculations() {
  quantityValue.textContent = currentQuantity;
  totalPriceDisplay.textContent = currentQuantity * BASE_PRICE;
}


btnPlus.addEventListener('click', () => {
  currentQuantity++;
  updateCalculations();
});


btnMinus.addEventListener('click', () => {
  if (currentQuantity > 1) {
    currentQuantity--;
    updateCalculations();
  }
});