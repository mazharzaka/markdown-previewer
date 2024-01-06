// import axios from "axios";
import React, {useEffect} from "react";
import {Data} from "./Data";

export default function Docs() {
  useEffect(() => {
    console.log(Data);
  });

  return (
    <div className="docs">
      {Data.map((e) => (
        <div className="doc">
          <div className="name">{e.name}</div>
          <div className="des">{e.description}</div>
          {e.examples.map((e, index) => (
            <div className="ex">
              <h2> Example {index + 1}</h2>
              <div className="nameofex">- markdown</div>{" "}
              <p className="des">-{e.markdown}</p>
              <div className="nameofex">- html</div>{" "}
              <p className="des">-{e.html}</p>
            </div>
          ))}
          {e.additional_examples.map((e) => (
            <div className="ex">
              <h2> {e.name}</h2>
              <p className="des">{e.description}</p>
              <div className="nameofex">- markdown</div>{" "}
              <p className="des">-{e.markdown}</p>
              <div className="nameofex">- html</div>{" "}
              <p className="des">-{e.html}</p>
            </div>
          ))}
          <hr className="line" />
        </div>
      ))}
    </div>
  );
}
