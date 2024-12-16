import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import bgVideo from './videos/bg-rose.mp4';
import Home from './Home.jsx'; // Home 컴포넌트 import
import NavigateButton from './NavigateButton'; // NavigateButton 컴포넌트 import

const Main = () => {
  return (
    <div className="relative h-[100vh] bg-black flex justify-center items-center">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-center font-pacifico text-[10vw] text-[#FFC100]">ProtFolio</p>
        <p className="text-center">
          코딩과 디자인 사이에서 조화를 찾는 퍼블리셔 [장아름] 입니다.
        </p>
        <p className="text-center">
          섬세한 코드와 창의적인 접근으로 가치 있는 결과를 제공합니다.
        </p>
        {/* 특정 버튼 */}
        <NavigateButton to="/home" label="Go to Home" />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
