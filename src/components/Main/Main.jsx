import "./../../blocks/Main.css";
import Preloader from "../Preloader/Preloader";

function Main() {

    const handleSearch = (e) => {
        e.preventDefault();

        const searchClick = document.querySelector('.main__search-button');
        console.log(searchClick);
        searchClick.classList.add('main__search-button_clicked');
    };

    return (
        <main className="main">
            <div className="main__content">
                <h1 className="main__title">What's going on <br />in the world?</h1>
                <p className="main__subtitle">Find the latest news on any topic and save them in your personal account.</p>

                <div className="main__search-bar">
                    <input type="text" className="main__search-input" placeholder="Search news" />
                    <button type="submit" className="main__search-button" onClick={handleSearch}>Search</button>
                </div>

                <div>
                    <Preloader />
                </div>
            </div>
        </main>
    )
}

export default Main;