document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const AccountNumber = document.getElementById("account-no").value;
    console.log(AccountNumber);

    const pinNumber = document.getElementById("pin-no").value;
    console.log(pinNumber);

    if (AccountNumber.length === 11) {
      if (pinNumber == 1234) {
        window.location.href="./main.html"
      } else {
        alert("Invalid Pin");
      }
    } else {
      alert("Invaid No");
    }
  });
