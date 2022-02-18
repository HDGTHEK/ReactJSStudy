import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinCost, setcoinCost] = useState(1);
  const [input, setInput] = useState(0);
  const [coinSymbol, setCoinSymbol] = useState("");
  const onChange = (event) => {
    const [price, symbol] = event.target.value.split(",");
    setCoinSymbol(symbol);
    setcoinCost(price);
    setInput(1);
  };
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json()) //then 이해하기
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>

      {loading ? (
        <strong>loading...</strong>
      ) : (
        <select onChange={onChange}>
          <option>What coin do you want to buy?</option>
          {coins.map((coin, index) => (
            <option key={index} value={[coin.quotes.USD.price, coin.symbol]}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <hr />
      <h2>How much do you have?</h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Your USD money"
          size="30"
        />
        $
      </div>
      <h2>
        You will get {input / coinCost} {` ${coinSymbol}`}
      </h2>
    </div>
  );
}

export default App;
