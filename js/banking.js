function getTotalCalculation(incomeId, foodId, rentId, clothesId, totalInputId){
    // income 
    const incomeInputId = document.getElementById(incomeId);
    const incomeInputText = incomeInputId.value;
    const incomeInput = parseFloat(incomeInputText);
    if(typeof(incomeInput) == 'number'){
        alert("Enter Number");
    }
    else if(incomeInput < 0){
        alert("Please enter a positive number!! ");
    }
    
    console.log(incomeInput);
    incomeInputId.value = '';

    // food
    const foodInput = document.getElementById(foodId);
    const foodInputText = foodInput.value;
    const finalFood = parseFloat(foodInputText);
    if(typeof(finalFood) == 'number'){
        alert("Enter Number");
    }
    else if(finalFood < 0){
        alert("Please enter a positive number!! ");
    }
    console.log(finalFood);
    foodInput.value = '';

    // rent
    const rentInput = document.getElementById(rentId);
    const rentInputText = rentInput.value;
    const finalRent = parseFloat (rentInputText);
    if(typeof(finalRent) == 'number'){
        alert("Enter Number");
    }
    else if(finalRent < 0){
        alert("Please enter a positive number!! ");
    }
    console.log(finalRent);
    rentInput.value = '';

    // clothes
    const clothesInput = document.getElementById(clothesId)
    const clothesInputText = clothesInput.value;
    const finalclothes = parseFloat(clothesInputText);
    if(typeof(finalclothes) == 'number'){
        alert("Enter Number");
    }
    else if(finalclothes < 0){
        alert("Please enter a positive number!! ");
    }
    console.log(finalclothes);
    clothesInput.value = '';
    
    // total
    const totalInput = document.getElementById(totalInputId);
    const totalText = totalInput.innerText;
    if(incomeInput>0 && finalFood>0 && finalRent>0 && finalclothes>0){
        const finalTotal = incomeInput - finalFood - finalRent - finalclothes;
        totalInput.innerText = finalTotal;
    }
    console.log(finalTotal);
}

document.getElementById('calculate-button').addEventListener
('click', function(){
    getTotalCalculation('income-input', 'food-input', 'rent-input', 'clothes-input', 'expenses-total')
})