/* add your code here */

// Main Script
document.addEventListener('DOMContentLoaded', () => {
  // parse JSON
  const users = JSON.parse(userContent);
  const stocks = JSON.parse(stockContent);

  // grab all necessary elements

  // users list ul
  const userList = document.querySelector('.UserList ul');
  // user's portfolio div
  const listPortfolio = document.querySelector('#listPortfolio');
  // user form and inputs
  const userEntryForm = document.querySelector('.userEntry');
  const firstnameInput = userEntryForm.querySelector('#firstname');
  const lastnameInput = userEntryForm.querySelector('#lastname');
  const addressInput = userEntryForm.querySelector('#address');
  const cityInput = userEntryForm.querySelector('#city');
  const emailInput = userEntryForm.querySelector('#email');
  // stock details and paragraphs
  const stockDetails = document.querySelector('.StockDetails');
  const stockDetailsLogo = stockDetails.querySelector('#logo');
  const stockDetailsName = stockDetails.querySelector('#stockName');
  const stockDetailsSector = stockDetails.querySelector('#stockSector');
  const stockDetailsIndustry = stockDetails.querySelector('#stockIndustry');
  const stockDetailsAddress = stockDetails.querySelector('#stockAddress');
  // save and delete buttons
  const saveButton = userEntryForm.querySelector('#btnSave');
  const deleteButton = userEntryForm.querySelector('#btnDelete');

  // Helper Functions

  // function to populate users list
  const displayUsersList = () => {
    userList.innerHTML = ''; // clear list
    for (const user of users) {
      const li = document.createElement('li');
      li.textContent = `${user.user.lastname}, ${user.user.firstname}`;
      li.dataset.id = user.id;

      userList.appendChild(li);
    }
  };

  // function to reset stock details
  const resetStockDetails = () => {
    stockDetailsLogo.setAttribute('src', '');
    stockDetailsLogo.setAttribute('alt', '');
    stockDetailsName.textContent = '';
    stockDetailsSector.textContent = '';
    stockDetailsIndustry.textContent = '';
    stockDetailsAddress.textContent = '';
  };

  // function to reset form, portfolio, and details
  const resetDisplays = () => {
    stockDetails.style.display = 'none'; // hide stock details again
    listPortfolio.innerHTML = `<h3>Symbol</h3><h3># Shares</h3><h3>Actions</h3>`; // reset list porfolio

    firstnameInput.value = ``;
    lastnameInput.value = '';
    addressInput.value = '';
    cityInput.value = '';
    emailInput.value = '';

    resetStockDetails();
  };

  // Initial
  stockDetails.style.display = 'none';
  displayUsersList();
  let id;

  // use event delegation for users list
  userList.addEventListener('click', (e) => {
    resetStockDetails();

    stockDetails.style.display = 'block'; // show stock details again
    listPortfolio.innerHTML = `<h3>Symbol</h3><h3># Shares</h3><h3>Actions</h3>`; // reset list porfolio

    id = e.target.dataset.id;
    const user = users.find((element) => element.id == id);

    // populate userForm
    firstnameInput.value = user.user.firstname;
    lastnameInput.value = user.user.lastname;
    addressInput.value = user.user.address;
    cityInput.value = user.user.city;
    emailInput.value = user.user.email;

    // populate user's stock portfolio
    for (const stock of user.portfolio) {
      // stock symbol content and styling
      const stockSymbol = document.createElement('div');
      stockSymbol.style.display = 'flex';
      stockSymbol.style.alignItems = 'center';
      stockSymbol.textContent = stock.symbol;

      // stocks owned content and styling
      const stockOwned = document.createElement('div');
      stockOwned.style.display = 'flex';
      stockOwned.style.alignItems = 'center';
      stockOwned.textContent = stock.owned;

      // handler function for viewButton
      const handler = () => {
        // grab stock info
        const stockInfo = stocks.find(
          (element) => element.symbol == stock.symbol
        );

        // set stock info
        stockDetailsLogo.setAttribute('src', `./logos/${stockInfo.symbol}.svg`);
        stockDetailsLogo.setAttribute('alt', `Logo of ${stockInfo.name}`);
        stockDetailsName.textContent = stockInfo.name;
        stockDetailsSector.textContent = stockInfo.sector;
        stockDetailsIndustry.textContent = stockInfo.subIndustry;
        stockDetailsAddress.textContent = stockInfo.address;
      };

      // view button content and styling
      const viewButton = document.createElement('button');
      viewButton.style.padding = '10px';
      viewButton.textContent = 'View';
      viewButton.addEventListener('click', handler);

      // append to list portfolio
      listPortfolio.appendChild(stockSymbol);
      listPortfolio.appendChild(stockOwned);
      listPortfolio.appendChild(viewButton);
    }
  });

  // add event listeners here so that they aren't added more than once

  // save button
  saveButton.addEventListener('click', (formEvent) => {
    formEvent.preventDefault(); // don't refresh

    const userIndex = users.findIndex((element) => element.id == id); // get index in array

    // update that user in memory
    users[userIndex].user = {
      ...users[userIndex].user,
      firstname: firstnameInput.value,
      lastname: lastnameInput.value,
      address: addressInput.value,
      city: cityInput.value,
      email: emailInput.value,
    };

    displayUsersList(); // reset users list
  });

  // delete button
  deleteButton.addEventListener('click', (formEvent) => {
    formEvent.preventDefault(); // don't refresh

    const userIndex = users.findIndex((element) => element.id == id); // get index in array

    users.splice(userIndex, 1); // delete that user in memory

    resetDisplays(); // reset form, portfolio, and stock details
    displayUsersList(); // reset users list
  });
});
