import * as React from 'react';
import './style.css';

const flexBox: Record<string, unknown> = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '300px',
  marginTop: '50px',
} as Record<string, unknown>;

export default function App(): React.ReactElement {
  const [counter, setcounter] = React.useState<number>(0);
  const pausedValue = React.useRef(null);
  let Timerfn = React.useRef(undefined);

  React.useEffect(() => {
    if (counter > 1) pausedValue.current = counter;
  }, [counter]);

  const startTimer = () => {
    Timerfn.current = setInterval(() => {
      if (counter === 0) setcounter((counter) => counter + 1);
      else {
        setcounter(pausedValue.current + 1);
      }
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(Timerfn.current);
  };

  const resetTimer = () => {
    setcounter(0);
    clearInterval(Timerfn.current);
  };

  return (
    <div style={flexBox}>
      {counter}
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
