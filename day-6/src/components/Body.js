import { useState , useEffect} from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";


function filterData(searchText, restaurants) {
    const filterData = restaurantList.filter((restaurant) =>
        restaurant.data.name.includes(searchText)
    );

    return filterData;
}


const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");//return [var_name, fun to update the var]


    // empty dependency array => once after rendering
    // dependency array [searchText]=> once after inital render + everytime after render my searchText is changes

    useEffect(()=>{
        // console.log("call that when dependency is changed");
        getRestaurants();
    }, []);

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        // optional chaning
        setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

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
            </div>

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