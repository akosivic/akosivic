import { Row, Col } from 'react-bootstrap';

function AboutMe() {
    return (
        <div className="fill-window" id="AboutMe">
            <div className="Container fluid sm" >
                <Row>
                    <Col>
                        <Row>
                            <h1>hello</h1>
                        </Row>
                        <Row>
                            <h1>I am Vic Salak</h1>
                        </Row>
                        <ul>
                            <li>
                                <span>10+ years Software Engineer</span>
                            </li>
                            <li>
                                <span>3 years Engineering Manager </span>
                            </li>
                            <li>
                                <span className="right">3+ years Scrum Master</span>
                            </li>
                            <li>
                                <span className="left">2 years Team Lead</span>
                            </li>
                        </ul>
                        <Row className="justify-content-md-center">
                            <Col xs={1} md="auto" lg="auto">
                                <span className="right">10+ years Software Engineer</span>
                            </Col>
                            <Col xs={1} md="auto" lg="auto">
                                <span>&#8226;</span>
                            </Col>
                            <Col xs={1} md="auto" lg="auto">
                                <span className="left">3 years Engineering Manager </span>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={1} md="auto" lg="auto">
                                <span className="right">3+ years Scrum Master</span>
                            </Col>
                            <Col xs={1} md="auto" lg="auto">
                                <span>&#8226;</span>
                            </Col>
                            <Col xs={1} md="auto" lg="auto">
                                <span className="left">2 years Team Lead</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </div>
        </div>
    );
};

export default AboutMe;