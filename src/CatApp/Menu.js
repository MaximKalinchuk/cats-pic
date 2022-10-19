import React from "react";

function Menu({ setGeneralPage, setFavoritePage }) {
    return (
        <div className="menu">
            <div className="menu-container">
                <ul className="menu-navbar">
                    <a className="logo" href="#">CAT-PICS</a>
                    <li>
                        <a onClick={setGeneralPage} href="#">Главная</a>
                    </li>
                    <li>
                        <a onClick={setFavoritePage} href="#">Избранные</a>
                    </li>
                    <li>
                        <a href="#">Помощь</a>
                    </li>
                </ul>
                <a className="github_link" target='_blank' href="https://github.com/MaximKalinchuk">GITHUB</a>
            </div>
        </div>
    )
}

export default Menu;