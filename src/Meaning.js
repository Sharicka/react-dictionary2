import React from "react";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h2>{props.meaning.partOfSpeech}</h2>
        <div>
          <p>
            {props.meaning.definition}
            <br />
            {props.meaning.example}
          </p>
        </div>
      </div>
    );
  }
}
