let distance;
let midCons;
let needCons;
let stations;
let prices = [];
let price;
let minPrice;
let sumPrices = 0;
let midPrice;
let dailyCost;

function showResult(idBtn, idText) {
  idBtn.style.display = "none";
  idText.style.display = "block";
}

function dataFilter(variable) {
  if (variable <= 0 || variable == "") {
    if (variable < 0) {
      alert("Não são aceitos valores negativos. Digite um número positivo.");
    } else {
      alert("Não são aceitos valores vazios. Digite um número positivo.");
    }
    return false;
  } else {
    return true;
  }
}

function calcNeedCons() {
  distance = document.getElementById("distance").value;

  midCons = document.getElementById("midCons").value;

  if (dataFilter(distance) == true && dataFilter(midCons) == true) {
    needCons = distance / midCons;

    showResult(calc, pNeedCons);
    document.getElementById(
      "pNeedCons"
    ).innerHTML = `O consumo necessário é de ${needCons.toFixed(2)} litros.`;

    document.getElementById("need-cons").reset();
  } else {
    document.getElementById("need-cons").reset();
  }
}

function addPrice() {
  prices.push(parseFloat(document.getElementById("price").value));
}

let i = 0;
function priceResearch() {
  specialContainer.style.gridTemplateRows = "150px";
  stations = document.getElementById("stations").value;
  document.getElementById("priceQuestion").innerHTML = `Digite o valor encontrado no posto ${i + 1} (em R$):`;
  showResult(sendBtn, inputPrices);
  i++;
}

function priceResearch2() {
  if (i < stations) {
    addPrice();
    document.getElementById(
      "priceQuestion"
    ).innerHTML = `Digite o valor encontrado no posto ${i + 1} (em R$):`;
    document.getElementById("price").value = "";
    i++;
  } else {
    addPrice();
    document.getElementById("price").value = "";
    document.getElementById("stations").value = "";
    document.getElementById(
      "priceQuestion"
    ).innerHTML = `Digite o valor encontrado no posto ${i + 1} (em R$):`;

    minPrice = prices[0];

    for (let c = 0; c < prices.length; c++) {
      if (prices[c] < minPrice) {
        minPrice = prices[c];
      }

      sumPrices += parseFloat(prices[c]);
    }

    midPrice = parseFloat(sumPrices) / parseInt(stations);

    document.getElementById("nStations").innerHTML = `Número de postos pesquisados: ${stations}`;
    document.getElementById("minPrice").innerHTML = `Menor preço encontrado: R$ ${minPrice}`;
    document.getElementById("midPrice").innerHTML = `Média dos preços: R$ ${midPrice}`;
    showResult(inputPrices, pResult);
  }
  console.log(prices);
}

function calcDailyCost() {
  needCons = document.getElementById("ncDailyCost").value;
  price = document.getElementById("pDailyCost").value;

  dailyCost = 2 * (needCons * price);
  rsWord = dailyCost >= 2 ? "reais" : "real";

  document.getElementById("paDailyCost").innerHTML = `Seu gasto diário é de ${dailyCost} ${rsWord}.`;

  document.getElementById("ncDailyCost").value = "";
  document.getElementById("pDailyCost"). value = "";

  showResult(calcDC, paDailyCost);
}
