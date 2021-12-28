import { Row, Col } from 'react-bootstrap';
function Contact() {
    return (
        <div className="fill-window-100" id="Contact">
            <div className="container-fluid">
                <h1>Contact</h1>
                <div className="Social-Medias">
                    <Row >
                        <Col>
                            <div className="Social-Media">
                                <a href="https://github.com/akosivic" rel="noopener noreferrer" target="_BLANK">
                                    <i className="fab fa-github">
                                    </i>
                                    Github
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="Social-Media">
                                <a href="https://www.linkedin.com/in/vic-angelo-salak-69670733/" rel="noopener noreferrer" target="_BLANK">
                                    <i className="fab fa-linkedin">
                                    </i>
                                    LinkedIn
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Contact;