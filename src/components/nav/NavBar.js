import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./menuItems"
import Dropdown from "./Dropdown";


function NavBar(){

    const [navBarClass, setNavBarClass] = useState(true);
    
    function dropDownFunc(){
        setNavBarClass(!navBarClass);
    }

    return(
        <nav className="nav-bar">
            <ul className="nav-bar">
                {menuItems.map((menu, index) => {
                    return(
                        <li className="nav-links" key={index}>
                            {menu.title === "Schedule" ? 
                                <>
                                <button type="button" aria-haspopup="menu">
                                {menu.title}{' '}
                                </button>
                                <Dropdown />
                            </>:
                            <a href={menu.url}>{menu.title}</a>
                            }
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

export default NavBar;
