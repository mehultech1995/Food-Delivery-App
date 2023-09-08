import { useContext, useEffect, useState } from "react"
import RestaurantCard, { withPramotedLabel } from "./ResturantCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("")

    const RestaurantCardPramoted = withPramotedLabel(RestaurantCard);

    // Whenever state variable update, react triggers a reconciliation cycle (re-renders the component)
    // console.log("Body Rendered")

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6342587&lng=85.0584152&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        // console.log(json);

        //Optional Chaning
        setlistOfRestaurants(
            json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        setFilteredRestaurant(
            json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };

    const onlineStatus = UseOnlineStatus();

    if (onlineStatus === false)
        return <h1>It Looks Like you're Offline!! Please Check your Internet Conection</h1>


    // // Conditional Rendering
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer />;
    // }

    const { loggedInUser, setUserName } = useContext(UserContext);

    return listOfRestaurants?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="m-2 flex flex-row ">
                <div>
                    <input
                        type="text"
                        className="mx-2 border border-solid border-black rounded"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                    />

                    <button className=" py-1 px-3 rounded text-black bg-slate-300 "
                        onClick={() => {
                            // Filter the restaurant cards and update the UI
                            // searchText
                            console.log(searchText)

                            const filteredRestaurant = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>

                    <button className=" py-1 mx-8 rounded text-black bg-slate-300 "
                        onClick={() => {
                            const filteredlist = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4
                            );
                            setFilteredRestaurant(filteredlist);
                        }}
                    >
                        Top rated Restaurants
                    </button>

                </div>
                <div className=" py-1 mx-8 text-black p-2 ">
                    <label >UserName: </label>
                    <input
                        className="border border-black rounded px-1 "
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex flex-wrap px-12 py-6 ">
                {/* {
                    filteredRestaurant.map((restaurant) => (
                        <Link
                            key={restaurant?.info.id}
                            to={"/restaurants/" + restaurant?.info.id}
                        >
                                <RestaurantCard resData={restaurant?.info} />
                        </Link>
                    ))} */}
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link
                            className="link"
                            key={restaurant?.info.id}
                            to={"/restaurants/" + restaurant?.info.id}
                        >

                            {restaurant.info.pramoted ? (
                                <RestaurantCardPramoted resData={restaurant?.info} />
                            ) : (
                                <RestaurantCard
                                    resData={restaurant?.info} />
                            )}
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default Body;