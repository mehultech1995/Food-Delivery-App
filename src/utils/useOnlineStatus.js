import { useEffect, useState } from "react";

// Customize Hook
// In custom Hook use the syntax from use word it's not mendatory (React Docs preffer to use, use word in starting )
const UseOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });


    }, [])

    // Boolen value
    return onlineStatus

}

export default UseOnlineStatus;