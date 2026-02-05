import React from 'react';

const BackgroundElements: React.FC = () => {
  return (
    <>
      <div className="absolute top-20 left-10 w-64 h-64 bg-duo-blue/5 rounded-full blur-3xl animate-pulse" />
      <div 
        className="absolute bottom-20 right-10 w-80 h-80 bg-duo-green/5 rounded-full blur-3xl animate-pulse" 
        style={{ animationDelay: '1s' }} 
      />
    </>
  );
};

export default BackgroundElements;

