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
        id: "title"
    },
    "heading 1"
);

const heading1 = React.createElement(
    "h1",
    {
        id: 'title'
    },
    "heading 2 defqw"
);

const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading, heading1]
);



// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
// passing react element inside root
root.render(container);