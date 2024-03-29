import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../../Context/ThemeContext";
import "./NavBar.css"

function NavBar({ navState }) {

    const themeContext = useContext(ThemeContext);
    const { stateNav, setStateNav } = themeContext

    const idsNavBar = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
    ];

    const navItems = [
        {
            path: "/",
            title: "HOME",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" /></svg>,
            id: 1,
        },
        {
            path: "/genres",
            title: "GENRES",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M326.1 160l127.4-127.4C451.7 32.39 449.9 32 448 32h-86.06l-128 128H326.1zM166.1 160l128-128H201.9l-128 128H166.1zM497.7 56.19L393.9 160H512V96C512 80.87 506.5 67.15 497.7 56.19zM134.1 32H64C28.65 32 0 60.65 0 96v64h6.062L134.1 32zM0 416c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V192H0V416z" /></svg>,
            id: 2,
        },
        {
            path: "/series",
            title: "SERIES/TV",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M512 448H127.1C110.3 448 96 462.3 96 479.1S110.3 512 127.1 512h384C529.7 512 544 497.7 544 480S529.7 448 512 448zM592 0h-544C21.5 0 0 21.5 0 48v320C0 394.5 21.5 416 48 416h544c26.5 0 48-21.5 48-48v-320C640 21.5 618.5 0 592 0zM576 352H64v-288h512V352z" /></svg>,
            id: 3,
        },
        {
            path: "/trends",
            title: "TRENDS",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" /></svg>,
            id: 4,
        },
    ]

    return [
        <span key={idsNavBar[0].id} onClick={() => setStateNav(!stateNav)} className="icon-bar"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" /></svg></span>,

        <div key={idsNavBar[1].id} className={`${!stateNav ? `nav-active` : `nav-inactive`}`}>

            <div className="exit">
                <button onClick={() => setStateNav(!stateNav)}>x</button>
            </div>
            <ul className="nav-active__container">
                {navItems.map((item) => (
                    <li key={item.id} className="nav-items">
                        <NavLink to={item.path}
                            onClick={() => setStateNav(!stateNav)}
                            style={({ isActive }) => ({
                                color: isActive ? "black" : "white",
                                background: isActive ? "white" : "black",
                            })}
                            className="nav-items__container">
                            {item.icon}
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>,

        <div key={idsNavBar[2].id} className={`${navState ? `background-nav` : `background-inactive`}`}></div>
    ];
}

export { NavBar };