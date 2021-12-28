import React from 'react';
import './timeline.css';

export function Timeline(props: any) {
    return (
        <div className="timeline">
            {props.children}
        </div>
    )
};

export function TimelineEvent(props: any) {
    let position = 'container';
    if (props.Left) {
        position += ' left';
    } else {
        position += ' right';
    }
    return (
        <div className={position}>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}

