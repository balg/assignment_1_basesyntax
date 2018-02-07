import React from 'react';
import "./UserOutput.css";

const userOutput = ( props ) => {
    return (
        <div className="userOutput">
            <p>Hi there, {props.username}!</p>
            <p>This is the second paragraph.</p>
        </div>
    );
}

export default userOutput;