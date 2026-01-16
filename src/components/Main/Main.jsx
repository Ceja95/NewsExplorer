import "./../../blocks/Main.css";

function Main() {
    return (
        <main className="main">
            <div className="main__content">
                <h1 className="main__title">What's going on <br />in the world?</h1>
                <p className="main__subtitle">Find the latest news on any topic and save them in your personal account.</p>

                <div className="main__search-bar">
                    <input type="text" className="main__search-input" placeholder="Search news" />
                    <button className="main__search-button">Search</button>
                </div>

            </div>
        </main>
    )
}

export default Main;