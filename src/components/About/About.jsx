import "../../blocks/About.css";

function About() {
    return (
        <div className="about">

            <div className="about__container">

                <img src="../images/Jose.jpg" alt="About" className="about__image" />
                <div className="about__info">
                    <h2 className="about__title">About the Author</h2>
                    <p className="about__text">
                        This project is a news explorer application that allows users to search for and read news articles from various sources. It is built using React and follows best practices for web development.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About;