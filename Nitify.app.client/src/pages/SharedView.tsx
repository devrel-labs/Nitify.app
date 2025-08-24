import { useParams } from "react-router-dom"
import { Card } from "../components";
import { useEffect, useState } from "react";
import axios from "axios";


export const SharedView = () => {
    const { hash } = useParams();
    const [data, setdata] = useState<any>(null);
    const [error, seterror ] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
            
                const {data} = await axios.get(`${import.meta.env.VITE_NITIFY_DOMAIN}/api/v1/nitify/share/${hash}`)
                setdata(data.content);
            
            }catch(e) {
                seterror("invalid or link expired")
            }
             
            }
            
            getData()
            
        }, [hash])
        
        if (error) return <div className="text-red-500">{error}</div>;
        if (!data) return <div>Loading shared notes...</div>;

    return (
        <section className="custom-scroll bg-gray-400 dark:bg-gray-950 h-screen w-full rounded-t-lg md:rounded-tl-lg inset-shadow-sm inset-shadow-indigo-300/50 flex flex-row py-4 px-4 gap-4 flex-wrap overflow-y-auto scroll-smooth">

                        {data && data.map((note: any, index: number) => (
                            
                        <Card
                            key={index}
                            type={note.type}
                            title={note.title}
                            link={note.link}
                        />
                         
                        ))}
                       
                </section>
    )

}