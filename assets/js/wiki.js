const resultsInvestment = document.getElementById('investing-article');

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

// const resultsCoin = document.getElementById('stock-scroll');

// function getCoinInfo() {
//   const requestUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/cryptocurrency';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//      const newParagraph = document.createElement('p');
//      newParagraph.textContent = `summary: ${data.extract}`;
//      resultsCoin.appendChild(newParagraph);
//       })
// }
