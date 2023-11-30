'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
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
    borderRight: '4px solid #1a202c',
    borderRadius: '50%',
    width: '21px',
    height: '21px',
  };

  const spinnerAnimation = {
    rotate: [0, 360],
    transition: { duration: 2, repeat: Infinity, ease: 'linear' },
  };

  return (
    <motion.div style={loadingStyle}>
      <motion.div style={spinnerStyle} animate={spinnerAnimation}></motion.div>
    </motion.div>
  );
};

export default Loading;
