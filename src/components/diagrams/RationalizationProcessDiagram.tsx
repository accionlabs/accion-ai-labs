import React from 'react';

const RationalizationProcessDiagram: React.FC = () => {
  return (
    <div className="w-full">
      <img 
        src="/assets/rationalization-process.svg" 
        alt="UX Rationalization Process" 
        className="w-full h-auto"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default RationalizationProcessDiagram;