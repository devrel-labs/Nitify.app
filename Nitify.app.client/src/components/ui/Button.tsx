// import type { ReactElement } from "react";

// interface ButtonProps {
//     variant: "primary" | "secondary";
//     size: "sm" | "md" | "lg";
//     className?: string;
//     text: string;
//     StartIcon?: ReactElement;
//     EndIcon?: ReactElement;
//     onClick: () => void;


// }

// const VariantStyles = {
//     "primary": "bg-white text-black dark:bg-blue-700 dark:text-white rounded-lg",
//     "secondary": "bg-gray-100 text-black dark:text-white dark:bg-blue-400 rounded-md"
// }

// const SizeStyles = {
//     "sm": "p-1 m-1",
//     "md": "px-1 py-0.5 mx-1 my-0.5",
//     "lg": "py-1 px-2 my-1 mx-2"
// }

// const Button = (
//     props: ButtonProps
// ) => {

//     return (
//         <div>
//            <button
//             style={{
//                 boxShadow: "0px -2px 0px #2b6cb0"
//             }}
//             className={`${VariantStyles[props.variant]} ${SizeStyles[props.size]} hover:-translate-y-0.5 transition-all duration-200 flex flex-row justify-center items-center gap-1 font-semibold ${props.className}`} >
//             {props.StartIcon && props.StartIcon} 
//             <div className="hidden md:block">
//                 {props.text}
//             </div>            
//             {props.EndIcon && props.EndIcon} 
//         </button>
//         </div>
//     )
// }


// export default Button

import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary";
  size: "sm" | "md" | "lg";
  className?: string;
  text: string;
  StartIcon?: ReactElement;
  EndIcon?: ReactElement;
  onClick?: () => void;
  disabled?: boolean;
}

const VariantStyles = {
  primary: "bg-gray-100 text-black dark:bg-blue-700 dark:text-white rounded-lg",
  secondary: "bg-gray-100 text-black dark:text-white dark:bg-gray-500 rounded-md",
  tertiary: "group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105",
};

const SizeStyles = {
  sm: "p-1 m-1 text-xs",
  md: "px-2 py-2 mx-1 my-0.5 text-sm",
  lg: "py-2 px-3 text-base",
};

const Button = (props: ButtonProps) => {
  return (
    <div className={props.className}>
      <button
        onClick={props.onClick}
        style={{ boxShadow: "0px 2px 0px #2b6cb0" }}
        className={`
          ${VariantStyles[props.variant]}
          ${SizeStyles[props.size]}
          hover:-translate-y-0.5
          transition-all
          duration-200
          flex items-center justify-center gap-1 font-semibold
          cursor-pointer
          ${props.className}
        `}
      >
        {/* Icon before text */}
        {props.StartIcon && <span className="text-lg">{props.StartIcon}</span>}

        {/* Text: hidden on mobile, visible on md+ */}
        <span className={`${props.disabled ? "hidden" : "inline"} md:inline`}>{props.text}</span>

        {/* Icon after text */}
        {props.EndIcon && <span className="text-lg">{props.EndIcon}</span>}
      </button>
    </div>
  );
};

export default Button;
