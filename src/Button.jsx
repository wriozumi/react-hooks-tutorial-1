import React from 'react';

const Button = React.memo(({ onClick }) => {
  console.log('render');

  return <button onClick={onClick}>+</button>;
});

export default Button;
