import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from 'react-router-dom';

function PrivateLayout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer className='underline'>Ⓒ Copyright Markethink. All right reserved</Footer>
        </>
    );
}

export default PrivateLayout;