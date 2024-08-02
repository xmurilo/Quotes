import { useState, useEffect } from "react";

const Quotes = ({ text, author }: { text: string; author: string }) => {
  const [translator, setTranslator] = useState("");

  async function translateQuote(language: string) {
    try {
      const response = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
          q: text,
          source: "pt",
          target: language,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      setTranslator(data.translatedText);
    } catch (erro) {
      console.error("Erro ao traduzir citação:", erro);
    }
  }

  useEffect(() => {
    setTranslator("");
  }, [text]);
  return (
    <div>
      <blockquote className="blockquote">
        <p>{translator ? translator : text}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <button className="btn btn-primary m-1" onClick={() => translateQuote("en")}>
        Traduzir para Inglês
      </button>
      <button className="btn btn-warning m-1" onClick={() => translateQuote("es")}>
        Traduzir para Espanhol
      </button>
    </div>
  );
};

export default Quotes;
