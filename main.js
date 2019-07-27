var moneyCurrent = 0.00;

function depositFunc() {
  moneyCurrent = moneyCurrent + depositInput;
  document.getElementById("moneyText").innerHTML = "$ " + moneyCurrent.toFixed(2);
}
