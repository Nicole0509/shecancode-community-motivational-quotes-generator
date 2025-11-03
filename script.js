const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote");

let quotes = [];

fetch("quotes.json")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    quotes = data.quotes;
    generateQuote();
  })
  .catch(error => {
    console.error("Error loading quotes:", error);
    quoteText.textContent = "Failed to load quotes. Please try again later.";
  });

function generateQuote() {
  if (quotes.length === 0) return;
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selected = quotes[randomIndex];

  quoteText.textContent = `"${selected.quote}"`;
  quoteAuthor.textContent = `— ${selected.author}`;
}

newQuoteBtn.addEventListener("click", generateQuote);