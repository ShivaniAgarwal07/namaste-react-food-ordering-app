import React from "react";
import ReactDOM  from "react-dom/client";

const heading= <h1 id="heading">Namaste React using JSX</h1>;

// const parent= React.createElement("div", {id: "parent"},
//  React.createElement("div", {id: "child"}, 
//  [React.createElement("h1", {}, "I'm h1"),
//  React.createElement("h2", {}, "I'm h2" )]
//  )
// )


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
