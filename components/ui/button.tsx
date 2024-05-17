import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
    children,
    onClick,
    className
}) => {
    return (
        <button
            onClick={onClick}
            className={`
                bg-[#FFDF6D]
                p-2
                ${className}
            `}
        >
            <div 
                className='
                    p-4 px-10
                    bg-[#FED33B]
                    rounded-3xl
                    shadow-[-9px_15px_0px_0px_rgba(205,163,78,1)_inset]	
            '>
                <p className='text-2xl font-bold'>{children}</p>
            </div>
            
        </button>
    );
};

export default Button;
