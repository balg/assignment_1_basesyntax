import React from 'react';

const userOutput = ( props ) => {
    return (
        <div className="userOutput">
            <p>Hi there, {props.username}!</p>
            <p>This is the second paragraph.</p>
        </div>
    );
}

export default userOutput;