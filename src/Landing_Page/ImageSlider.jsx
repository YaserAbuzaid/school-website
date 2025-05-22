import { useCallback, useEffect, useRef, useState } from 'react';

const slideStyles = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const sliderStyles = {
  position: 'relative',
  width: '100%',
  height: '100%',
};

const dotsContainerStyles = {
  position: 'absolute',
  bottom: '10px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

const dotStyle = {
  margin: '0 5px',
  cursor: 'pointer',
  fontSize: '20px',
  color: 'rgba(255,255,255,0.7)',
};

const slidesContainerStyles = {
  display: 'flex',
  height: '100%',
  transition: 'transform ease-out 0.5s',
};

export const ImageSlider = ({ slides }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    timerRef.current = setTimeout(goToNext, 3000);
    return () => clearTimeout(timerRef.current);
  }, [currentIndex, goToNext]);

  const containerWidth = `${slides.length * 100}%`;
  const translateX = `-${currentIndex * (100 / slides.length)}%`;

  return (
    <div style={sliderStyles} className='h-full'>
      <div style={{ ...slidesContainerStyles, width: containerWidth, transform: `translateX(${translateX})` }}>
        {slides.map((slide, i) => (
          <div 
            key={i} 
            style={{ 
              ...slideStyles, 
              width: `${100 / slides.length}%`, // Fixed width calculation
              backgroundImage: `url(${slide.url})` 
            }} 
          />
        ))}
      </div>
      <div style={dotsContainerStyles}>
        {/* dots remain the same */}
        <div style={dotsContainerStyles}>
        {slides.map((_, i) => (
          <div key={i} style={dotStyle} onClick={() => goToSlide(i)}>
            ●
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};
