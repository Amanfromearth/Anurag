
import { useState, useEffect } from 'react';

const useResponsiveRadius = (baseRadius) => {
  const [radius, setRadius] = useState(baseRadius);

  useEffect(() => {
    const calculateRadius = () => {
      const breakpoints = { mobile: 576, tablet: 768 };
      const radiusValues = { mobile: baseRadius * 0.8, tablet: baseRadius * 0.8, desktop: baseRadius };

      const screenWidth = window.innerWidth;
      if (screenWidth < breakpoints.tablet) {
        return radiusValues.mobile;
      } else if (screenWidth < breakpoints.mobile) {
        return radiusValues.tablet;
      }
      return radiusValues.desktop;
    };

    const handleResize = () => {
      setRadius(calculateRadius());
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [baseRadius]);

  return radius;
};

export default useResponsiveRadius;
