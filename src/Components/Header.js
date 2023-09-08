import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/Constants"
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [status, setStatus] = useState("Login");

    const onlineStatus = UseOnlineStatus();

    const { loggedInUser } = useContext(UserContext);
    // console.log(loggedInUser)

    // Subscribing to the store using a Selector

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return (
        <div className="flex justify-between shadow-md mb-4 h-20 " >

            <div className="logo-container ">
                <img className="logo w-24"
                    src={LOGO_URL}
                    alt="" />
            </div>

            <div className="flex items-center  " >
                <ul className="flex p-4 m-4 ">
                    <li className="mx-8"> {onlineStatus ? "Online 🟢 " : "Offline 🔴 "} </li>

                    <li className=" px-4">
                        <Link to="/" >Home</Link>
                    </li>
                    <li className=" px-4">
                        <Link to="/about" >About Us</Link>
                    </li>
                    <li className=" px-4">
                        <Link to="/contact" >Contact Us</Link>
                    </li>
                    <li className=" px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className=" px-4 font-bold text-xl ">
                        <Link to="/cart" >Cart - ({cartItems.length} items)</Link>
                    </li>

                    <button
                        className="px-4 hover:text-orange-600"
                        onClick={() => {
                            status === "Login"
                                ? setStatus("Logout")
                                : setStatus("Login");
                        }}
                    >{status}</button>

                    <li className=" px-4 font-bold ">{loggedInUser}</li>
                </ul>
            </div>

        </div>


    )
}

export default Header;