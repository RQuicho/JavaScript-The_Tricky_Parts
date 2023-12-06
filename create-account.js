// Write a function called createAccount which creates a bank account given a PIN number and an initial deposit amount. 
// The return value should be an object with four methods on it:
//    checkBalance: Given the correct PIN, return the current balance. (If the PIN is invalid, return “Invalid PIN.”)
//    deposit: Given the correct PIN and a deposit amount, increment the account balance by the amount. (If the PIN is invalid, return “Invalid PIN.”)
//    withdraw: Given the correct PIN and a withdrawal amount, decrement the account balance by the amount. You also shouldn’t be able to withdraw more than you have. (If the PIN is invalid, return “Invalid PIN.”)
//    changePin: Given the old PIN and a new PIN, change the PIN number to the new PIN. (If the old PIN is invalid, return “Invalid PIN.”)

// let account = createAccount("1234", 100);

// account.checkBalance("oops");
// // "Invalid PIN."

// account.deposit("1234", 250);
// // "Succesfully deposited $250. Current balance: $350."

// account.withdraw("1234" 300);
// // "Succesfully withdrew $300. Current balance: $50."

// account.withdraw("1234" 10);
// // "Withdrawal amount exceeds account balance. Transaction cancelled."

// account.changePin("1234", "5678");
// // "PIN successfully changed!"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// I am assuming the entered PINs will be strings and the amounts will be numbers.

function createAccount(pin, amount = 0) {
  let PIN = pin;
  let balance = amount;

  return {
    checkBalance(enteredPin) {
      if (enteredPin !== PIN) {
        return "Invalid PIN."
      }
      if (enteredPin === PIN) {
        return `$${balance}`;
      }
    },
    deposit(enteredPin, depositAmnt) {
      if (enteredPin !== PIN) {
        return "Invalid PIN."
      }
      if (enteredPin === PIN) {
        balance += depositAmnt;
        return `Succesfully deposited $${depositAmnt}. Current balance: $${balance}.`;
      }
    },
    withdraw(enteredPin, withdrawalAmnt) {
      if (enteredPin !== PIN) {
        return "Invalid PIN."
      }
      if (withdrawalAmnt > balance) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }
      if (enteredPin === PIN) {
        balance -= withdrawalAmnt;
        return `Succesfully withdrew $${withdrawalAmnt}. Current balance: $${balance}.`
      }
    },
    changePin(enteredPin, newPin) {
      if (enteredPin !== PIN) {
        return "Invalid PIN."
      }
      PIN = newPin;
      return 'PIN successfully changed!';
    }
  }
}

module.exports = { createAccount };
