import './navbar.css'
import {useContext} from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbarContainer">
            <Link to = "/">
            <div className="navbarWrapper">
                    <img src = "/images/Vector.svg" alt=''/>
                    <div className="navbarLogo">AliGroup</div>
                    <div className="navbarThings"></div>
                    <div className="navbarRight">Зайти</div>
                </div>
            </Link>
        </div>
    );
};

export default Navbar;