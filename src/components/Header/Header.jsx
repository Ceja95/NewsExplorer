import "../../blocks/Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header__menu">

                <p className="header__title">NewsExplorer</p>

                <div className="header__buttons">
                    <button className="header__buttons header__butten-home">
                        Home
                    </button>
                    
                    <button className="header__button header__button-signin">
                        Sign in
                    </button>
                </div>

            </div>

        </header>
    )
}

export default Header;