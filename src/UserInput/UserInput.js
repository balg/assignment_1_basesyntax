import React from 'react';

const userInput = ( props ) => {
    return(
        <div className="userInput">
            <input type="text" onChange={ props.onChange } />
        </div>
    );
};

export default userInput;