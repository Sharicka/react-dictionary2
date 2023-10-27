import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data.meanings[0].definition);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "3f6be1c407b0d9d1933561808db358ba";
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
