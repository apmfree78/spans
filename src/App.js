import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState([false, false, false, false, false]);

  const activate = (pos) => {
    const _active = [...active];

    for (let i = 0; i < _active.length; i++) {
      if (i <= pos) _active[i] = true;
      else _active[i] = false;
    }

    // set state
    setActive([..._active]);
  };

  return (
    <div className='ratings'>
      {active.map((isActive, i) => {
        if (isActive)
          return (
            <>
              <span onClick={() => activate(i)} className='active'>
                <h2>Active</h2>
              </span>
              <br />
            </>
          );
        else
          return (
            <>
              <span onClick={() => activate(i)}>
                <h2>InActive</h2>
              </span>
              <br />
            </>
          );
      })}
    </div>
  );
}

export default App;
