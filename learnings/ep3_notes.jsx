//jsx is not html in js, it is HTML-like or XML-like syntax.

//this is how you make reactElement(object) using React
const heading = React.createElement("h1", {id:"heading"}, "Hello world from React");

//and this is how you make react element using jsx
const jsxHeading  = <h1 className="head">reactElement using jsx</h1>

//both objects are the same thing.
/*
jsx is not pure javascript, jsengine does not understand jsx.
javascript is a code which jsengine can understand.
jsx code is transpiled into react code before going to jsengine and then jsengine recieves the code the browser can understand
        jsx (transpiling done by Babel)=> React.createElement => jsObject => html element
PARCEL is doing the transpiling by Babel(pacakage).

Transpiling allows you to use these features like let, const, arrow functions, classes, async/await, without worrying 
about compatibility issues.
Not all browsers or environments support the latest JavaScript features. By transpiling, you convert modern JavaScript code
(like ES6+) into an older version (like ES5) that is widely supported
*/

/**
 * react functional component  =>  is a normal js function
 * any react component should start with capital letter
 * react functional component is a function that return jsx code
 */

/**
 * In JSX, any dynamic data entered is automatically escaped by React, meaning it will be treated as plain text rather than
 * executable script. Even if you include something like <script>alert('XSS')</script> as dynamic data, React will escape it 
 * so that it is rendered as plain text, not as a script. This built-in protection helps prevent Cross-Site Scripting (XSS)
 * attacks.
 */