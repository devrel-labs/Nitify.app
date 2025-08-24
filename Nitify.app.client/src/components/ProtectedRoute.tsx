import { Navigate } from "react-router-dom";
import { useAuthCheck } from "../hooks/useAuthCheck"



export const ProtectedRoute = ({ children }: {children: React.ReactNode}) => {

    const isAuth = useAuthCheck();

    if (isAuth === null) return <div>loading .. ..</div>;

    if (isAuth === false) return <Navigate to="/signin" replace />;

    return children;
}