import './index.sass';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return ( 
    <div className="website">
        <Navbar />
        <div className="pages">
            <Outlet />
        </div>
    </div>
    );
}

// adds outlet below navbar

export default Layout;
