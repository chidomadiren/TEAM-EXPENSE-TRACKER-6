let expenses = [];

function addExpense(){
  let name = document.getElementById("name").value;
  let desc = document.getElementById("desc").value;
  let amount = Number(document.getElementById("amount").value);
  let category = document.getElementById("category").value;

  if(amount === 0) return alert("Enter amount");
  expenses.push({name: name, desc: desc, amount: amount, category: category});

  document.getElementById("name").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
  showExpenses();
}

function showExpenses(){
  let list = document.getElementById("list");
  let total = 0;
  list.innerHTML = "";
  for(let i = 0; i < expenses.length; i++){
    total = total + expenses[i].amount;
    list.innerHTML = list.innerHTML + "<li>" + expenses[i].name + " - " + expenses[i].desc + " - " + expenses[i].category + " - $" + expenses[i].amount + " <button onclick='deleteExpense(" + i + ")'>Delete</button></li>";
  }
  document.getElementById("total").innerText = total;
}

function deleteExpense(i){
  expenses.splice(i, 1);
  showExpenses();
}