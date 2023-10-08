/*
This is a cash register that returns one out of three status, this depends the object price, the cash and the cash
in the drawer.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, 
as the value of the change key.

We can check if this funtion works in the Google Console
*/

function checkCashRegister(price, cash, cid) {
    const currencyUnit = {
        "PENNY": 1,
        "NICKEL": 5,
        "DIME": 10,
        "QUARTER": 25,
        "ONE": 100,
        "FIVE": 500,
        "TEN": 1000,
        "TWENTY": 2000,
        "ONE HUNDRED": 10000
    };
  
    let changeDue = cash * 100 - price * 100;
    const totalCid = cid.reduce((acc, curr) => acc + curr[1] * 100, 0);
    let change = [];
  
    if (changeDue > totalCid) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (changeDue === totalCid) {
        return { status: "CLOSED", change: cid };
    } else {
        for (let i = cid.length - 1; i >= 0; i--) {
            const currencyName = cid[i][0];
            const currencyValue = currencyUnit[currencyName];
            const availableCurrency = cid[i][1] * 100;
            let currencyCount = availableCurrency / currencyValue;
            let returnedCurrency = 0;
  
            while (changeDue >= currencyValue && currencyCount > 0) {
                changeDue -= currencyValue;
                changeDue = Math.round(changeDue);
                currencyCount--;
                returnedCurrency += currencyValue;
            }
  
            if (returnedCurrency > 0) {
                change.push([currencyName, returnedCurrency / 100]);
            }
        }
  
        if (changeDue > 0) {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        }
        return { status: "OPEN", change: change};
    }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // It should return {status: "OPEN", change: [["QUARTER", 0.5]]} 
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // It should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // It should return {status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // It should return {status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // It should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

