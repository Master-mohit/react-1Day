import React, { useState, useEffect } from 'react';

const Clock = () => {
  
  const [currenttym, setCurrentTime] = useState(new Date());


  const updateCurrentTime = () => {
    setCurrentTime(new Date());
  };


  useEffect(() => {
    const chacha = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(chacha);
  }, []);

  
  const chachi = currenttym.toLocaleTimeString();

  return (
    <div>
     
     <h1>{chachi}</h1>
    </div>
  );
};

export default Clock;
