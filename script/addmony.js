// document.getElementById("add-mony").addEventListener("click", function (event) {
//   event.preventDefault();

//   const amount = getInputValueById("amounted");
// });

document.getElementById("add-mony").addEventListener("click", function (event) {
  event.preventDefault();
  const amount = getInputValueById("amount");
  const pin = getInputValueById("pin");
  const account = document.getElementById("account-number").value;
  const mainBalance = getInnerTextById("main-balance");

  const selectedBank = document.getElementById('all-bank').value;
  console.log(selectedBank)


  if(amount <0){
    alert('need positive number')
    return;
  }

  if (account.length === 11) {
    if (pin === 1234) {
      const sum = mainBalance + amount;
      // document.getElementById("main-balance").innerText = sum;
      setInnerTextByIdAndValue("main-balance", sum);

      const container = document.getElementById("transaction-container");

      const p = document.createElement("p");
      p.innerText = `
      added mony ${amount} from ${account} account

      `;

      container.appendChild(p)
      
    } else {
      console.log("Pin thik nai");
    }
  } else {
    console.log("Account number thik nai");
  }
});
