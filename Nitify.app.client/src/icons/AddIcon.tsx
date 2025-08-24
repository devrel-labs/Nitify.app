import { SizeVariants, type AddIconProps } from "./IconsTypes"

export const AddIcon = (props: AddIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`${SizeVariants[props.size || "md"] } text-gray-500 dark:text-gray-200 flex items-center justify-center`}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
    )
}