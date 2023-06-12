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
        {/* Food Villa */}
        <a href="/">
            <img className="logo" src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT" alt="" />
        </a>
    </h1>
);
//React components:
    // -Functional - New 
    // -class comp - old way of writing a code

const  Header = () =>{
    return (
        // <div>
        //     {/* <Title/> */}
        //     {console.log("Any Js code")}
        //     {/* {Title()} */}
        //     {/* {heading2} */}
        //     {/* <h1>Namaste React functional Component</h1>
        //     <h2>This is a h2 tag</h2> */}
        // </div>

        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = () =>{
    return(
        <div className="card">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ee5f8e06b300efc07c9fe3f4df40dfc4" alt="" />
            <h2>Burger king</h2>
            <h3>Burgers, American</h3>
            <h4>4.2 stars</h4>
        </div>
    )
}

const Body = ()=>{
    return(
        <h4>Body</h4>
    )
}

const Footer = ()=>{
    return(
        <h4>Footer</h4>
    )
}

// const AppLayout = ()=>{
//     return(
//         // {
//         //     /**
//         //      * Header
//         //      *      -logo(left side)
//         //      *      -Nav Items(right side)
//         //      *      -cart
//         //      * Body
//         //      *  -search bar
//         //      *  -RestaurantList
//         //      *      -Image
//         //      *      -Description
//         //      *      -Name
//         //      *      -Rating
//         //      *      -Cusines
//         //      * 
//         //      * Footer
//         //      */

//         // }
//         <Header/>
//         <Body/>
//         <Footer/>
//     )
// }


// React.Fragment
// -jsx has only have one parent


// const jsx =(
//     <>
//         <h1>JSX</h1>
//         <h1>Second JSX</h1>
//     </>
// );
// console.log(container);
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
// passing react element inside root
// root.render(container);

// root.render(heading);
// root.render(heading2);
root.render(jsx);
// root.render(HeaderComponent());


