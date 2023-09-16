import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/Components/Body"
import Header from "./src/Components/Header"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/Components/About";
import ContactUs from "./src/Components/ContactUs";
import Error from "./src/Components/Error";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import UserContext from "./src/utils/UserContext"
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import { Cart } from "./src/Components/Cart";

// import Grocery from "./src/Components/Grocery";


//Chunking
//Code splitting
//Dynamic Bundling
//On demand Loading
//Lazy loading

const Grocery = lazy(() => import("./src/Components/Grocery"));

const Applayout = () => {


    //authentication 
    const [userName, setUserName] = useState();

    useEffect(() => {
        // Make an API call and send username and password
        const data = {
            name: "Mehul yadav"
        }
        setUserName(data.name)
    }, [])

    return (
        <Provider store={appStore} >
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }} >
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/Grocery",
                element:
                    <Suspense fallback={<h1>Loading...</h1>} ><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)


