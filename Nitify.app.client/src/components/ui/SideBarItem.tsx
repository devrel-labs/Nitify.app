import { CollectionIcon, DashboardIcon, HelpIcon,SettingsIcon } from "../../icons";

const SideBarItem = () => {


    return (
        <div className="flex flex-col gap-3 mt-10 space-y-2 ml-4 text-2xl items-start">
                
                    <span className="flex flex-row gap-2 text-gray-700 dark:text-gray-300 items-start hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    {<DashboardIcon />} Dashboard
                </span>
           
                <span className="flex flex-row gap-2 text-gray-700 dark:text-gray-300 items-start hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    {<CollectionIcon />}Collections
                </span>
                <span className="flex flex-row gap-2 text-gray-700 dark:text-gray-300 items-start hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    {<SettingsIcon />}Settings
                </span>
                <span className="flex flex-row gap-2 text-gray-700 dark:text-gray-300 items-start hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    {<HelpIcon />}Help
                </span>
        </div>
    )
}


export default SideBarItem