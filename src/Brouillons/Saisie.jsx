import React from "react";
import MarkdownView from "react-showdown";
import { useState } from "react/cjs/react.development";
import TextareaMarkdown from "textarea-markdown";
import "./Saisie.css";

export default function Saisie() {
  const [text, setText] = useState("");

  return (
    <div className="row">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">🤔</th>
            <th scope="col">Zone de saisie</th>
            <th scope=""> </th>
            <th scope=""></th>
            <th scope="col">MarkDown</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <div className="col">
        <textarea
          className="Textarea"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="forme-control">
        <div className="col">
          <MarkdownView markdown={text} />
        </div>
      </div>
    </div>
  );
}
