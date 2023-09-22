 // Sample account data
 const accountData = {
    accountNumber: "1111",
    userName: "user1",
    pin: "1111",
    balance: 5000,
  };

  let pinAttempts = 0;

  function login() {
    const accountNumber =
      document.getElementById("accountNumberInput").value;
    const userName = document.getElementById("userNameInput").value;
    const pin = document.getElementById("pinInput").value;

    if (
      accountNumber === accountData.accountNumber &&
      userName === accountData.userName &&
      pin === accountData.pin
    ) {
      document.getElementById("accountNumber").textContent = accountNumber;
      document.getElementById("userName").textContent = userName;
      document.querySelector(".header").style.display = "flex";
      document.querySelector(".nav-bar").style.display = "block";
      showBalance();
    } else {
      pinAttempts++;
      if (pinAttempts === 3) {
        alert(
          "You have exceeded the maximum number of pin attempts. Please try again later."
        );
        logout();
      } else {
        document.getElementById("pinError").textContent =
          "InValid details. Please try again.";
      }
    }
  }

  function logout() {
    document.getElementById("accountNumber").textContent = "";
    document.getElementById("userName").textContent = "";
    pinAttempts = 0;
    document.querySelector(".header").style.display = "none";
    document.querySelector(".nav-bar").style.display = "none";
    showLoginForm();
  }

  function showLoginForm() {
    const content = document.querySelector(".content");
    content.innerHTML = `
<div class="login-form">
  <h2>Login</h2>
  <span id="pinError" class="error"></span><br>
  <input type="text" id="accountNumberInput" placeholder="Account Number">
  <input type="text" id="userNameInput" placeholder="User Name">
  <input type="password" id="pinInput" placeholder="PIN"><br>
  <button onclick="login()">Login</button>
  
</div>
`;
  }

  function showBalance() {
    const content = document.querySelector(".content");
    content.innerHTML = `
    <div class="balance-check">
      <h2 class="title">Check Balance</h2>
      <span id="balanceError" class="error-message"></span><br>
      <input type="password" id="pinInput" class="input-field" placeholder="PIN"><br>
      <button onclick="checkBalance()" class="button">Check</button>
    </div>


  `;
  }

  function checkBalance() {
    const pin = document.getElementById("pinInput").value;
    if (pin === accountData.pin) {
      const content = document.querySelector(".content");
      content.innerHTML = `
      <h2>Balance: $${accountData.balance}</h2>
    `;
    } else {
      document.getElementById("balanceError").textContent =
        "Incorrect pin. Please try again.";
    }
  }

  function withdraw() {
    const content = document.querySelector(".content");
    content.innerHTML = `
    <div class="withdraw">
      <h2 class="title">Withdraw</h2>
      <span id="withdrawError" class="error-message"></span><br>
      <input type="password" id="pinInput" class="input-field" placeholder="PIN"><br>
      <input type="number" id="amountInput" class="input-field" placeholder="Amount"><br>
      <button onclick="withdrawMoney()" class="button">Withdraw</button>
    </div>
  `;
  }

  function withdrawMoney() {
    const pin = document.getElementById("pinInput").value;
    const amount = parseInt(document.getElementById("amountInput").value);

    if (pin === accountData.pin && amount <= accountData.balance) {
      accountData.balance -= amount;
      const content = document.querySelector(".content");
      content.innerHTML = `
      <div class="withdraw-success">
        <h2 class="title">Withdraw Successful</h2>
        <p>Amount: $${amount}</p>
        <p>Remaining Balance: $${accountData.balance}</p>
      </div>
    `;
    } else {
      document.getElementById("withdrawError").textContent =
        "Invalid pin or insufficient funds.";
    }
  }

  function deposit() {
    const content = document.querySelector(".content");
    content.innerHTML = `
    <div class="deposit">
      <h2 class="title">Deposit</h2>
      <span id="depositError" class="error-message"></span><br>
      <input type="password" id="pinInput" class="input-field" placeholder="PIN"><br>
      <input type="number" id="amountInput" class="input-field" placeholder="Amount"><br>
      <button onclick="depositMoney()" class="button">Deposit</button>
    </div>
  `;
  }

  function depositMoney() {
    const pin = document.getElementById("pinInput").value;
    const amount = parseInt(document.getElementById("amountInput").value);

    if (pin === accountData.pin) {
      accountData.balance += amount;
      const content = document.querySelector(".content");
      content.innerHTML = `
      <div class="deposit-success">
        <h2 class="title">Deposit Successful</h2>
        <p>Amount: $${amount}</p>
        <p>Current Balance: $${accountData.balance}</p>
      </div>
    `;
    } else {
      document.getElementById("depositError").textContent = "Invalid pin.";
    }
  }

  function changePin() {
    const content = document.querySelector(".content");
    content.innerHTML = `
    <div class="change-pin">
      <h2 class="title">Change PIN</h2>
      <span id="pinChangeError" class="error-message"></span><br>
      <input type="password" id="currentPinInput" class="input-field" placeholder="Current PIN"><br>
      <input type="password" id="newPinInput" class="input-field" placeholder="New PIN"><br>
      <button onclick="updatePin()" class="button">Change</button>
    </div>
  `;
  }

  function updatePin() {
    const currentPin = document.getElementById("currentPinInput").value;
    const newPin = document.getElementById("newPinInput").value;

    if (currentPin === accountData.pin) {
      accountData.pin = newPin;
      const content = document.querySelector(".content");
      content.innerHTML = `
      <h2>PIN Change Successful</h2>
    `;
    } else {
      document.getElementById("pinChangeError").textContent =
        "Invalid current pin.";
    }
  }

  function miniStatement() {
    const content = document.querySelector(".content");
    content.innerHTML = `
    <div class="mini-statement">
      <h2 class="title">Mini Statement</h2>
      <table>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>01/06/2023</td>
          <td>10:30 AM</td>
          <td>$100</td>
          <td class="success">Payment Successful</td>
        </tr>
        <tr>
          <td>02/06/2023</td>
          <td>09:45 AM</td>
          <td>$50</td>
          <td class="failed">Payment Failed</td>
        </tr>
      </table>
    </div>
  `;
  }

  showLoginForm();