import {marked} from "marked";
import "./App.css";
import React, {useEffect, useState} from "react";
import Docs from "./docs";

const App = () => {
  const [code, setCode] = useState("## Hello");
  const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>');
  const [hide, hidePreview] = useState("md");

  useEffect(() => {
    // localStorage.removeItem("Code");
    const codestorage = localStorage.getItem("Code");
    if (codestorage === null) {
      localStorage.setItem("Code", code);
    } else {
      setCode(codestorage);
      setCompiled(marked.parse(codestorage));
    }
    console.log(codestorage);
  });

  const openMD = (e) => {
    hidePreview("md");
    if (e.target.className !== "btn") {
      const btn = document.querySelector(".btn");
      btn.classList.remove("btn");
      e.target.classList.add("btn");
    }
  };

  const openPreview = (e) => {
    hidePreview("review");
    if (e.target.className !== "btn") {
      const btn = document.querySelector(".btn");
      btn.classList.remove("btn");
      e.target.classList.add("btn");
    }
  };
  const opendDocs = (e) => {
    hidePreview("Docs");
    if (e.target.className !== "btn") {
      const btn = document.querySelector(".btn");
      btn.classList.remove("btn");
      e.target.classList.add("btn");
    }
  };
  const handleChange = (e) => {
    localStorage.setItem("Code", e.target.value);

    setCode(e.target.value);
    setCompiled(marked.parse(e.target.value));
  };

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">
            MarkDown
          </button>
          <button onClick={openPreview}>Preview</button>
          <button onClick={opendDocs}>Docs</button>
        </div>
        {hide === "md" ? (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        ) : hide === "review" ? (
          <div>
            <textarea value={compiled} />
          </div>
        ) : (
          <div>
            <Docs />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
