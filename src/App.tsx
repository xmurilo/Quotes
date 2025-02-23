import { useState } from "react";
import Quotes from "./components/Quotes";
import quotesData from "./data";

function App() {
  const [index, setIndex] = useState(0);

  function nextQuote() {
    setIndex(prevIndex => (prevIndex + 1) % quotesData.length);
  }

  return (
    <div className="container mt-5">
      <Quotes text={quotesData[index].text} author={quotesData[index].author} />
      <button className="btn btn-success mt-2" onClick={nextQuote}>
        Próxima Citação
      </button>
    </div>
  );
}

export default App;
