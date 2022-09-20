import React, { useEffect, useState } from "react";
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

    const [showFixed, setShowFixed] = useState(false)

    useEffect(() => {
        const onScroll = e => {
            const newScroll = window.scrollY > 1
            showFixed !== newScroll && setShowFixed(newScroll)
        }

        document.addEventListener(`scroll`, onScroll);
        return () => document.removeEventListener(`scroll`, onScroll)

    })

    return (
        <nav className={`nav ${showFixed && `nav-fixed`}`}>
            <div className="nav-container">
                <NavBar />
                <Logo />
                <NavSearch
                    searchState={state.search}
                    searchActive={searchActive}
                />
            </div>

        </nav>
    );
}

export { Nav };