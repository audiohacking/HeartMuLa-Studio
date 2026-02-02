import React from 'react';

interface CTFNLogoProps {
    size?: number;
    className?: string;
    showText?: boolean;
    darkMode?: boolean;
}

export const CTFNLogo: React.FC<CTFNLogoProps> = ({
    size = 32,
    className = '',
    showText = false,
    darkMode = false
}) => {
    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            {/* Logo Icon - Colorful CTFN design */}
            <svg
                width={size}
                height={size}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
            >
                {/* Background with gradient */}
                <rect
                    width="48"
                    height="48"
                    rx="8"
                    fill="url(#ctfn-logo-gradient)"
                />
                
                {/* CTFN Text - simplified for small sizes */}
                <g transform="translate(8, 16)">
                    {/* C */}
                    <path
                        d="M3 4 Q1 4 1 6 L1 10 Q1 12 3 12 L6 12"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                    />
                    
                    {/* T */}
                    <path
                        d="M9 4 L13 4 M11 4 L11 12"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    
                    {/* F */}
                    <path
                        d="M16 4 L16 12 M16 4 L19 4 M16 8 L18.5 8"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    
                    {/* N */}
                    <path
                        d="M22 12 L22 4 L26 12 L26 4"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                
                {/* Colorful accent dots */}
                <circle cx="6" cy="6" r="2" fill="#FFD700" opacity="0.8"/>
                <circle cx="42" cy="6" r="2" fill="#FF6B9D" opacity="0.8"/>
                <circle cx="6" cy="42" r="2" fill="#06B6D4" opacity="0.8"/>
                <circle cx="42" cy="42" r="2" fill="#A855F7" opacity="0.8"/>

                {/* Gradient definition */}
                <defs>
                    <linearGradient id="ctfn-logo-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#FF6B35" />
                        <stop offset="25%" stopColor="#F7931E" />
                        <stop offset="50%" stopColor="#A855F7" />
                        <stop offset="75%" stopColor="#06B6D4" />
                        <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Text */}
            {showText && (
                <span className={`font-bold text-lg tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    CTFN <span className={darkMode ? 'text-[#F7931E]' : 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500'}>Studio</span>
                </span>
            )}
        </div>
    );
};

// Standalone icon version for favicon/smaller uses
export const CTFNIcon: React.FC<{ size?: number; darkMode?: boolean }> = ({ size = 24, darkMode = false }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            width="48"
            height="48"
            rx="8"
            fill="url(#ctfn-icon-gradient)"
        />
        <g transform="translate(8, 16)">
            <path
                d="M3 4 Q1 4 1 6 L1 10 Q1 12 3 12 L6 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M9 4 L13 4 M11 4 L11 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M16 4 L16 12 M16 4 L19 4 M16 8 L18.5 8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M22 12 L22 4 L26 12 L26 4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
        <circle cx="6" cy="6" r="2" fill="#FFD700" opacity="0.8"/>
        <circle cx="42" cy="6" r="2" fill="#FF6B9D" opacity="0.8"/>
        <circle cx="6" cy="42" r="2" fill="#06B6D4" opacity="0.8"/>
        <circle cx="42" cy="42" r="2" fill="#A855F7" opacity="0.8"/>
        <defs>
            <linearGradient id="ctfn-icon-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FF6B35" />
                <stop offset="25%" stopColor="#F7931E" />
                <stop offset="50%" stopColor="#A855F7" />
                <stop offset="75%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
        </defs>
    </svg>
);
