import Image from "next/image";
import OrbitingCircles from "../magicui/orbiting-circles";
import { memo } from 'react';

const Icon = memo(({ name, size, className = "" }) => (
  <Image
    className={`${className} ${size === 40 ? 'rounded-full' : ''}`}
    src={`/icons/${name}.svg`}
    width={size}
    height={size}
    alt={`${name} icon`}
  />
));

Icon.displayName = 'Icon';

const iconSizes = {
  gitHub: 40,
  nodejs: 40,
  python: 40,
  javascript: 40,
  react: 40,
  mongodb: 50,
  tailwind: 50,
  nextjs: 50
};

const commonCircleProps = {
  className: "border-none bg-transparent",
  duration: 20
};

const orbitProps = [
  { delay: 0, icon: 'react', radius: 80, size: 30 },
  { delay: 5, icon: 'javascript', radius: 80, size: 30 },
  { delay: 10, icon: 'gitHub', radius: 80, size: 30 },
  { delay: 15, icon: 'python', radius: 80, size: 30 },
  { delay: 0, icon: 'nextjs', radius: 190, size: 50, reverse: true },
  { delay: 5, icon: 'tailwind', radius: 190, size: 50, reverse: true },
  { delay: 10, icon: 'nodejs', radius: 190, size: 50, reverse: true },
  { delay: 15, icon: 'mongodb', radius: 190, size: 50, reverse: true }
];

export const Table = memo(() => (
  <div className="relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg dark:bg-dark-blue">
    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
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
        <Icon 
          name={icon} 
          size={iconSizes[icon]} 
          className={(icon === 'nextjs' || icon === 'gitHub') ? 'bg-white rounded-full' : ''}
        />
      </OrbitingCircles>
    ))}
  </div>
));

Table.displayName = 'Table';

export default Table;