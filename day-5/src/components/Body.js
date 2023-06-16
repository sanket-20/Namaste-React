import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";


// what is state?
// what is hook?
// what is useState()

const Body = () => {
    // const searchText = "KFC";

    // searchText is local state var
    const [searchInput, setSearchInput] = useState("KFC");

    return (
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e)=>{
                        setSearchInput(e.target.value);
                    }}
                />
                <button className="search-btn">Search</button>
            </div>
            <div className="restaurant-list">
                {
                    restaurantList.map((restaurant) => {
                        return <RestaurantCard {...restaurant.data} />
                    })
                }

            </div>
        </>
    );
};

export default Body;