document.getElementById("cashOut").style.display = "none";

document.getElementById("add-mony-box").addEventListener("click", function () {
  document.getElementById("addmony").style.display = "block";
  document.getElementById("cashOut").style.display = "none";
});

document.getElementById("cash-out-box").addEventListener("click", function () {
  document.getElementById("cashOut").style.display = "block";
  document.getElementById("addmony").style.display = "none";
});

document.getElementById("add-mony").addEventListener("click", function (event) {
  event.preventDefault();
  const accountNumber = document.getElementById("account-number").value;
  const pinNumber = document.getElementById("pin").value;
  const convertedPinNumber = parseInt(pinNumber);
  const amount = document.getElementById("amount").value;
  const convertedAmount = parseFloat(amount);
  const mainBalance = document.getElementById("main-balance").innerText;
  const convertedMainBalance = parseFloat(mainBalance);
  if (accountNumber.length === 11) {
    if (convertedPinNumber === 1234) {
      const sum = convertedAmount + convertedMainBalance;
      document.getElementById("main-balance").innerText = sum;
    } else {
      alert("pin tik nai");
    }
  } else {
    alert("need valid account number");
  }
});
