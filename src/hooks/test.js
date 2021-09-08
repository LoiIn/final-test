import { useEffect, useState } from 'react';

function TestHook() {
  const [names, setNames] = useState(['Huyen', 'Hoa', 'Hung', 'Long']);

  const addName = (newName) => {
    setNames([...names, newName]);
  }

  return [names, addName];
}

export default TestHook;  
