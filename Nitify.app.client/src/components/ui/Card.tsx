import { useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import { DocumentIcon, TrashIcon, ShareIcon } from "../../icons";
import axios from "axios";

interface CardProps {
    type: string;
    link: string;
    title: string;
}

const Card = ({type, link, title }: CardProps) => {

    const {theme} = useTheme();

    const handleDeleteNiti = async () => {
        await axios.delete(`${import.meta.env.VITE_NITIFY_DOMAIN}/api/v1/content`, {
            data: {
                title: title
            },
            headers: {
                "Content-Type" : "application/json"
            },
            withCredentials: true
        })
    }
    
     useEffect(() => {
        if (type?.toLowerCase() === "twitter" || link.includes("x.com")) {
        // Twitter embed script loader
        const existingScript = document.querySelector("script[src='https://platform.twitter.com/widgets.js']");
        if (!existingScript) {
            const script = document.createElement("script");
            script.src = "https://platform.twitter.com/widgets.js";
            script.async = true;
            document.body.appendChild(script);
        } else {
            // If script exists, re-process tweets
            // @ts-ignore
            if (window.twttr?.widgets) {
            // @ts-ignore
            window.twttr.widgets.load();
            }
        }
        }
    }, [link, type, theme]);

    return (
        <div className="font-display h-min w-full lg:w-max lg:h-max p-6 bg-gray-200 dark:hover:bg-gray-800/70 hover:bg-gray-200/80 rounded-lg border-r border-b border-gray-400 text-black font-medium dark:border-gray-700 dark:bg-gray-900 dark:text-white overflow-hidden">
            
            <div className="flex flex-row items-center justify-between mb-2">
                
                <div className="flex flex-row items-center justify-center p-0">
                    <DocumentIcon size="4"/>
                    <span>{type || ""}</span>
                </div>
                
                <div className="flex flex-row items-center gap-2 justify-center p-0">
                    <ShareIcon/>
                    <div className="cursor-pointer" onClick={() => handleDeleteNiti()}>

                    <TrashIcon size="4"/>
                    </div>
                </div>
            
            </div>

        <p>{title}</p>
        {
            type?.toLowerCase() === "youtube" && <iframe width="100%" className="rounded-3xl py-2" height="" src={link.replace("watch?v=", "embed/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        }
        {type?.toLowerCase() === "twitter" && (
            // <blockquote className="twitter-tweet" data-theme="dark">
            //     <a href={link.replace(/^https:\/\/x\.com/, "https://twitter.com")}></a>
            // </blockquote>
            <blockquote className="twitter-tweet" data-theme={`${theme}`}><a href={link.replace("https://x.com", "https://twitter.com")}></a></blockquote>
        )}
                {type?.toLowerCase() !== "twitter" && type !== "youtube" && (
                    <>
                        {link.includes("youtube") && (
                        <iframe
                            width="100%"
                            className="rounded-3xl py-2"
                            height=""
                            src={link.replace("watch?v=", "embed/")}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        )}

                        {link.includes("x.com") && (
                        <blockquote className="twitter-tweet" data-theme={theme}>
                            <a href={link.replace("https://x.com", "https://twitter.com")}></a>
                        </blockquote>
                        )}

                        {!link.includes("x.com") && !link.includes("youtube") && (
                        <a href={link}>{link}</a>
                        )}
                    </>
        )}


        </div>
    )
}


export default Card;
