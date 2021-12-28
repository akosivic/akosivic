
import { ProgressBar, Row, Col } from 'react-bootstrap';
function Skills() {

    type skill = {
        skill: string,
        level: number
    };
    let max: number = 10;

    let professionalSkills: Array<skill> = [{ skill: 'C#.net', level: 7 }, { skill: 'JavaScript', level: 7 }, { skill: 'Bootstrap', level: 5 }, { skill: 'JQuery', level: 5 }, { skill: 'Unit Testing', level: 5 }, { skill: 'OOP', level: 7 }, { skill: 'SQL', level: 7 }, { skill: 'WPF', level: 7 }]
    let interpersonalSkills: Array<skill> = [{ skill: 'People Management', level: 5 }, { skill: 'Scrum Master', level: 7 }]

    return (
        <div className="fill-window" id="Skills">
            <h1>Skills</h1 >
            <div className="container-fluid">
                <Row xs={2} md={4} lg={6}>
                    <Col>
                        <a href='https://www.scrum-institute.org/badges/37410105264279'>
                            <img src="images/scrum-institute.png" alt="scrum-institute" style={{ width: "200px", padding: "10px", margin: "10px" }} />
                        </a>
                    </Col>
                    <Col>
                        <a href=''>
                            <img src="images/javascript.svg" alt="javascript" className="skillBadge" />
                        </a>
                    </Col>
                    <Col>
                        <a href='https://react-bootstrap.github.io/'>
                            <img src="images/bootstrap.svg" alt="bootstrap" className="skillBadge" />
                        </a>
                    </Col>
                    <Col>
                        <a href='https://reactjs.org/'>
                            <img src="images/react.svg" alt="reactjs" className="skillBadge" />
                        </a>
                    </Col>
                    <Col>
                        <a href='https://docs.microsoft.com/en-us/dotnet/'>
                            <img src="images/csharp.svg" alt="csharp" className="skillBadge" />
                        </a>
                    </Col>
                    <Col>
                        <a href='https://www.microsoft.com/en-us/sql-server/sql-server-2019'>
                            <img src="images/sqlserver.svg" alt="sqlserver" className="skillBadge" />
                        </a>
                    </Col>
                </Row>
                <Row xs={1} md={2} lg={2}>
                    <Col>
                        {/* <h2>Professional</h2> */}
                        {professionalSkills.map((skills, idx) => (
                            <Row>
                                <Col>
                                    <span key={idx} style={{ float: "left" }}>{skills.skill}</span>
                                </Col>
                                <Col >
                                    <ProgressBar key={idx} now={skills.level} max={max} />
                                </Col>
                            </Row>
                        ))}
                    </Col>
                    <Col>
                        {/* <h2>Interpersonal</h2> */}
                        {interpersonalSkills.map((skills, idx) => (
                            <Row>
                                <Col >
                                    <span key={idx} style={{ float: "left" }}>{skills.skill}</span>
                                </Col>
                                <Col>
                                    <ProgressBar key={idx} now={skills.level} max={max} />
                                </Col>
                            </Row>
                        ))}
                    </Col>
                </Row>
            </div >
        </div >

    );
};

export default Skills;