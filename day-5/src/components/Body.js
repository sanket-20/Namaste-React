import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";


// what is state?
// what is hook?
// what is useState()

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant.data.name.includes(searchText)
    );

    return filterData;
}


const Body = () => {
    // const searchText = "KFC";

    // searchText is local state var
    // const [searchInput, setSearchInput] = useState("KFC");


    // const  searchvar = useState("KFC");//return [var_name, fun to update the var]

    // const [ searchText, setSearchText] = searchvar;
    // const stext = "KFC";
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");//return [var_name, fun to update the var]

    // eg
    // const searchClicked = false;
    // const [searchClicked, setSearchClicked] = useState("false");

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button className="search-btn" onClick={() => {
                    // need to filter the data
                    const data = filterData(searchText, restaurants);
                    // update the state - restaurants
                    setRestaurants(data);
                }}>Search</button>
                
                {/* <h1>{searchText}</h1> */}
            </div>
            {/* <h1>{searchClicked}</h1>
            <button onClick={()=>{
                if(searchClicked === "true"){
                    setSearchClicked("false");
                }
                else{
                    setSearchClicked("true");
                }
            }}>Search</button> */}


            <div className="restaurant-list">
                {
                    restaurants.map((restaurant) => {
                        return <RestaurantCard {...restaurant.data} />
                    })
                }

            </div>
        </>
    );
};

export default Body;