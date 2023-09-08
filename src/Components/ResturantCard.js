import { useContext } from "react";
import { CDN_URL } from "../utils/Constants"

const RestaurantCard = (props) => {
    const { resData } = props;

    // const { loggedInUser } = useContext(useContext);

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData;


    return (
        <div className="m-5 w-[250px] bg-gray-50 hover:bg-gray-200 hover:drop-shadow-2xl  drop-shadow-lg " >
            <img
                className="res-logo rounded-xl"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h4 className="m-1 mx-2 font-semibold text-lg">{name}</h4>
            <h4 className="m-1 mx-2">{cuisines.join(", ")}</h4>
            <h4 className="m-1 mx-2">{avgRating} stars</h4>
            <h4 className="m-1 mx-2">{costForTwo}</h4>
            <h4 className="m-1 mx-2">{deliveryTime} minutes</h4>
            {/* <h4 className="m-1 mx-2">user: {loggedInUser}</h4> */}
        </div>
    )
};

//Higher Order Component

// input- RestaurantCard => RestaurantCardPromoted

export const withPramotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2" >
                    Pramoted
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;