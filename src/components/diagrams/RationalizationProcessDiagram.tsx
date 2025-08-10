import React from 'react';
import { getPublicAssetUrl } from '../../utils/assetHelper';

const RationalizationProcessDiagram: React.FC = () => {
  return (
    <div className="w-full">
      <img 
        src={getPublicAssetUrl("assets/diagrams/rationalization-process.svg")} 
        alt="UX Rationalization Process" 
        className="w-full h-auto"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default RationalizationProcessDiagram;