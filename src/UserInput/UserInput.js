import React from 'react';

const userInput = ( props ) => {

    const style = {
        margin: "20px auto",
        width: "50%",
        padding: "5px 10px",
        border: "solid 1px blue",
    };

    return(
        <div className="userInput">
            <input 
                type="text" 
                style={ style }
                onChange={ props.onChange } 
                value={ props.userName } />
        </div>
    );
};

export default userInput;