const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
   const inputCurrencyValue = Number(document.querySelector(".input-currency").value.replace(/\D/g, "")) / 100;
    const currencyValueToConvert = document.querySelector(
        ".currency-value-to-convert");
        //valor em real brasileiro
    const CurrencyValueConverted = document.querySelector(".currency-value");

    const dolarToday = 5.59;
    const euroToday = 6.24;
    const libraToday = 7.46;
    const bitcoinToday = 409441.59;

    if (currencySelect.value == "dolar") {
        // US$ - Dólar Americano => se o select estiver com a opção de dolar selecionada, faça a conversão para dolar
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday);
    }
if (currencySelect.value == "euro") {
    // € - Euro =>// se o select estiver com a opção de euro selecionada, faça a conversão para euro
    CurrencyValueConverted.innerHTML = "€ " + (inputCurrencyValue / euroToday).toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

    if (currencySelect.value == "libra") {
        // £ - Libra Esterlina
    CurrencyValueConverted.innerHTML = "£ " + (inputCurrencyValue / libraToday).toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

       if (currencySelect.value == "bitcoin") {
        // ₿ - Bitcoin
        CurrencyValueConverted.innerHTML = "₿ " + (inputCurrencyValue / bitcoinToday).toLocaleString('pt-BR', {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3
        });
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".currency-img");

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImg.src = "./assets/dolar.png";
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./assets/euro.png";
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina";
        currencyImg.src = "./assets/libra.png";
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImg.src = "./assets/bitcoin.png";
    }

    convertValues();
}

currencySelect.addEventListener('change', changeCurrency);
convertButton.addEventListener('click', convertValues);

const inputValor = document.querySelector(".input-currency");

inputValor.addEventListener("input", () => {
    let soNumero = inputValor.value.replace(/\D/g, "");

    if (soNumero == "") {
        inputValor.value = "";
        return;
    }

    let valor = Number(soNumero) / 100;
    inputValor.value = valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
});