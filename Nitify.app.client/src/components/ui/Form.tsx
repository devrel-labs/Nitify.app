import {DocumentIcon} from '../../icons';
import { Button } from '../../components';
import type { RefObject } from 'react';

interface FormProps {
    Org: string;
    title: string;
    htel?: string;
    btntil: string;
    sub?: string;
    password?: Boolean;
    addech?: String;
    onClick?: () => void;
    placeholder?: string;
    routeUser?: string;
    reference?: RefObject<HTMLInputElement | null>;
    ispassword?: Boolean;
    className?: string;
}

export const Form = ({Org, title, htel, btntil, sub, password, addech, onClick, placeholder, routeUser, reference, ispassword, className}: FormProps) => {
 
    return (
        <>
    <div className={`font-display w-screen h-screen bg-gray-300 dark:bg-gray-950 flex items-center justify-center overflow-hidden ${ispassword ? "hidden" : ""} ${className || ""}`}> 
        
        <div className='p-8 bg-gray-200 dark:bg-gray-900/20 rounded-2xl outline-1 outline-gray-400 dark:outline-gray-900 h-100 w-100 sm:w-1/3 shadow-2xl flex flex-col justify-center'>
           
            <div className='flex flex-row items-center justify-center mb-7 text-gray-600  dark:text-gray-300'>
                <DocumentIcon size='6' />
                <span className='font-semibold text-2xl'>{Org}</span>
            </div>

            <div className='flex flex-col items-center font-route ml-1 font-semibold text-2xl text-black dark:text-gray-300'> 
                <label>{title}</label>
                <span className='text-xs text-gray-900/70 dark:text-gray-400/40 mt-2 mb-5'>{htel}</span>
                <input type={`${password ? "password" : "text"}`} className='outline-none w-full font-normal text-sm mt-5 focus:outline-none border-b-1 pl-1 focus:border-gray-600 dark:focus:border-blue-600 focus:ring-0' placeholder={`${placeholder ? placeholder : "Email, phone or Skype"}`} ref={reference}/>
            </div>

            <Button size="lg" variant='primary' text={btntil} className='w-full mt-5' onClick={onClick}/>

            <div className='mt-5 flex items-center justify-center text-xs text-gray-600  dark:text-gray-300'>{sub} <a href={`${import.meta.env.VITE_NITIFY_CLIENT_DOMAIN}/${routeUser}`} className='text-blue-400'>{addech}</a> </div>

        </div>
         
    </div>
    
    </>
    )
}