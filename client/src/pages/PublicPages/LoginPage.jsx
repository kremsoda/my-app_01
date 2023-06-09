import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Button from '../../components/Button';
import { logIn } from '../../store/slices/userSlice';

const BASE_URL = 'http://localhost:5010/user/login';


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(BASE_URL, userLogin);
            dispatch(logIn(data.token));
            navigate("/");
        } catch ({ response }) {
            setError(response.data.message);
        } 
    } 

    const handleChange = (e) => {
        setUserLogin({
          ...userLogin,
          [e.target.name]: e.target.value,
        });
    };


    return(
        <section className='flex justify-center'>
            <form onSubmit={handleSubmit} className="leading-10 flex flex-col mx-20 shadow-md p-3 max-w-lg w-full">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email.."
                    value={userLogin.email}
                    onChange={handleChange}
                    className="p-2"
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password.."
                    value={userLogin.password}
                    onChange={handleChange}
                    className="p-2"
                />
                <p className='text-red-600'>{error}</p>
                <Button className='my-5' success >Log In</Button>
                <div className='text-center'>
                    <p>don`t have an account yet?</p>
                </div>
                <NavLink to={'/registration'}>
                    <Button className='my-5 w-full' success rounded outline>Sign Up</Button>
                </NavLink >
            </form>
        </section>
    );
}

export default Login;