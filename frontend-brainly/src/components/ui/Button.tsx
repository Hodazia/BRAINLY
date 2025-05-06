// extremely generic button component, 
// u can definde props as interfaces first in TS

export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon: any;  // any should not be used, it could be arrays, strings, numbers
    endIcon: any;
    onClick: () => void;
}



export const Button = ({}: ButtonProps) => {
    return <button></button>
}