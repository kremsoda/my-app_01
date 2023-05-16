import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = ({redirectPath}) => {
    const user = useSelector((state) => {
        return state.user.user;
    });

    if (user !== false) {
        return <Outlet />;
    }
    return <Navigate to={redirectPath} replace />;
    
}

export default AuthRoute;