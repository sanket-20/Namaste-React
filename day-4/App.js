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

const Header = () => {
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
            <Title />
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

const config = [
    {
        type: "carousel",
        cards: [
            // {
            //     offerName: "50% off"
            // },
            // {
            //     offerName: "No Delivery Charges"
            // }
        ]
    },
    {
        type: "restaurants",
        cards: [
            {
                name: "Burger King",
                image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ee5f8e06b300efc07c9fe3f4df40dfc4",
                cusines: ["Burger", "American"],
                rating: "4.2"
            },
            {
                name: "KFC",
                image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ee5f8e06b300efc07c9fe3f4df40dfc4",
                cusines: ["Burger", "American"],
                rating: "4.2"
            },
        ]
    }
];

const restaurantList = [
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "127241",
            name: "Biryani By Kilo",
            uuid: "b4344b36-ce13-4544-aadc-5d5dfea753aa",
            city: "5",
            area: "Chembur",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "ygwdtsdmyuucrlv3qqrt",
            cuisines: [
                "Biryani",
                "Hyderabadi",
                "North Indian",
                "Kebabs",
                "Mughlai",
                "Desserts"
            ],
            tags: [],
            costForTwo: 70000,
            costForTwoString: "₹700 FOR TWO",
            deliveryTime: 53,
            minDeliveryTime: 53,
            maxDeliveryTime: 53,
            slaString: "53 MINS",
            lastMileTravel: 3.9000000953674316,
            slugs: {
                restaurant: "biryani-by-kilo-chembur-east-chembur",
                city: "mumbai"
            },
            cityState: "5",
            address: "Biryani By Kilo, Ground Floor, Shriram Building, Near Satyam Industries, Behind USV Ltd, Govandi Station Road, Chembur, Mumbai",
            locality: "Chembur",
            parentId: 130,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            ribbon: [
                {
                    type: "PROMOTED"
                }
            ],
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 4400,
                        message: ""
                    },
                    {
                        name: "special",
                        fee: 2000,
                        message: ""
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: ""
                    }
                ],
                totalFees: 6400,
                message: "",
                title: "Delivery Charge",
                amount: "6400",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "LIGHT",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "cid=7067331~p=1~eid=00000188-b520-9f3d-021d-9e22006a017b",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "3.9 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹299",
                discountTag: "FLAT DEAL",
                headerTypeV2: 0
            },
            sla: {
                restaurantId: "127241",
                deliveryTime: 53,
                minDeliveryTime: 53,
                maxDeliveryTime: 53,
                lastMileTravel: 3.9000000953674316,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "LIGHT",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: true,
            avgRating: "4.1",
            totalRatings: 1000,
            new: false
        },
        subtype: "basic",
        crouton: {
            type: "RAIN",
            metaInfo: {
                bgColor: "#282C3F",
                icon: "surge_listing_piuzrv",
                textColor: "#ffffff",
                title: "Bad Weather",
                message: "₹20 extra levied on some restaurants"
            }
        }
    },

    {
        type: "restaurant",
        data: {
            type: "F",
            id: "387322",
            name: "La Pino'z Pizza",
            uuid: "5a898fee-35bf-4f3b-9c46-00aaa9af1a8c",
            city: "5",
            area: "Ghatkopar Vikhroli",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "pf3fw4qzazsu0dqngrry",
            cuisines: [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 28,
            minDeliveryTime: 28,
            maxDeliveryTime: 28,
            slaString: "28 MINS",
            lastMileTravel: 0.8999999761581421,
            slugs: {
                restaurant: "la-pino'z-pizza-ghatkopar-vikhroli-ghatkopar-vikhroli",
                city: "mumbai"
            },
            cityState: "5",
            address: "SHOP NO. G-1, MEGOR ARCADE, M.G. ROAD, OPP TANISHQ SHOWROOM, GHATKOPAR EAST 400077",
            locality: "Mg Road",
            parentId: 4961,
            unserviceable: false,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 3600,
                        message: ""
                    },
                    {
                        name: "special",
                        fee: 2000,
                        message: ""
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: ""
                    }
                ],
                totalFees: 5600,
                message: "",
                title: "Delivery Charge",
                amount: "5600",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "LIGHT",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "0.8 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹100",
                discountTag: "",
                headerTypeV2: 0
            },
            sla: {
                restaurantId: "387322",
                deliveryTime: 28,
                minDeliveryTime: 28,
                maxDeliveryTime: 28,
                lastMileTravel: 0.8999999761581421,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "LIGHT",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "3.9",
            totalRatings: 1000,
            new: false
        },
        subtype: "basic",
        crouton: {
            type: "RAIN",
            metaInfo: {
                bgColor: "#282C3F",
                icon: "surge_listing_piuzrv",
                textColor: "#ffffff",
                title: "Bad Weather",
                message: "₹20 extra levied on some restaurants"
            }
        }
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "406314",
            name: "Cafe Quba",
            uuid: "d644e013-bfd3-4548-8d23-dca0b12ae6df",
            city: "5",
            area: "Chembur",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "w3qkr89mrliplzwjlyq2",
            cuisines: [
                "Chinese",
                "Indian",
                "North Indian"
            ],
            tags: [],
            costForTwo: 40000,
            costForTwoString: "₹400 FOR TWO",
            deliveryTime: 25,
            minDeliveryTime: 25,
            maxDeliveryTime: 25,
            slaString: "25 MINS",
            lastMileTravel: 2.4000000953674316,
            slugs: {
                restaurant: "cafe-quba-chembur-chembur",
                city: "mumbai"
            },
            cityState: "5",
            address: "Shop no 30, part no 1, new gautam nagar, p l lokhande marg, govandi ,Mumbai - 400043",
            locality: "New Gautam Nagar",
            parentId: 53961,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 3500,
                        message: ""
                    },
                    {
                        name: "special",
                        fee: 2000,
                        message: ""
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: ""
                    }
                ],
                totalFees: 5500,
                message: "",
                title: "Delivery Charge",
                amount: "5500",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "LIGHT",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "2.4 kms",
            hasSurge: false,
            sla: {
                restaurantId: "406314",
                deliveryTime: 25,
                minDeliveryTime: 25,
                maxDeliveryTime: 25,
                lastMileTravel: 2.4000000953674316,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "LIGHT",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.1",
            totalRatings: 1000,
            new: false
        },
        subtype: "basic",
        crouton: {
            type: "RAIN",
            metaInfo: {
                bgColor: "#282C3F",
                icon: "surge_listing_piuzrv",
                textColor: "#ffffff",
                title: "Bad Weather",
                message: "₹20 extra levied on some restaurants"
            }
        }
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "469252",
            name: "Marrakesh",
            uuid: "e72da9b9-2e57-44b2-a31a-0230ee3c8b19",
            city: "5",
            area: "Chembur",
            totalRatingsString: "100+ ratings",
            cloudinaryImageId: "fuzdxvugy9tkwwexxmsw",
            cuisines: [
                "Lebanese",
                "Arabian"
            ],
            tags: [],
            costForTwo: 40000,
            costForTwoString: "₹400 FOR TWO",
            deliveryTime: 36,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            slaString: "36 MINS",
            lastMileTravel: 3.799999952316284,
            slugs: {
                restaurant: "marrakesh-chembur-chembur",
                city: "mumbai"
            },
            cityState: "5",
            address: "5, SHAH INDUSTRIAL ESTATE, DEONAR  VILLEGE, STATION ROAD DEONAR,  GOVANDI EAST, MUMBAI, 400088, Devnar  Gaon, Greater Mumbai Ward-M/E, Greater  Mumbai, Maharashtra - 400088",
            locality: "Station Road",
            parentId: 624,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            ribbon: [
                {
                    type: "PROMOTED"
                }
            ],
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "special",
                        fee: 2000,
                        message: ""
                    },
                    {
                        name: "distance",
                        fee: 4500,
                        message: ""
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: ""
                    }
                ],
                totalFees: 6500,
                message: "",
                title: "Delivery Charge",
                amount: "6500",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "LIGHT",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "cid=7039948~p=4~eid=00000188-b520-9f3d-021d-9e23006a0429",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "3.7 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
                header: "₹150 OFF",
                subHeader: "ABOVE ₹299",
                discountTag: "FLAT DEAL",
                headerTypeV2: 0
            },
            sla: {
                restaurantId: "469252",
                deliveryTime: 36,
                minDeliveryTime: 36,
                maxDeliveryTime: 36,
                lastMileTravel: 3.799999952316284,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "LIGHT",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: true,
            avgRating: "3.6",
            totalRatings: 100,
            new: false
        },
        subtype: "basic",
        crouton: {
            type: "RAIN",
            metaInfo: {
                bgColor: "#282C3F",
                icon: "surge_listing_piuzrv",
                textColor: "#ffffff",
                title: "Bad Weather",
                message: "₹20 extra levied on some restaurants"
            }
        }
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "23758",
            name: "McDonald's",
            uuid: "51dbef9a-c5e8-4b4f-a62a-4f51b44be038",
            city: "5",
            area: "Kurla",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
            cuisines: [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            tags: [],
            costForTwo: 40000,
            costForTwoString: "₹400 FOR TWO",
            deliveryTime: 33,
            minDeliveryTime: 33,
            maxDeliveryTime: 33,
            slaString: "33 MINS",
            lastMileTravel: 1.2999999523162842,
            slugs: {
                restaurant: "mc-donaldsdddd-ghatkopar-vikhroli-ghatkopar-vikhroli",
                city: "mumbai"
            },
            cityState: "5",
            address: "Kushal Annex, Amar Mahal, Next to Shopper's stop, M G Road, Chembur",
            locality: "M G Road",
            parentId: 630,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 3600,
                        message: ""
                    },
                    {
                        name: "special",
                        fee: 2000,
                        message: ""
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: ""
                    }
                ],
                totalFees: 5600,
                message: "",
                title: "Delivery Charge",
                amount: "5600",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "LIGHT",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "1.2 kms",
            hasSurge: false,
            sla: {
                restaurantId: "23758",
                deliveryTime: 33,
                minDeliveryTime: 33,
                maxDeliveryTime: 33,
                lastMileTravel: 1.2999999523162842,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "LIGHT",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.2",
            totalRatings: 10000,
            new: false
        },
        subtype: "basic",
        crouton: {
            type: "RAIN",
            metaInfo: {
                bgColor: "#282C3F",
                icon: "surge_listing_piuzrv",
                textColor: "#ffffff",
                title: "Bad Weather",
                message: "₹20 extra levied on some restaurants"
            }
        }
    },
    {
        type: "restaurant",
        data: {
          type: "F",
          id: "8121",
          name: "The J",
          uuid: "52bead6d-5942-49e1-9fdb-a994c89a0f56",
          city: "5",
          area: "Churchgate",
          totalRatingsString: "10000+ ratings",
          cloudinaryImageId: "pqu6qmo50sffl5gmc76y",
          cuisines: [
            "American",
            "Snacks",
            "Desserts"
          ],
          tags: [],
          costForTwo: 30000,
          costForTwoString: "₹300 FOR TWO",
          deliveryTime: 20,
          minDeliveryTime: 20,
          maxDeliveryTime: 20,
          slaString: "20 MINS",
          lastMileTravel: 1.2000000476837158,
          slugs: {
            restaurant: "the-j-fort-colaba-fort-colaba",
            city: "mumbai"
          },
          cityState: "5",
          address: "3, Vaswani Mansions, Dinshaw Vachha Road, Opposite HR College, Churchgate, Mumbai",
          locality: "Fort, Colaba",
          parentId: 2022,
          unserviceable: false,
          veg: false,
          select: false,
          favorite: false,
          tradeCampaignHeaders: [],
          chain: [],
          feeDetails: {
            fees: [
              {
                name: "distance",
                fee: 3000,
                message: ""
              },
              {
                name: "time",
                fee: 0,
                message: ""
              },
              {
                name: "special",
                fee: 0,
                message: ""
              }
            ],
            totalFees: 3000,
            message: "",
            title: "Delivery Charge",
            amount: "3000",
            icon: ""
          },
          availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMessage: ""
          },
          longDistanceEnabled: 0,
          rainMode: "NONE",
          thirdPartyAddress: false,
          thirdPartyVendor: "",
          adTrackingID: "",
          badges: {
            imageBased: [],
            textBased: [],
            textExtendedBadges: []
          },
          lastMileTravelString: "1.2 kms",
          hasSurge: false,
          sla: {
            restaurantId: "8121",
            deliveryTime: 20,
            minDeliveryTime: 20,
            maxDeliveryTime: 20,
            lastMileTravel: 1.2000000476837158,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "NOT_LONG_DISTANCE",
            preferentialService: false,
            iconType: "EMPTY"
          },
          promoted: false,
          avgRating: "4.4",
          totalRatings: 10000,
          new: false
        },
        subtype: "basic"
    },
];

// const RestaurantCard = (props) => {
//     console.log(props);
//     return (
//         // <div className="card">
//         //     <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ee5f8e06b300efc07c9fe3f4df40dfc4" alt="" />
//         //     <h2>Burger king</h2>
//         //     <h3>Burgers, American</h3>
//         //     <h4>4.2 stars</h4>
//         // </div>

//         <div className="card">
//             {/* <img src={
//                 "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//                 restaurantList[0].data?.cloudinaryImageId
//             } /> */}

//             <img src={
//                 "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//                 props.restaurant.data?.cloudinaryImageId
//             } />

//             {/* <h2>{restaurantList[0].data?.name}</h2>
//             <h3>{restaurantList[0].data?.cuisines.join(", ")}</h3>
//             <h4>{restaurantList[0].data?.lastMileTravelString} minutes</h4> */}

//             <h2>{props.restaurant.data?.name}</h2>
//             <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
//             <h4>{props.restaurant.data?.lastMileTravelString} minutes</h4>
//         </div>
//     );
// }

/*const RestaurantCard = ({ restaurant }) => {
    // console.log(props);
    return (
        <div className="card">
            <img src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                restaurant.data?.cloudinaryImageId
            } />


            <h2>{restaurant.data?.name}</h2>
            <h3>{restaurant.data?.cuisines.join(", ")}</h3>
            <h4>{props.restaurant.data?.lastMileTravelString} minutes</h4>
        </div>
    );
}
*/


// props => properties

/*const RestaurantCard = ({ restaurant }) => {
    const { name, cuisines, cloudinaryImageId, lastMileTravelString } = restaurant.data;
    return (
        <div className="card">
            <img src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                cloudinaryImageId
            } />


            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    );
}
*/


// const RestaurantCard = ({ 
//     name, 
//     cuisines, 
//     cloudinaryImageId, 
//     lastMileTravelString 
// }) => {
//     // const { name, cuisines, cloudinaryImageId, lastMileTravelString } = restaurant.data;
//     return (
//         <div className="card">
//             {/*
//              <img src={
//                 "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//                 cloudinaryImageId
//             } /> 
//             */}

//             <h2>{name}</h2>
//             <h3>{cuisines.join(", ")}</h3>

//             {/* 
//             <h4>{lastMileTravelString} minutes</h4> 
//             */}
//         </div>
//     );
// };

const RestaurantCard = ({ 
    name, 
    cuisines, 
    cloudinaryImageId, 
    lastMileTravelString 
}) => {
    // const { name, cuisines, cloudinaryImageId, lastMileTravelString } = restaurant.data;
    return (
        <div className="card">
             <img src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                cloudinaryImageId
            } /> 
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4> 
        </div>
    );
};

const Body = () => {
    return (
        <div className="restaurant-list">
            {/* <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard /> */}

            {/**----------------------------------------------------- */}

            {/* {RestaurantCard(restaurantList[0])} */}

            {/* <RestaurantCard restaurant={restaurantList[0]} />
            <RestaurantCard restaurant={restaurantList[1]} />
            <RestaurantCard restaurant={restaurantList[2]} />
            <RestaurantCard restaurant={restaurantList[3]} />
            <RestaurantCard restaurant={restaurantList[4]} />
            <RestaurantCard restaurant={restaurantList[5]} /> */}

            {/**----------------------------------------------------- */}
            {/* <RestaurantCard 
                name={restaurantList[0].data.name} 
                cuisines={restaurantList[0].data.cuisines}
            />
            <RestaurantCard 
                name={restaurantList[1].data.name} 
                cuisines={restaurantList[0].data.cuisines}
            />
            <RestaurantCard 
                name={restaurantList[2].data.name} 
                cuisines={restaurantList[0].data.cuisines}
            /> */}

            {/**----------------------------------------------------- */}
            
            {/* <RestaurantCard { ...restaurantList[0].data }/>
            <RestaurantCard 
                { ...restaurantList[1].data }
            />
            <RestaurantCard 
                { ...restaurantList[2].data }
            />
            <RestaurantCard { ...restaurantList[3].data }/>
            <RestaurantCard { ...restaurantList[4].data }/>
            <RestaurantCard { ...restaurantList[5].data }/> */}


            {/**----------------------------------------------------- */}
            {
                restaurantList.map((restaurant)=> {
                    return <RestaurantCard { ...restaurant.data } />
                })
            }

        </div>
    );
};

const Footer = () => {
    return (
        <h4>Footer</h4>
    )
}

const AppLayout = () => {
    return (
        // {
        //     /**
        //      * Header
        //      *      -logo(left side)
        //      *      -Nav Items(right side)
        //      *      -cart
        //      * Body
        //      *  -search bar
        //      *  -RestaurantList
        //      *      -Image
        //      *      -Description
        //      *      -Name
        //      *      -Rating
        //      *      -Cusines
        //      * 
        //      * Footer
        //      */
        // }
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}


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
root.render(<AppLayout />);
// root.render(HeaderComponent());


