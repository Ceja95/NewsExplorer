import "../../blocks/Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header__menu">

                <p className="header__title">NewsExplorer</p>
                
                <div className="header__buttons">
                    <button id="home" className="header__buttons header__buttens-home">
                        Home
                    </button>

                    <button className="header__buttons header__buttons-signin">
                        Sign in
                    </button>
                </div>

            </div>

        </header>
    );
}

export default Header;