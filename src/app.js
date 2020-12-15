const reasonInput = document.querySelector('#type');
const amountInput = document.querySelector('#amount');
const cancelBtn = document.querySelector('#cancelBtn');
const confirmBtn = document.querySelector('#confirmBtn');
const expenseList = document.querySelector('#expense-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

const clear = () => {
  reasonInput.value = '';
  amountInput.value = '';
};

confirmBtn.addEventListener('click', () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {

    return;
  }
  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredReason + ': $' +  enteredAmount;
  expenseList.appendChild(newItem);

  totalExpenses += parseInt(enteredAmount);
  totalExpensesOutput.textContent = totalExpenses;
  clear();
});

cancelBtn.addEventListener('click', clear);

