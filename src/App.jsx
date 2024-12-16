// React 컴포넌트
import React, { useEffect, useState } from 'react';
import bgVideo from './videos/bg-rose.mp4';

const App = () => {
  {/* <video src="./videos/bg-rose.mp4" ></video> */ }


  return (
    <video autoPlay loop muted>
      <source src={bgVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default App;
