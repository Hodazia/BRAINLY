// extremely generic button component, 
// u can definde props as interfaces first in TS, 
import { ReactElement } from 'react';


interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;  // any should not be used, it could be arrays, strings, numbers
    endIcon?: ReactElement;
    onClick: () => void;
}

// Mapping button variants to their respective CSS classes
const variantClasses = {
    "primary": "bg-purple-600 text-white", // Styles for primary variant
    "secondary": "bg-purple-200 text-purple-600", // Styles for secondary variant
};

// Default CSS classes for all buttons
const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center";      //items-center is for vertically allignment of the item to be center

const sizeStyles = {
    "sm":"py-1 px-2",
    "md":"py-2 px-4",
    "lg":"py-4 px-6"
}
// ButtonProps shall be the props that would be sent in every Button component, 
/**
 * export const Button = (props: ButtonProps) => {
    return <button className={variantClasses[props.variant]}>hello</button>
}
 */



export const Button = (props: ButtonProps) => {
    return <button className={`${variantClasses[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} `}>
        {props.startIcon? <div className='pr-2'>{props.startIcon}</div> : null} 
        {props.text}
        {props.endIcon}
    </button>
}

