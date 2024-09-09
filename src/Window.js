import React from 'react';
import LeftSide from './LeftSide';
import CenterPart from './CenterPart';
import RightSide from './RightSide';

const Window = () => {
  const styling = {
    width: '70%',
    height: '90%',
    position : 'absolute',
    left: '15%',
    top: '5%',
    backgroundColor: '#181715',
    borderRadius: '20px',
  };

  return (
    <div className="Window" style={styling}>
        <LeftSide/> 
        <CenterPart/>
        <RightSide/>
    </div>
  );
};

export default Window;
