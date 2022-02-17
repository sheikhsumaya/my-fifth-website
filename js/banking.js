document.getElementById('calculate-button').addEventListener
('click', function(){

    //     //  income 

    // const incomeInput = document.getElementById('income-input');
    // const incomeInputText = incomeInput.innerText;
    // const finalIncome = parseFloat(incomeInputText);
    
        // food 




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
    const totalText = totalInput.innerText;
    const newFinalTotal = parseFloat(totalText);
    totalInput.innerText = newFinalTotal;
    // newFinalTotal = foodInput + rentInput + clothesInput;
    console.log(newFinalTotal);


    


})
// const balanceTotal = document.getElementById('balance-total');
// const balanceTotalText = balanceTotal.innerText;
// const previousBalanceTotal = parseFloat(balanceTotalText);
// const newBalanceTotal = previousBalanceTotal + newDepositAmount;
// balanceTotal.innerText = newBalanceTotal;

