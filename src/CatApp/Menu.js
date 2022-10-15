import React from "react";

function Menu() {
    return (
        <div className="menu">
            <div className="menu-container">
                <ul className="menu-navbar">
                    <a className="logo" href="#">CAT-PICS</a>
                    <li>
                        <a href="#">Главная</a>
                    </li>
                    <li>
                        <a href="#">Избранные</a>
                    </li>
                    <li>
                        <a href="#">Помощь</a>
                    </li>
                </ul>
                <a className="github_link" href="#">GITHUB</a>
            </div>
        </div>
    )
}

export default Menu;