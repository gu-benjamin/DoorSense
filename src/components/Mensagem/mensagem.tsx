import React, { useState, useEffect } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

interface MensagemProps {
  message: string;
  duration: number;
}

const Mensagem: React.FC<MensagemProps> = ({ message, duration }) => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    if (message) {
      const timer = setInterval(() => {
        setSegundos((prevSeconds) => {
          if (prevSeconds < duration) {
            return prevSeconds + 0.01;
          }
          return prevSeconds;
        });
      }, 10);

      return () => {
        clearInterval(timer);
      };
    }
  }, [message, duration]);

  const progressBarStyle = {
    width: `${(segundos / duration) * 100}%`,
  };

  return (
      <div className="absolute rounded-b-lg top-0 left-5 p-3 w-1/4 bg-message-100 border-l-8 border-message-200">
        <div className='flex align-center'>
          <AiFillCheckCircle color='#00D715' size='20' />
          <span className='mr-1'></span>
          {message}
        </div>
        <div className="h-1 rounded-md bg-white" style={progressBarStyle}></div>
      </div>
  );
  
};

export default Mensagem;
