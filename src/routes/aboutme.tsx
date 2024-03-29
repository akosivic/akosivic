import { Row, Col } from 'react-bootstrap';
import HoverComponent from '../components/hoverComponent';
function AboutMe() {
    return (
        <div className="fill-window-100" id="AboutMe">
            <div className="container-fluid WelcomePage">
                <Row>
                    <Col className='col-md-auto'>
                        <img className="avatar" src="images/profile.jpg" alt="Avatar" />
                    </Col>
                    <Col className='col-md-auto'>
                        <Row>
                            <Col className='col-md-auto'>
                                <h2>Hello!</h2>
                            </Col >
                            <Col className='col-md-auto'>
                                <h2>I am</h2>
                            </Col >
                        </Row>
                        <Row>
                            <Col className='col-md-auto'>
                                <h1>VIC</h1>
                            </Col>
                            <Col className='col-md-auto'>
                                <h1>SALAK</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-md-auto'>
                                <HoverComponent HoverText="10+ yrs Software Engineer" Text="Software Engineer"></HoverComponent>
                            </Col>
                            <Col className='col-md-auto'>
                                <HoverComponent HoverText="3 yrs Engineering Manager" Text="Engineering Manager"/>
                            </Col>
                            <Col className='col-md-auto'>
                                <HoverComponent HoverText="3 yrs Scrum Master" Text="Scrum Master"/>
                            </Col>
                            <Col className='col-md-auto'>
                                <HoverComponent HoverText="2 yrs Team Lead" Text="Team Leader"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AboutMe;