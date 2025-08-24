// import {MoonIcon, DocumentIcon} from '../icons';
// import { Button } from '../components';

// export const SignUp = () => {MoonIcon
 
//     return <div className='font-display w-screen h-screen bg-gray-300 dark:bg-gray-950 flex items-center justify-center overflow-hidden'> 
        
//         <div className='p-8 bg-gray-200 dark:bg-gray-900/20 rounded-2xl outline-1 outline-gray-400 dark:outline-gray-900 h-100 w-100 sm:w-1/3 shadow-2xl flex flex-col justify-center'>
           
//             <div className='flex flex-row items-center justify-center mb-7 text-gray-600  dark:text-gray-300'>
//                 <DocumentIcon size='6' />
//                 <span className='font-semibold text-2xl'>Nitify</span>
//             </div>

//             <div className='flex flex-col items-center font-route ml-1 font-semibold text-2xl text-black dark:text-gray-300'> 
//                 <label>Create your Nitify account</label>
//                 <span className='text-xs text-gray-900/70 dark:text-gray-400/40 mt-2 mb-5'>Enter your email address</span>
//                 <input type="text" className='outline-none w-full font-normal text-sm mt-5 focus:outline-none border-b-1 pl-1 focus:border-gray-600 dark:focus:border-blue-600 focus:ring-0' placeholder='Email, phone or Skype'/>
//             </div>

//             <Button size="lg" variant='primary' text='Next' className='w-full mt-5'/>

//             <div className='mt-5 flex items-center justify-center text-xs text-gray-600  dark:text-gray-300'>Already have an account? <a href={`${import.meta.env.VITE_NITIFY_CLIENT_DOMAIN}/signin`} className='text-blue-400'>Sign in</a> </div>

//         </div>
         
//     </div>
// }

import { useRef, useState } from "react";
import { Form } from "../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {

    const [ispassword, setIsPassword] = useState(false);
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)

    const navigate = useNavigate()

    // const handleSignUp = async () => {
    //     const username = usernameRef.current?.value || "";
    //     const password = passwordRef.current?.value || "";
    
    //     const response = await axios.post(`${import.meta.env.VITE_NITIFY_DOMAIN}/api/v1/signup`, {
    //         username: username,
    //         password: password
    //     })

    //     console.log(response)
        
    // }

    const handleSignUp = async () => {
        const username = usernameRef.current?.value || "";
        const password = passwordRef.current?.value || "";

        try {
            const response = await axios.post(`${import.meta.env.VITE_NITIFY_DOMAIN}/api/v1/signup`, {
                username: username,
                password: password
            }, {
                headers: {
                "Content-Type": "application/json", // ✅ explicitly set
                },
                withCredentials: true
            });

            console.log(response.data);
        } catch (error: any) {
            console.error("Signup failed:", error.response?.data || error.message);
        }

    }

    return (
        <>
        <Form Org="Nitify" title="Create your Nitify account" htel="Enter your email address" btntil="Next" sub="Already have an account?" addech={"sign in"} routeUser="signin" reference={usernameRef} className={`${ispassword ? "hidden" : ""}`} onClick={() => setIsPassword(true)}/>
            
        {ispassword && <Form reference={passwordRef} Org='Nitify' title='Enter your password' password={true} btntil='Next' sub='Forgot your password ? ' addech={"sign up"} onClick={() => {
            console.log("next is clicked password")
            handleSignUp()
            navigate("/signin")
        }} placeholder='Enter your password' routeUser='signup'/>
    }
        </>
        
    )
}