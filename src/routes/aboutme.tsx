
function AboutMe() {
    return (
        <div className="fill-window" id="AboutMe">
            <div className="WelcomePage">
                {/* <img className="avatar" src="" alt="Avatar" /> */}
                <div className="right">
                    <div className="left">
                        <h1>hello</h1><div className="square bounce-7"></div>
                    </div>
                    <p className="description left">I'm Vic Salak</p>
                    <p className="description left">10+ years Software Engineer | 3 years Engineering Manager </p>
                    <p className="description left"> 3+ years Scrum Master | 2 years Team Lead </p>
                    <p className="Social-Media">
                        <a href="https://github.com/akosivic" rel="noopener noreferrer" target="_BLANK">
                            <i className="fab fa-github">
                            </i>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;