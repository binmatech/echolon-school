import React from 'react';

interface SchoolLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export default function SchoolLogo({ className = '', size = 'md', showText = true }: SchoolLogoProps) {
  const sizeClasses = {
    sm: { img: 'w-8 h-8 md:w-10 md:h-10', text: 'text-xs md:text-sm font-bold tracking-tight' },
    md: { img: 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14', text: 'text-sm sm:text-base md:text-[17px] font-extrabold tracking-tight' },
    lg: { img: 'w-16 h-16 md:w-20 md:h-20', text: 'text-xl md:text-2xl font-black tracking-tight' },
    xl: { img: 'w-24 h-24 md:w-32 md:h-32', text: 'text-2xl md:text-3xl font-black tracking-tight' },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      {/* Precision Circular School Crest Image */}
      <img
        src="https://imgur.com/WUU9d7R.png"
        alt="Echelon Schools Logo"
        referrerPolicy="no-referrer"
        className={`${currentSize.img} object-contain flex-shrink-0 transition-transform duration-300 hover:scale-105 rounded-full`}
      />

      {/* Branded school name styling */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${currentSize.text} leading-none flex flex-wrap gap-x-1 font-display transition-colors duration-300`}>
            <span className="text-echelon-blue font-black">ECHELON</span>
            <span className="font-semibold text-current">SCHOOLS</span>
          </span>
          <span className="text-[8px] sm:text-[9px] md:text-xs font-mono tracking-wider sm:tracking-widest text-echelon-gold font-semibold uppercase mt-0.5">
            Desire for Knowledge
          </span>
        </div>
      )}
    </div>
  );
}
