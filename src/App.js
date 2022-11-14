import './App.css';
import quotes from './quotes'

function newQuote() {
  const quoteArrayLength = quotes.length
  const whichQuote = Math.floor(Math.random() * quoteArrayLength)
  const thisQuote = quotes[whichQuote]
  const author = thisQuote.author
  const quote = thisQuote.quote
  document.getElementById("text").innerHTML = quote
  document.getElementById("author").innerHTML = author
  //Tweet Portion
  const quoteInApiFormat = quote.replace(" ", "%20")
  const authorInApiFormat = author.replace(" ", "%20")
  let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
  twitterLink += quoteInApiFormat
  twitterLink += " -" + authorInApiFormat
  document.getElementById("tweet-quote").href = twitterLink
}

window.onload = newQuote

function App() {
  return (
      <div id="quote-box" className="quote-box">
        <h1>Random Quote</h1>
          <p id="text"></p>
          <p id="author"></p>
        <button id="new-quote" onClick={newQuote}>New Quote</button>
        <a href="https:\\www.google.com" target="_blank" rel="noreferrer" id="tweet-quote">
          <button>Tweet It</button>
        </a>
      </div>
  );
}

export default App;
