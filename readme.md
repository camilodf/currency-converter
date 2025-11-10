# 💱 Convert — Conversor de Moedas / Currency Converter

![Licença](https://img.shields.io/badge/license-MIT-blue.svg) ![Status](https://img.shields.io/badge/status-concluído-green.svg)

Aplicação web desenvolvida com **HTML, CSS e JavaScript**, que realiza conversões de moedas em tempo real utilizando a **AwesomeAPI**.  
*Web application developed with **HTML, CSS, and JavaScript**, which performs real-time currency conversions using **AwesomeAPI**.*

O sistema permite converter valores em **Dólar (USD)**, **Euro (EUR)** e **Libra (GBP)** para **Real (BRL)**, exibindo automaticamente a cotação atual e o horário da última atualização.  
*The system allows converting values from **Dollar (USD)**, **Euro (EUR)**, and **Pound (GBP)** to **Real (BRL)**, automatically displaying the current exchange rate and the time of the last update.*

---

## 🌐 Demonstração ao Vivo / Live Demo

Veja o projeto em funcionamento:  
*See the project live:* 👉 [**Convert - Currency Converter**](https://camilodf.github.io/convert/)

---

## 📷 Demonstração / Preview

![Preview do projeto](./img/app.png)

---

## 🚀 Tecnologias Utilizadas / Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

- **API:** [AwesomeAPI](https://economia.awesomeapi.com.br/)
- **Endpoint Utilizado:** `https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL`

---

## 🧩 Funcionalidades / Features

- Consulta automática das cotações (USD, EUR, GBP → BRL)  
  * *Automatic query for exchange rates (USD, EUR, GBP → BRL)*
- Conversão instantânea do valor inserido pelo usuário  
  * *Instant conversion of user-input value*
- Exibição da cotação atual e da hora da última atualização no rodapé  
  * *Displays the current rate and last update time in the footer*
- Validação de entrada (aceita apenas números)  
  * *Input validation (accepts numbers only)*
- Interface moderna, responsiva e intuitiva  
  * *Modern, responsive, and intuitive interface*

---

## ⚙️ Como Executar Localmente / How to Run Locally

1.  **Clone este repositório / Clone this repository:**
    ```bash
    git clone [https://github.com/camilodf/convert.git](https://github.com/camilodf/convert.git)
    ```
    *(Use o URL do seu repositório aqui)*

2.  **Navegue até a pasta / Navigate to the folder:**
    ```bash
    cd convert
    ```

3.  **Abra o `index.html` / Open `index.html`:**
    Basta abrir o arquivo `index.html` no seu navegador de preferência.
    * *Just open the `index.html` file in your preferred browser.*

---

## 🧠 Aprendizados / Learnings

Durante o desenvolvimento deste projeto, eu trabalhei com:  
*While developing this project, I worked with:*

- Manipulação do DOM em JavaScript puro  
  * *DOM manipulation in vanilla JS*
- Consumo de APIs públicas com `fetch()` e tratamento de dados JSON  
  * *Consuming public APIs with `fetch()` and handling JSON data*
- Formatação de moedas (`Intl.NumberFormat`) e datas (`Intl.DateTimeFormat`) no padrão brasileiro  
  * *Formatting currency and dates to Brazilian standards*
- Validação de formulários e lógica de eventos  
  * *Form validation and event logic*
- Organização de pastas e boas práticas de código  
  * *Folder organization and clean code practices*

---

## 📂 Estrutura do Projeto / Project Structure

Usei uma estrutura de pastas básica para separar responsabilidades.  
*I used a basic folder structure to separate concerns.*

<pre>
/convert
├── 📂 assets/
│   └── (imagens, ícones, etc.)
├── 📂 css/
│   └── style.css
├── 📂 js/
│   └── main.js
└── 📄 index.html
</pre>

---

## 🪪 Licença / License

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.  
*This project is under the MIT License. Feel free to use and modify.*

---

<p align="center">
  Feito com ❤️ por Camilo Dalcim Franzini
</p>