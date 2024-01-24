function bankAccount(ownerName) {
  let balance = 0
  let owner = ownerName

  return {
    withdrawal: function(withdrawalAmount) {
      if (withdrawalAmount > balance) {
        alert("Insufficient funds")
      } else {
        balance -= withdrawalAmount
        alert(`$${withdrawalAmount} withdrawn from ${owner}'s account`)
        updateBalance()
      }
    },
    deposit: function(depositAmount) {
      if (depositAmount <= 0) {
        alert("Invalid deposit amount")
      } else {
        balance += depositAmount
        alert(`$${depositAmount} deposited into ${owner}'s account`)
        updateBalance()
      }
    },
    getBalance: function() {
      return balance
    },
    getOwnerName: function() {
      return owner
    },
    setOwnerName: function(newOwnerName) {
      owner = newOwnerName
      alert(`Owner name changed to ${owner}`)
    }
  }

  function updateBalance() {
    document.getElementById("balance").innerHTML =
      "Name: " + owner + "<br>Balance: $" + balance.toFixed(2)
  }
}

let myAccount = bankAccount()
let ownerName = myAccount.getOwnerName()

document.getElementById("name").addEventListener("click", function() {
  myAccount.setOwnerName(prompt("Enter your name:"))
})

document.getElementById("deposit").addEventListener("click", function() {
  let amount = prompt("Enter the amount to deposit:")
  if (amount != null && amount != "") {
    amount = parseFloat(amount)
    if (!isNaN(amount)) {
      myAccount.deposit(amount)
    }
  }
})

document.getElementById("withdrawal").addEventListener("click", function() {
  let amount = prompt("Enter the amount to withdraw:")
  if (amount != null && amount != "") {
    amount = parseFloat(amount)
    if (!isNaN(amount)) {
      myAccount.withdrawal(amount)
    }
  }
})

function updateBalance() {
  document.getElementById("balance").innerHTML =
    "Name: " + myAccount.getOwnerName() + "<br>Balance: $" + myAccount.getBalance().toFixed(2)
}
