import "./App.css";
import Document from "./Document";
import { useEffect, useState } from "react";

function App() {
 
  const [text, setText] = useState('');

useEffect(() => {
    fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt")
    .then(response => response.text())
    .then(response => setText(response));
  },[]);

  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <p className="title">A React Task</p>
          <p className="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div className="container is-fullhd">
        <Document title="Terms and Conditions" content={text}/>
      </div>
    </div>
  );
}

export default App;
