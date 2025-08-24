
export interface AddIconProps {
    size?: "sm" | "md" | "lg" | undefined
}

export interface ShareIconProps extends AddIconProps {}
export interface CloseIconProps extends AddIconProps {
    className?: string
}

export const SizeVariants = {
    "sm": "size-2",
    "md": "size-4",
    "lg": "size-6",
}

