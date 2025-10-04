import React from 'react';
import './WaveAnimation.css';

const WaveAnimation = () => {
  return (
    <div className="wave-container">
      <svg
        className="wave"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background gradient for depth */}
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(255, 255, 255, 0.15)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(255, 255, 255, 0.4)', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(255, 255, 255, 0.3)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(255, 255, 255, 0.6)', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(255, 255, 255, 0.85)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(255, 255, 255, 0.95)', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Wave Layer 1 - Back */}
        <path
          d="M0,60 C240,90 480,30 720,50 C960,70 1200,40 1440,60 L1440,120 L0,120 Z"
          fill="url(#waveGradient1)"
          className="wave-shape wave-back"
        />

        {/* Wave Layer 2 - Middle */}
        <path
          d="M0,70 C360,40 480,85 720,70 C960,55 1080,90 1440,75 L1440,120 L0,120 Z"
          fill="url(#waveGradient2)"
          className="wave-shape wave-middle"
        />

        {/* Wave Layer 3 - Front */}
        <path
          d="M0,80 C320,100 640,65 960,85 C1120,95 1280,75 1440,85 L1440,120 L0,120 Z"
          fill="url(#waveGradient3)"
          className="wave-shape wave-front"
        />
      </svg>
    </div>
  );
};

export default WaveAnimation;