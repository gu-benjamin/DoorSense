// Loading.tsx

import React from 'react';

export default function Loading() {
 const loadingStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  };

  const spinnerStyle = {
    borderTop: '4px solid rgba(0, 0, 0, 0.1)',
    borderLeft: '4px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '4px solid rgba(0, 0, 0, 0.1)',
    borderRight: '4px solid #1a202c', // Cor principal do spinner
    borderRadius: '50%',
    width: '21px',
    height: '21px',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div style={loadingStyle}>
      <div style={spinnerStyle}></div>
    </div>
  );
};
