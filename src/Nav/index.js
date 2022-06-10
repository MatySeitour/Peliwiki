import React from "react";
import { NavMobile } from "./NavMobile";
import "./Nav.css"
import { NavBar } from "./NavBar";
import { Logo } from "../Logo";
import { NavSearch } from "./NavSearch";

function Nav() {
    const [navState, setNavState] = React.useState(false);

    const navActive = () => {
        if (navState === true) {
            setNavState(false)
            document.querySelector("#root").style.background = "#fff"
        }
        else {
            setNavState(true)
            document.querySelector("#root").style.background = "#0007"
        }
    }

    return (
        <nav className="nav">
            <NavMobile>
                <NavBar
                    navActive={navActive}
                    navState={navState} />
                <Logo />
                <NavSearch
                    navState={navState}
                />
            </NavMobile>
        </nav>
    );
}

export { Nav };