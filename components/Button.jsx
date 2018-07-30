import React from 'react';

const Button = (props) => {
  const { children } = props;

  const button = (
    <button type="button">
      {children}
    </button>
  );

  return button;
};

export default Button;
