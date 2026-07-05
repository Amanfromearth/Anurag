import { useEffect, useState } from 'react';
import FoldGradient from '@/FoldGradient';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Full-bleed animated site backdrop: the FoldGradient paper shader
 * (domain-warped light sheets, Raycast-wallpaper style). Reduced-motion
 * users get the same artwork frozen (speed 0) instead of losing it, and the
 * canvas fades in over the static fallback gradient once WebGL is up so
 * hydration never pops.
 */
export default function ShaderBackdrop() {
  const [frozen, setFrozen] = useState(prefersReducedMotion);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setFrozen(query.matches);
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  return (
    <div className="absolute inset-0 animate-backdrop-in">
      <FoldGradient
        colors={['#700000', '#008cff', '#75daff', '#ff0026', '#ff3626']}
        bgColor="#121212"
        shadowColor="#0a1c2a"
        softness={1}
        saturation={1}
        rotation={52}
        zoom={9}
        ribbon={0}
        ribbonWidth={1}
        speed={frozen ? 0 : 1}
      />
    </div>
  );
}
