import React from 'react';
import { ButtonProps } from '../interfaces';

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
    // Define size classes
    const sizeClasses = {
        small: 'px-3 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-5 py-3 text-lg',
    };

    // Compose className
    const className = `bg-blue-500 text-white ${sizeClasses[size]} ${shape}`;

    return <button className={className}>{title}</button>;
};

export default Button;
