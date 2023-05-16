import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";

function DashboardPage() {
    return (
        <div>
            <NavLink to='/dashboard/profile'>
                <Button primary>Profile</Button>
            </NavLink>
            dashboard
        </div>
    );
}

export default DashboardPage;