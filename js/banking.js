document.getElementById('calculate-button').addEventListener
('click', function(){

    //     //  income 

    // const incomeInput = document.getElementById('income-input');
    // const incomeInputText = incomeInput.innerText;
    // const finalIncome = parseFloat(incomeInputText);
    
        // food 

        // const depositInput = document.getElementById('deposit-input');
        // const newDepositAmountText = depositInput.value;
        // const newDepositAmount = parseFloat(newDepositAmountText)
        // const depositTotal = document.getElementById('deposit-total');
        // const previousDepositText = depositTotal.innerText;
        // const previousDepositAmount = parseFloat(previousDepositText )
        // const newDepositTotal = previousDepositAmount + newDepositAmount;
        // depositTotal.innerText = newDepositTotal;



    const foodInput = document.getElementById('food-input');
    const foodInputText = foodInput.value;
    const finalFood = parseFloat(foodInputText);
    finalFood.value = foodInput;
    console.log(finalFood);
    foodInput.value = '';

        // rent

    const rentInput = document.getElementById('rent-input');
    const rentInputText = rentInput.value;
    const finalRent = parseFloat(rentInputText);
    finalRent.value = rentInput;
    console.log(finalRent);
    rentInput.value = '';

        // clothes
     
    const clothesInput = document.getElementById('clothes-input');
    const clothesInputText = clothesInput.value;
    const finalClothes = parseFloat(clothesInputText);
    finalClothes.value = clothesInput;
    console.log(finalClothes);
    clothesInput.value = '';

        // total calculate 
    const totalInput = document.getElementById('expenses-total');
    const finalTotal = finalFood + finalRent + finalClothes;
    const finalTotalText = finalTotal.value;
    const newFinalTotal = parseFloat(finalTotalText);
    totalInput.value = newFinalTotal;
    console.log(newFinalTotal);
    


})
// const balanceTotal = document.getElementById('balance-total');
// const balanceTotalText = balanceTotal.innerText;
// const previousBalanceTotal = parseFloat(balanceTotalText);
// const newBalanceTotal = previousBalanceTotal + newDepositAmount;
// balanceTotal.innerText = newBalanceTotal;

