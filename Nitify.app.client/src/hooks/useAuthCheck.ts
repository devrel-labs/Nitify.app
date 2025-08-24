import axios from "axios";
import { useEffect, useState } from "react"


export const useAuthCheck = () => {
    const [isAuthenticated, setisAuthenticated] = useState<null | Boolean>();

    useEffect(() => {

        axios.get(`${import.meta.env.VITE_NITIFY_DOMAIN}/api/v1/auth/check`, {withCredentials: true})
        .then((res) => setisAuthenticated(res.data.authenticated))
        .catch(() => setisAuthenticated(false));
    
    }, [])

    return isAuthenticated;
}