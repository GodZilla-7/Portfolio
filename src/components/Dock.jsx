import React from 'react';
import Tooltip from '@mui/material/Tooltip';
function Dock() {
  return (
    <div className="fixed bottom-5 w-fit h-20 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-lg py-3 px-3 border">
      <Tooltip title="GitHub" arrow>
      <a href="https://github.com/GodZilla-7" target="_blank" rel="noopener noreferrer">
        <img src="./social/github.png" alt="GitHub" className="w-12 h-12 mx-3 transition-transform transform hover:scale-125 hover:mb-2" />
      </a>
      </Tooltip>
      <Tooltip title="LinkedIn" arrow>
      <a href="https://www.linkedin.com/in/gauravshukla7/" target="_blank" rel="noopener noreferrer">
        <img src="./social/linkedIn.png" alt="LinkedIn" className="w-12 h-12 mx-3 transition-transform transform hover:scale-125 hover:mb-2" />
      </a>
      </Tooltip>
      <Tooltip title="Gmail" arrow>
      <a href="mailto:gouravshukla337@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src="./social/gmail.png" alt="Gmail" className="w-12 h-12 mx-3 transition-transform transform hover:scale-125 hover:mb-2" />
      </a>
      </Tooltip>
      <Tooltip title="WhatsApp" arrow>
      <a href="https://wa.me/7024474517" target="_blank" rel="noopener noreferrer">
        <img src="./social/whatsapp.png" alt="WhatsApp" className="w-12 h-12 mx-3 transition-transform transform hover:scale-125 hover:mb-2" />
      </a>
      </Tooltip>
    </div>
  );
};

export default Dock;
