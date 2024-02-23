import React from 'react';

function Button(props = {}) {
  return (
    <button
      onClick={props.clickHandler}
      className="btn btn-primary"
      disabled={props.disable}
    >
      {props.children}
    </button>
  );
}

export default Button;
