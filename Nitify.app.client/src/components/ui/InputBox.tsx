
interface InputBoxProps {
    placeholder: string;
    type: string;
    reference?: any
}

export const InputBox = ({placeholder, type, reference}: InputBoxProps) => {

    return (
        <div>
            <input ref={reference} type={type} placeholder={placeholder} className="font-display p-3 w-full outline-1 rounded-lg outline-slate-700 mb-3 shadow-md bg-white dark:bg-gray-500 text-black dark:text-white"/>
        </div>
    )
}