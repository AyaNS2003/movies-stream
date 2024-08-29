import React from 'react';
import LeftSide from './LeftSide';

const Window = () => {
  const styling = {
    width: '70%',
    height: '80%',
    position : 'absolute',
    left: '15%',
    top: '10%',
    backgroundColor: '#181715',
    borderRadius: '20px',
  };

  return (
    <div className="Window" style={styling}>
        <LeftSide/> 
    </div>
  );
};

export default Window;
