import { useState } from 'react';
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FuncComponent';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const x = 1;

  return (
    <div className='App'>
      <p>Components is currently {isVisible ? 'visible' : 'hidden'}</p>
      {isVisible && (
        <ClassComponent test='test prop' test2={isVisible ? x : -x} isOn />
      )}
      {isVisible && (
        <FuncComponent test='test prop' test2={isVisible ? x : -x} isOn />
      )}
    </div>
  );
}

export default App;
