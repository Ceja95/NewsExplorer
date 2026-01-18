import "../../blocks/About.css";

function About() {
    return (
        <div className="about">

            <div className="about__container">

                <img src="../images/Jose.jpg" alt="About" className="about__image" />
                <div className="about__info">
                    <h2 className="about__title">About the Author</h2>
                    <p className="about__text">
                        Hello. and welcome to my News Expolrer project. My name is Jose and I am a web developer with a passion for creating intuitive and user-friendly web applications. I know how to create webpages using HTML, CSS, JavaScript, and React. I am always eager to learn new technologies and improve my skills.
                        <br /><br />
                        I was enrolled with the TripleTen program, an intensive coding bootcamp that focuses on practical skills and real-world projects. Through this program, I have gained hands-on experience in building web applications from scratch, collaborating with other developers, and deploying projects to production.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About;