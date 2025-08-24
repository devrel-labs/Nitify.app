import { CloseIcon } from "../icons";
import { InputBox } from "./ui/InputBox";
import Button from "./ui/Button";
import { useRef } from "react";
import axios from "axios";

interface AddContentModalProps {
    open: Boolean;
    onClose: () => void;
}

export const AddContentModal = ({ open, onClose }: AddContentModalProps) => {

    const titleRef = useRef<HTMLInputElement>(null)
    const linkRef = useRef<HTMLInputElement>(null)
    const typeRef = useRef<HTMLInputElement>(null)

    const handleSubmit = async () => {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const type = typeRef.current?.value;


        console.log(title);
        console.log(link);
        console.log(type);
        console.log(localStorage.getItem("token"));

        await axios.post(`${import.meta.env.VITE_NITIFY_DOMAIN}/api/v1/content`,
            {
                title: title,
                link: link,
                type: type,
            },
            {
                withCredentials: true
            }
            );
    }


    return (
        <div>
            {open && (
                <div className="h-screen w-screen fixed top-0 left-0 z-30 flex justify-center items-center">
                    {/* Backdrop */}
                    <div className="absolute h-full w-full bg-slate-700 opacity-60"></div>

                    {/* Modal content */}
                    <div className="relative w-96 flex flex-col justify-center z-40 bg-gray-200 dark:bg-gray-900 p-6 rounded-lg">
                        <span className="relative z-50">
                            <div className="flex justify-end mb-5">
                                <button onClick={onClose}>
                                    <CloseIcon/>
                                </button>
                            </div>
                            <div className="flex flex-col items-center">
                                <div>
                                    <InputBox reference={titleRef} type="text" placeholder="Enter your title" />
                                    <InputBox reference={linkRef} type="text" placeholder="Enter your link"/>
                                    <InputBox reference={typeRef} type="text" placeholder="Enter your type"/>
                                </div>
                                
                                <Button className="w-[90%] ml-3" variant="primary" size="lg" text="submit" onClick={() => {
                                    handleSubmit()
                                    onClose()
                                }}/>
                            </div>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};
