import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useState } from "react";

function ProfilePage() {
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     const response = await axios.post(BASE_URL,userDetails);
        //     navigate("/login");
        // } catch ({ response }) {
        //     setError(response.data.message);
        // }
    };

    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
        });
    };

    return(
        <>
            <section className='flex justify-center'>
                <form onSubmit={handleSubmit} className="leading-10 flex flex-col mx-20 shadow-md p-3 max-w-lg w-full">
                    <label htmlFor="fname">First Name</label>
                    <input
                        type="text"
                        id="fname"
                        name="firstName"
                        placeholder="Your name.."
                        value={userDetails.firstName}
                        onChange={handleChange}
                        className="p-2"
                    />
            
                    <label htmlFor="lname">Last Name</label>
                    <input
                        type="text"
                        id="lname"
                        name="lastName"
                        placeholder="Your last name.."
                        value={userDetails.lastName}
                        onChange={handleChange}
                        className="p-2"
                    />
            
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email.."
                        value={userDetails.email}
                        onChange={handleChange}
                        className="p-2"
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password.."
                        value={userDetails.password}
                        onChange={handleChange}
                        className="p-2"
                    /> 

                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm your password.."
                        value={userDetails.confirmPassword}
                        onChange={handleChange}
                        className="p-2"
                    />
                    <Button className='my-5' success type="submit">Save changes</Button>
                </form>
            </section>

            <NavLink to='/dashboard'>
                <Button primary>Back to Dashboard</Button>
            </NavLink>
        </>
    );

}

export default ProfilePage;