import React from 'react';
// any file that is defining a component you need this

function NameList(props) {

    return(
        <div className = "NameList">
            {props.names}
        </div>
    );
}

export default NameList