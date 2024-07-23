const resultsInvestment = document.getElementById('investing-article');

// dynamically calling Wikipedia information for each section
function getInvestmentInfo() {

  const requestUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/investment';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);
     const newParagraph = document.createElement('p');
     newParagraph.textContent =  `${data.extract}`;
     resultsInvestment.appendChild(newParagraph);
      })
}

window.addEventListener('load', getInvestmentInfo)

const resultsStocks = document.getElementById('stocks-article');

// dynamically calling Wikipedia information for each section
function getStocksInfo() {

  const requestUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/stock';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);
     const newParagraph = document.createElement('p');
     newParagraph.textContent = `${data.extract}`;
     resultsStocks.appendChild(newParagraph);
      })
}

window.addEventListener('load', getStocksInfo)

const resultsCrypto = document.getElementById('crypto-article');

// dynamically calling Wikipedia information for each section
function getCryptoInfo() {
  const requestUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/cryptocurrency';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);
     const newParagraph = document.createElement('p');
     newParagraph.textContent = `${data.extract}`;
     resultsCrypto.appendChild(newParagraph);
      })
}

window.addEventListener('load', getCryptoInfo)