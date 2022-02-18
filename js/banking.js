function getInputCalculation(Id) {
    // get input id and value
    const inputId = document.getElementById(Id);
    const inputText = inputId.value;
  
    // calculate total expenses and balance
    if (Id == "income-input") {
      const inputValue = parseFloat(inputText);
      if (inputValue < 0) {
        alert("Please enter a positive number!!!");
        inputId.value = "";
        return;
      }
      incomeValue = inputValue;
      console.log(inputValue);
    } else if (Id == "food-input") {
      const inputValue = parseFloat(inputText);
      if (inputValue < 0) {
        alert("Please enter a positive number!!!");
        inputId.value = "";
        return;
      }
      foodValue = inputValue;
      console.log(inputValue);
    } else if (Id == "rent-input") {
      const inputValue = parseFloat(inputText);
      if (inputValue < 0) {
        alert("Please enter a positive number!!!");
        inputId.value = "";
        return;
      }
      rentValue = inputValue;
      console.log(inputValue);
    } else if (Id == "clothes-input") {
      const inputValue = parseFloat(inputText);
      if (inputValue < 0) {
        alert("Please enter a positive number!!!");
        inputId.value = "";
        return;
      }
      clothesValue = inputValue;
      console.log(inputValue);
    } else if (Id == "expenses-total") {
      const totalExpensesId = document.getElementById(Id);
      const totalExpenses = foodValue + rentValue + clothesValue;
      if (incomeValue < totalExpenses) {
        alert("Not enough balance!!!");
        return;
      }
      totalExpensesId.innerText = totalExpenses;
    } else if (Id == "balance") {
      const balanceId = document.getElementById(Id);
      const balance = incomeValue - foodValue - rentValue - clothesValue;
      if (incomeValue < balance) {
        alert("Not enough balance!!!");
        return;
      }
      balanceId.innerText = balance;
    }
  
    //  saving amount calculation
    if (Id == "saving-input") {
      const inputValue = parseFloat(inputText);
      if (inputValue < 0) {
        alert("Please enter a positive number!!!");
        inputId.value = "";
        return;
      }
      savingPercentage = inputValue / 100;
      console.log(inputValue);
    } else if (Id == "saving-amount") {
      const savingAmountId = document.getElementById(Id);
      const savingAmount = incomeValue * savingPercentage;
      console.log(savingAmount);
      savingAmountId.innerText = savingAmount;
    }
  
    //  remaining balance calculation
    if (Id == "remaining-balance") {
      const remainingBalanceId = document.getElementById(Id);
      const remainingBalance =
        incomeValue -
        foodValue -
        rentValue -
        clothesValue -
        incomeValue * savingPercentage;
      remainingBalanceId.innerText = remainingBalance;
    }
  }
  
  document
    .getElementById("calculate-button")
    .addEventListener("click", function () {
      getInputCalculation("income-input");
      getInputCalculation("food-input");
      getInputCalculation("rent-input");
      getInputCalculation("clothes-input");
      getInputCalculation("expenses-total");
      getInputCalculation("balance");
    });
  
  document.getElementById("save-button").addEventListener("click", function () {
    getInputCalculation("income-input");
    getInputCalculation("food-input");
    getInputCalculation("rent-input");
    getInputCalculation("clothes-input");
    getInputCalculation("saving-input");
    getInputCalculation("saving-amount");
    getInputCalculation("remaining-balance");
  });
  