import React from "react";
import { Link } from "react-router-dom";
import logo from "./../Assets/img/caesar.svg"
import Search from "./Search";

function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo-top">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <Search />
            </div>
        </header>
    )
}

export default Header;