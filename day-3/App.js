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


// React.createElement => Object => HTML code(DOM)

console.log(heading);

const heading1 = React.createElement(
    "h1",
    {
        id: 'title',
        key: "h2"
    },
    "heading for parcel"
);

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


//JSX => 

// console.log(container);


// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
// passing react element inside root
root.render(container);