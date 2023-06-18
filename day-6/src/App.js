import React from "react";
import ReactDOM from "react-dom/client";
// import { Header , Title} from "./components/Header"; both are Named import
// import Header ,{ Title } from "./components/Header"; //Header is export default and Title is named export
// import * as XYZ from "./components/Header";

import Body from "./components/Body";
import Footer from "./components/Footer";

// Default import
import Header from "./components/Header";
// // Named import
// import { Title } from "./components/Header"


// Config driven UI
const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// passing react element inside root
root.render(<AppLayout />);



