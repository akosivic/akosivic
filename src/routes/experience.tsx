import { Timeline, TimelineEvent } from '../components/timeline/timeline';
import '../components/timeline/timeline.css';
function Experience() {
    return (
        <div className="fill-window" id="Experience">
                <h1> Experience</h1 >
                <Timeline>
                    <TimelineEvent Left={true}>
                        <span>July 2015 - Present</span>
                        <h3>PRINCIPAL SOFTWARE ENGINEER</h3>
                        <p>Deltek Systems Philippines</p>
                    </TimelineEvent>
                    <TimelineEvent Left={false}>
                        <span>July 2010 - July 2015</span>
                        <h3>ENGINEERING MANAGER </h3>
                        <h3>Senior software Engineer</h3>
                        <p>FactSet Philippines</p>
                    </TimelineEvent>
                    <TimelineEvent Left={true}>
                        <span>January 2010 - July 2010</span>
                        <h3>SOFTWARE ENGINEER</h3>
                        <p>Lawson PSSC</p>
                    </TimelineEvent>
                    <TimelineEvent Left={false}>
                        <span>December 2006 - January 2010</span>
                        <h3>SOFTWARE ENGINEER</h3>
                        <p>Accenture Philippines</p>
                    </TimelineEvent>
                </Timeline>
        </div>
    );
};

export default Experience;