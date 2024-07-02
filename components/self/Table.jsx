"use client"
import Image from "next/image";
import OrbitingCircles from "../magicui/orbiting-circles";
import useResponsiveRadius from "@/lib/radiushook";

const Icon = ({ name, size, className = "" }) => (
  <Image
    className={`${className} ${size === 40 ? 'rounded-full' : ''}`}
    src={`/icons/${name}.svg`}
    width={size}
    height={size}
  />
);

const iconSizes = {
  gitHub: 40,
  nodejs: 40,
  python: 40,
  javascript: 40,
  react: 40,
  mongodb: 50,
  tailwind: 50,
  nextjs: 50,
  css: 50,
  prisma: 40
};

export function Table() {
  const radius80 = useResponsiveRadius(80);
  const radius190 = useResponsiveRadius(190);
  const commonCircleProps = {
    className: "border-none bg-transparent",
    duration: 20
  };

  const innerOrbitIcons = ['react', 'javascript', 'gitHub', 'python'];
  const outerOrbitIcons = ['nextjs', 'tailwind', 'nodejs', 'mongodb', 'css', 'prisma'];

  const createOrbitProps = (icons, radius, size, reverse = false) => {
    return icons.map((icon, index) => ({
      delay: (index / icons.length) * commonCircleProps.duration,
      icon,
      radius,
      size,
      reverse
    }));
  };

  const innerOrbitProps = createOrbitProps(innerOrbitIcons, radius80, 30);
  const outerOrbitProps = createOrbitProps(outerOrbitIcons, radius190, 50, true);

  const orbitProps = [...innerOrbitProps, ...outerOrbitProps];

  return (
    <div className="relative flex h-[450px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg dark:bg-dark-blue">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Skills
      </span>
      {orbitProps.map(({ delay, icon, radius, size, reverse = false }) => (
        <OrbitingCircles
          {...commonCircleProps}
          key={`${icon}-${delay}`}
          delay={delay}
          radius={radius}
          reverse={reverse}
          className={`${commonCircleProps.className} h-[${size}px] w-[${size}px]`}
        >
          <Icon name={icon} size={iconSizes[icon]} className={icon === 'nextjs' || icon === 'gitHub' ? 'bg-white rounded-full' : ''} />
        </OrbitingCircles>
      ))}
    </div>
  );
}

export default Table;