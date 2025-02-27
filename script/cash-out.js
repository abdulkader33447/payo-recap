document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const accountNumber2 = document.getElementById("cash-out-account").value;

    const amount = getInputValueById("cashout-amount");
    const pinNumber = getInputValueById("cashout-pin");
    const mainBalance = getInnerTextById("main-balance");

    if (amount > mainBalance) {
      alert("invalid amount");
      return;
    }

    if (accountNumber2.length === 11) {
      if (pinNumber === 1234) {
        const sum = mainBalance - amount;
        setInnerTextByIdAndValue("main-balance", sum);

        const container = document.getElementById("transaction-container");

        const p = document.createElement("p");
        p.innerText = `
cash out ${amount} from this ${accountNumber2}
`;
        container.appendChild(p);
      } else {
        alert("pin not valid");
      }
    } else {
      alert("Input valid account number");
    }
  });
