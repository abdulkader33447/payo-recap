document.getElementById("cashOut").style.display =
  "none";
document.getElementById("transaction-history").style.display =
  "none";

document.getElementById("add-mony-box").addEventListener("click", function () {
  handleToggle("addmony", "block");
  handleToggle("cashOut", "none");
  handleToggle("transaction-history", "none");
});

document.getElementById("cash-out-box").addEventListener("click", function () {
  handleToggle("addmony", "none");
  handleToggle("cashOut", "block");
  handleToggle("transaction-history", "none");
});
