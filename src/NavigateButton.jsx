import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateButton = ({ to, label }) => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleNavigation = () => {
    navigate(to); // 사용자가 설정한 경로로 이동
  };

  return (
    <button
      onClick={handleNavigation}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      {label}
    </button>
  );
};

export default NavigateButton;
