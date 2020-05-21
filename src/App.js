import React from 'react';
import Button from './Button';

function App() {
  const [count, setCounter] = React.useState(0);

  console.log('App updated');

  const onButtonClick = React.useCallback(() => setCounter((count) => count + 1), []);

  return (
    <div className="App">
      <h4>{count}</h4>
      <Button onClick={onButtonClick} />
    </div>
  );
}

export default App;
