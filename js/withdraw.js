//Without Function

// document.getElementById('btn-withdraw').addEventListener('click', function () {
//     const withdrawField = document.getElementById('withdraw-field');
//     const newWithDrawAmountString = withdrawField.value;
//     const newWithdrawAmount = parseFloat(newWithDrawAmountString);

//     withdrawField.value = '';

//     if (isNaN(newWithdrawAmount)) {
//         alert('Please provide a valid number');
//         return;
//     }

//     const withdrawTotalElement = document.getElementById('withdraw-total');
//     const previousWithdrawTotalString = withdrawTotalElement.innerText;
//     const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

//     const balanceTotalElement = document.getElementById('balance-total');
//     const previousBalanceTotalString = balanceTotalElement.innerText;
//     const previousBalanceTotal = parseFloat(previousBalanceTotalString);

//     if (newWithdrawAmount > previousBalanceTotal) {
//         alert('Insufficient Balance in the Bank');
//         return;
//     }

//     const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
//     withdrawTotalElement.innerText = currentWithdrawTotal;

//     const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
//     balanceTotalElement.innerText = newBalanceTotal;
// })

//With Function

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const previousBalanceTotal = getTextElementValueById('balance-total');

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Insufficient Balance in the Bank');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', currentWithdrawTotal);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})