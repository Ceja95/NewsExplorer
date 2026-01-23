import { useEffect, useState, useContext } from "react";

import CurrentUserContext from "../../context/CurrentUserContext";

import "../../blocks/Header.css";

function Header({ loginClick }) {

    const currentUser = useContext(CurrentUserContext);

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("jwt");

        if (token?.length > 0) {
            setLoggedIn(true);
        }
    });

    return (
        <header className="header">
            <div className="header__menu">

                <p className="header__title">NewsExplorer</p>

                <div className="header__buttons">
                    <button type="button" id="home" className="header__buttons header__buttens-home">
                        Home
                    </button>

                    {!loggedIn && <button  onClick={loginClick} type="button" className="header__buttons header__buttons-signin">
                        Sign in
                    </button>
                    }

                    {loggedIn && <button type="button" className="header__buttons header__buttons-username">
                        {currentUser.name}
                    </button>
                    }

                    {loggedIn && <button type="button" className="header__buttons header__buttons-articles">
                        Saved articles
                    </button>
                    }
                </div>

            </div>

        </header >
    );
}

export default Header;