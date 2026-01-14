import "../../blocks/Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-menu">

                <p className="header-title">NewsExplorer</p>

                <div className="header-buttons">
                    <button className="header-butten-home">
                        Home
                    </button>
                    <button className="header-button-signin">
                        Sign in
                    </button>
                </div>

            </div>

        </header>
    )
}

export default Header;