import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data.meanings[0].definition);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "52710fcfa191430td0o7be4a16bd4898";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (results) {
    return (
      <div className="Dictionary">
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    return (
      <div className="Dictionary">
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
        </form>
      </div>
    );
  }
}
