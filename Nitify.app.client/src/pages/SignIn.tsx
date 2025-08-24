import {DocumentIcon} from '../icons';
import { Button } from '../components';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Form } from '../components';
import axios from 'axios';

export const SignIn = () => {
 
    const [ispassword, setIsPassword] = useState(false)
    const navigate  = useNavigate()

    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)

    // const handleSignIn = async () => {
    //     const username = usernameRef.current?.value;
    //     const password = passwordRef.current?.value || "sdfsdf"; 

    //     console.log("username: ", username)
    //     console.log("password: ", password)

    //     if (username || password) navigate("/");

    //     const data = await axios.post(`${import.meta.env.VITE_NITIFY_DOMAIN}/api/v1/signin`, {
    //         username,
    //         password
    //     },  
        
    // )
    //     localStorage.setItem("token", data.data.token);
    //     navigate("/dashboard")
    // }

    const handleSignIn = async () => {
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;

            if (!username || !password) {
                alert("Please enter both username and password.");
                return;
            }

            try {
                const { data } = await axios.post(
                `${import.meta.env.VITE_NITIFY_DOMAIN}/api/v1/signin`,
                {
                    username,
                    password,
                },
                {
                    withCredentials: true, // 👈 needed to store cookie from server
                }
                );

                if (data.jwtToken) {
                    navigate("/dashboard");
                } else {
                    alert("Invalid credentials");
                }
            } catch (err: any) {
                console.error("Login failed:", err);
                if (err.response) {
                    console.log("Server responded with:", err.response.status, err.response.data);
                    alert("Login failed: " + (err.response.data.message || "Invalid credentials"));
                } else if (err.request) {
                    console.log("No response received:", err.request);
                    alert("No response from server. Check network or CORS.");
                } else {
                    console.log("Error setting up request:", err.message);
                    alert("Error: " + err.message);
                }
            }
            };



    return ( 
    <>
    <div className={`font-display w-screen h-screen bg-gray-300 dark:bg-gray-950 flex items-center justify-center ${ispassword ? "hidden" : ""} overflow-hidden`}> 
        
        <div className='p-8 bg-gray-200 dark:bg-gray-900/20 rounded-2xl outline-1 outline-gray-400 dark:outline-gray-900 h-max w-100 sm:w-1/3 shadow-2xl'>
           
            <div className='flex flex-row items-center mb-2 text-gray-600  dark:text-gray-300'>
                <DocumentIcon size='6' />
                <span className='font-semibold text-2xl'>Nitify</span>
            </div>

            <div className='flex flex-col font-route ml-1 font-semibold text-2xl text-gray-600  dark:text-gray-300'> 
                <label className='text-black dark:text-gray-300 mt-4'>Sign in</label>
                <input type="text" ref={usernameRef} className='outline-none text-sm mt-5 focus:outline-none border-b-1 focus:border-gray-600 dark:focus:border-blue-600 focus:ring-0' placeholder='Email, phone or Skype'/>
            </div>

            <div className='mt-5 ml-1 text-xs text-gray-600  dark:text-gray-300 mb-4'>No Account ? <a href={`${import.meta.env.VITE_NITIFY_CLIENT_DOMAIN}/signup`} className='text-blue-400'>create one!</a> </div>
                <span className='text-xs text-blue-400 ml-1'>can't access your account ?</span>
            
          <div className='flex flex-row w-full justify-end gap-2 mt-10'>
              <Button text='Back' variant='secondary' onClick={() => navigate("/")} size='md' className='w-24'/>
              <Button text='Next' variant='primary' onClick={() => setIsPassword(true)} size='md' className='w-24'/>

          </div>
        </div>
        
    </div>
    {ispassword && <Form reference={passwordRef} Org='Nitify' title='Enter your password' password={true} btntil='Next' sub='Forgot your password ? ' addech={"sign up"} onClick={() => {
        console.log("next is clicked password")
        handleSignIn()
    }} placeholder='Enter your password' routeUser='signup'/>
    }
    </>
    )
}