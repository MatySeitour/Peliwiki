import React from "react";
import { NavMobile } from "./NavMobile";
import "./Nav.css"
import { NavBar } from "./NavBar";
import { Logo } from "../Logo";
import { NavSearch } from "./NavSearch";

function Nav() {
    const [state, setState] = React.useState({
        nav: false,
        search: false,
    })

    const navActive = () => {
        if (state.nav === true) {
            setState({
                ...state,
                nav: false,
            })
        }
        else {
            setState({
                ...state,
                nav: true,
            })
        }
    }


    const searchActive = () => {
        if (!state.nav) {
            if (state.search === false) {
                setState({
                    ...state,
                    search: true,
                })
            }
            else {
                setState({
                    ...state,
                    search: false,
                })
            }
        }
    }

    return (
        <nav className="nav">
            <NavMobile>
                <NavBar
                    navActive={navActive}
                    navState={state.nav} />
                <Logo />
                <NavSearch
                    searchState={state.search}
                    searchActive={searchActive}
                />
            </NavMobile>
        </nav>
    );
}

export { Nav };