import React from 'react';

interface SchoolLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export default function SchoolLogo({ className = '', size = 'md', showText = true }: SchoolLogoProps) {
  const sizeClasses = {
    sm: { img: 'w-10 h-10', text: 'text-sm font-bold tracking-tight' },
    md: { img: 'w-14 h-14', text: 'text-lg font-extrabold tracking-tight' },
    lg: { img: 'w-20 h-20', text: 'text-2xl font-black tracking-tight' },
    xl: { img: 'w-32 h-32', text: 'text-3xl font-black tracking-tight' },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
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
          <span className="text-[10px] md:text-xs font-mono tracking-widest text-echelon-gold font-semibold uppercase mt-0.5">
            Desire for Knowledge
          </span>
        </div>
      )}
    </div>
  );
}
