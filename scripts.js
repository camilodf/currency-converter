// API com os valores atualizados
const apiUrl = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL";

// Variáveis globais que serão atualizadas com os valores reais da API
let USD, EUR, GBP;

// Fazendo a requisição e atribuindo os valores atualizados
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    USD = parseFloat(data.USDBRL.bid);
    EUR = parseFloat(data.EURBRL.bid);
    GBP = parseFloat(data.GBPBRL.bid);

    console.log("Cotações recebidas com sucesso:");
    console.log("USD:", USD, "EUR:", EUR, "GBP:", GBP);
  })
  .catch(error => {
    console.error("Erro ao buscar cotações:", error);
    alert("Não foi possível carregar as cotações atuais. Tente novamente mais tarde.");
  });

// Seletores do formulário e elementos
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Impede caracteres não numéricos
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

form.onsubmit = (event) => {
  event.preventDefault();

  // Verifica se as cotações já foram carregadas
  if (!USD || !EUR || !GBP) {
    alert("As cotações ainda estão sendo carregadas. Aguarde um momento.");
    return;
  }

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)} `;
    let total = amount * price;
    total = formatCurrencyBRL(total).replace("R$", "");
    result.textContent = `${total} Reais`;
    footer.classList.add("show-result");
  } catch (error) {
    footer.classList.remove("show-result");
    console.log(error);
    alert("Não foi possível converter. Tente novamente mais tarde.");
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}