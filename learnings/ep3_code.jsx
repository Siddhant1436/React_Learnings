import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = (
    <h1 className="heading" tabIndex="5">
    Namaste react using jsx
    </h1>
);
 
//React functional component
//react functional component is a normal js function that returns jsx code 

const SubComponent = () => {
    return <h2 id="subcomponent">Hello from the subcomponent in the Heading component</h2>;
}

const SubComponent1 =() => <h3 id="subcomponent1">Hello from another subcomponent in the Heading component</h3>;

const num = 10000;
const Heading = () => {
    return (<div id="container">
        
        <h1 className="head"> Hello from React functional component</h1>
        <SubComponent/>
        <SubComponent1/>
        <h4>{num} {100+9900}</h4>
        {jsxHeading}
    </div> );
};

const reactEle = (
    <div>
        <Heading/>
        <h5>same thing in different syntax</h5>
        <Heading></Heading>
        <h5>same thing in different syntax</h5>
        {Heading()};
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering react element
root.render(reactEle);
//rendering react functional component
