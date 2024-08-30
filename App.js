import React from "react";
import ReactDOM from "react-dom/client";
/**
 * 
 * <div id="parent">
 *      <div id="chid">
 *          <h1>I am a h1 tag</h1>
 *      </div>
 * </div
 * 
 * 
 * 
 */

//heading is a js object
const parent = React.createElement(
    "div",{id:"parent"},
    React.createElement("div",{id:"chid"},
    [React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag")]
    )
);

const heading = React.createElement("h1", {id:"heading"}, "Hello world from React");


//all the react code will run in this root, everything is rendered here
const root = ReactDOM.createRoot(document.getElementById("root"));


//this render takes the object and will convert it into h1 tag and put it on the dom.
//it is puting the tag parent into the root

root.render(parent);