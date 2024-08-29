import React from 'react';
import LeftSide from './LeftSide';
import CenterPart from './CenterPart';

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
        <CenterPart/>
    </div>
  );
};

export default Window;
