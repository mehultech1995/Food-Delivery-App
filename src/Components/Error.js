import { useRouteError } from "react-router-dom";

const Error = () => {

    // useRouteError() is used for better error handling 
    // (here we are showing 404 nit found). It is also ok to not use useRouteError()
    const err = useRouteError();
    return (
        <div>
            <h1>Oop!!!</h1>
            <h1>Something went wrong, Please go to home page</h1>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    );
}

export default Error;