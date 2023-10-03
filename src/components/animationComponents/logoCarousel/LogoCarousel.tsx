'use client'
import  { useState, useEffect } from 'react';
const LogoCarousel = () => {
  const logos = ['/images/client1.png', '/images/client2.svg.png', '/images/client5.jpeg', '/images/client6.png', '/images/client3.webp', '/images/client4.png','/images/client7.jpeg' ];
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex space-x-4">
        <img
          src={logos[currentLogoIndex]}
          alt={`Logo ${currentLogoIndex + 1}`}
          className="h-20 w-auto"
        />
      </div>
    </div>
  );
};

export default LogoCarousel;
