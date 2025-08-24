import type { ComponentType} from "react"
import { FaTwitter } from "react-icons/fa";


interface SideBarButtonsProps {
    id: number | string;
    icon: ComponentType;
    title: string;
}

export const SideBarButtons: SideBarButtonsProps[] = [
    {id: 1, icon: FaTwitter, title: "Twitter"},
    {id: 2, icon: FaTwitter, title: "Videos"}
]