
import { ProgressBar } from 'react-bootstrap';
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
            <div className="container">
                <div className="row">
                    <div className="col">
                        {/* <h2>Professional</h2> */}
                        {professionalSkills.map((skills, idx) => (
                            <div className="row">
                                <div className="col-4">
                                    <span key={idx} style={{ float: "left" }}>{skills.skill}</span>
                                </div>
                                <div className="col-8" >
                                    <ProgressBar key={idx} className='col-sm-9' now={skills.level} max={max} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col">
                        {/* <h2>Interpersonal</h2> */}
                        {interpersonalSkills.map((skills, idx) => (
                            <div className="row">
                                <div className="col-4">
                                    <span style={{ float: "left" }}>{skills.skill}</span>
                                </div>
                                <div className="col-8" >
                                    <ProgressBar className='col-sm-9' now={skills.level} max={max} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </div >

    );
};

export default Skills;