import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute ({redirectPath}) {
    const user = useSelector((state) => {
        return state.user.user;
    });

    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
    
}

export default PrivateRoute;