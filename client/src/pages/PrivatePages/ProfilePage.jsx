import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";

function ProfilePage() {
    return(
        <div>
            profilepage

            <NavLink to='/dashboard'>
                <Button primary>Back to Dashboard</Button>
            </NavLink>
        </div>
    );

}

export default ProfilePage;