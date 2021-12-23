import { Row, Col } from 'react-bootstrap';

function AboutMe() {
    return (
        <div className="fill-window" id="AboutMe">
            <div className="WelcomePage">
                <Row>
                    <Col className='col-md-auto'>
                        <img className="avatar" src="" alt="Avatar" />
                    </Col>
                    <Col className='col-md-auto'>
                        <Row>
                            <Col className='col-md-auto'>
                                <h2>Hello! I am</h2>
                            </Col >
                        </Row>
                        <Row>
                            <Col className='col-md-auto'>
                                <h1>VIC SALAK</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-md-auto'>
                                <p>10+ yrs Software Engineer</p>
                            </Col>
                            <Col className='col-md-auto'>
                                <p>3 yrs Engineering Manager </p>
                            </Col>
                            <Col className='col-md-auto'>
                                <p>3 yrs Scrum Master</p>
                            </Col>
                            <Col className='col-md-auto'>
                                <p>2 yrs Team Lead</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* <div className="right">
                    <div className="left">
                        <h1>hello</h1>
                    </div>
                    <p className="description">I'm Vic Salak</p>
                    <p className="description">Software Engineer | Team Leader | Manager </p>
                </div> */}
                {/* ); */}
            </div>
        </div>
    );
};

export default AboutMe;