import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from 'react-router-dom';
import Sidebar from "../components/Sidebar/Sidebar";

function PrivateLayout(){
    return(
        <>
            <Header/>
            <main>
                <div style={{display: 'flex'}}>
                    <Sidebar/>
                    <div>
                        <Outlet/>
                    </div>  
                </div>
            </main>
            <Footer className='underline'>Ⓒ Copyright Markethink. All right reserved</Footer>
        </>
    );
}

export default PrivateLayout;