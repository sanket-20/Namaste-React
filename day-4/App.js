/**
 * Created the server for you
 * HMR => Hot Module Replacement
 * File Watcher algo - c++
 * Bundling
 * MINIFY
 * Cleaning our code
 * DEv and Production Build
 * Super fast building algorithm
 * Image optimization
 * Compression
 * Compatible older version of browser
 * zero configuration
 * 
 * 
 * Transitive dependancies
 * 
 */

import React from "react";
// import { createElement } from "react";
// import { createElement as ce } from "react";

import ReactDOM from "react-dom/client";



// Manipulate the HTML DOM using React

// Create nested React Elements
const heading = React.createElement(
    "h1",
    {
        id: "title",
        key: "h1"
    },
    "heading 1"
);

// const heading = createElement(
//     "h1",
//     {
//         id: "title",
//         key: "h1"
//     },
//     "heading 1"
// );

// const heading = ce(
//     "h1",
//     {
//         id: "title",
//         key: "h1"
//     },
//     "heading 1"
// );





// React.createElement => Object => HTML code(DOM)

console.log(heading);

// const heading1 = React.createElement(
//     "h1",
//     {
//         id: 'title',
//         key: "h2"
//     },
//     "heading for parcel"
// );

// const heading1 = createElement(
//     "h1",
//     {
//         id: 'title',
//         key: "h2"
//     },
//     "heading for parcel"
// );

// const heading1 = ce(
//     "h1",
//     {
//         id: 'title',
//         key: "h2"
//     },
//     "heading for parcel"
// );

/**
 * <div class="header">
        <h1>Namaste React</h1>
        <ul>
            <li>About Us</li>
            <li>Support</li>
            <li>Home</li>
        </ul>
    </div>
 */

// const container = React.createElement(
//     "div",
//     {
//         id: "container",
//     }//props
//     ,
//     [React.createElement(
//         "h1",
//         {
//             id: "title",
//             key: "h1"
//         },
//         "heading 1"
//     ), 
//     React.createElement(
//         "ul",
//         {},
//         [React.createElement(
//             "li",
//             {},
//             "About Us"
//         ),React.createElement(
//             "li",
//             {},
//             "Support"
//         ),React.createElement(
//             "li",
//             {},
//             "Home"
//         ),]
//     )]
// );


//JSX => uses React.createElement() that converted into Object then object id converted into (HTML(DOM))
const heading2 = (
    <h1 id="title" key="/h2">
        Namaste React
    </h1>
);

const Title = () => (
    <h1 id="title" key="/h2">
        Food Villa
    </h1>
);
//React components:
    // -Functional - New 
    // -class comp - old way of writing a code

const  HeaderComponent = () =>{
    return (
        <div>
            <Title/>
            {console.log("Any Js code")}
            {/* {Title()} */}
            {/* {heading2} */}
            <h1>Namaste React functional Component</h1>
            <h2>This is a h2 tag</h2>
        </div>
    )
}
// console.log(container);
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
// passing react element inside root
// root.render(container);

// root.render(heading);
// root.render(heading2);
root.render(<HeaderComponent/>);
// root.render(HeaderComponent());


