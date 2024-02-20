import React from 'react';

function btnClickEvent(event) {
  console.log(event);
}

function Button(props = {}) {
  return (
    <button onClick={btnClickEvent} className="btn btn-primary">
      {props.children}
    </button>
  );
}

export default Button;
