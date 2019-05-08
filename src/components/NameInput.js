import React from 'react';

function NameInput(props) {
  return (
    <div className="names"><h1>Hi this is Maria's App</h1>
      <form>
        <input id="firstName" placeholder="First Name"/>
        <input id="lastName" placeholder="Last Name"/>
        <button onClick={props.clicked} id="add">Add</button>
      </form>
    </div>
  );
}

export default NameInput;
