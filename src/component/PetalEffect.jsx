import React from 'react';
import './PetalEffect.css';
import snowflake from '../Assets/flower.webp';


const Snowflakes = () => {
  return (
    <div className="snowflakes">
      {Array.from({ length: 100 }).map((_, index) => (
        <img
          key={index}
          src={snowflake}
          alt="snowflake"
          className="snowflake"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${5 + Math.random() * 40}s`, // Durata random tra 5s e 10s
            animationDelay: `${Math.random() * 40}s`, // Ritardo random fino a 5s
            transform: `scale(${0.5 + Math.random() * 0.5})`, // Scala tra 0.5 e 1
          }}
        />
      ))}
    </div>
  );
};

export default Snowflakes;