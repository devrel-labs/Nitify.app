import {useEffect, useState } from "react"
import {Card, SideBarComponent, AddContentModal, Button} from "../components"
import { ThemeToggle } from "../Essentials/ThemeToggle"
import { AddIcon, CloseIcon, ShareIcon, TrashIcon } from "../icons"
import axios from "axios"




// export default function Dashboard() {

//     const AddContent = () => {
        
//     }
  
//   return (
//     <div className="font-display min-h-screen min-w-screen text-white flex flex-col overflow-hidden lg:flex-row">
      
//      <SideBarComponent />

//   <div className="w-full lg:w-[80vw] min-h-screen grid grid-rows-[min-content_1fr] bg-gray-300 dark:bg-gray-900">     
//     <div className=" h-20 flex flex-row py-2 items-center justify-between px-4">
//         <span className="lg:text-2xl text-black dark:text-white font-semibold">All Notes</span>
//         <div className="flex flex-row">
          
//           {/* Theme Toggle Button */}
//           <ThemeToggle />
          
//           {/* Button1 */}
//            <Button
//             className="flex items-center px-3"
//             variant="secondary"
//             size="md"
//             text="Share Brain"
//             onClick={() => console.log("Share clicked")}
//             StartIcon={<ShareIcon size="md" />}
//            />
        
//         {/* Button2 */}
//           <Button
//             className="flex items-center"
//             variant="primary"
//             size="md"
//             text="Add Content"
//             onClick={() => console.log("Add clicked")}
//             StartIcon={<AddIcon size="md" />}
//           />
        
//         </div>
//       </div>

//     {/* Card Grid */}
//       <div className="w-full md:w-[80vw] grid grid-row gap-5 justify-center md:grid-cols-3 p-6" style={{ gridTemplateRows: 'min-content 1fr' }}>

//             <Card
//                 type="youtube"
//                 title="My first video"
//                 link="https://www.youtube.com/watch?v=PXcYBhvYc30"
//             />
//             <Card
//                 type="twitter"
//                 title="Meme Material"
//                 link="https://x.com/meemtales/status/1943381822878159339"
//             />
//         </div>


// </div>

// </div>

//   )
// }

const Dashboard = () => {

    const [isModalOpen, setisModalOpen] = useState(false)
    const [isShareModalOpen, setisShareModalOpen] = useState(false)
    const [usernotes, setNotes] = useState<any>()
    const [sharelink, setShareLink] = useState<string | null>(null);


    // const getNotes = async () => {
    //     const notes = await axios.get(`${import.meta.env.VITE_NITIFY_DOMAIN}/api/v1/content`, {
    //         headers: {
    //             Authorization: `${localStorage.getItem('token')}`
    //         }
    //     })

    //     setNotes(notes.data)
    // }
    
   
    //  window.location.reload()
        

    const handleShareButton = async () => {
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_NITIFY_DOMAIN}/api/v1/nitify/share`,
                 {share: true},
                 {withCredentials: true}
                );
            
            const realendpoint = `${import.meta.env.VITE_NITIFY_CLIENT_DOMAIN}/public/nitify/share/${data.linkHashId}`
            
            setShareLink(realendpoint)
            alert("shareableLink: "+ realendpoint)
        }catch(err) {
            console.error("failed to generate share link: ", err)
        }

    }

    const handleDeletebutton = async () => {
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_NITIFY_DOMAIN}/api/v1/nitify/share`, 
                 { share: false},
                 { withCredentials: true })

            setShareLink(data.message)
        }catch(err) {
            console.error("failed to delete share link: ", err)
        }
    }


    useEffect(() => {
        const getNotes = async () => {
            try {
            const response = await axios.get(`${import.meta.env.VITE_NITIFY_DOMAIN}/api/v1/content`, {
                withCredentials: true, // send cookies (JWT)
            });
            setNotes(response.data.userContents);
            } catch (err) {
            console.error("Failed to fetch notes:", err);
            }
        };


        // Call initially once
        getNotes();

        const intervalId = setInterval(getNotes, 2000); // every 2 seconds

        return () => clearInterval(intervalId); // cleanup on unmount
        }, []);




    return (
        <div>
                   
            <AddContentModal open={isModalOpen} onClose={() => {
                setisModalOpen((prev) => (!prev))
            }}/>

        <div className="font-display h-screen flex flex-col md:flex-row lg:h-screen bg-gray-200 dark:bg-gray-900 overflow-hidden">
            
            <SideBarComponent />
           
            <div className="flex flex-col w-full">

                <section className="p-4 w-full flex justify-between items-center bg-gray-200 dark:bg-gray-900 z-20">
                    <div><span className="text-xl text-black dark:text-white z-50">All Notes</span></div>
                    <div className="cursor-pointer flex justify-center items-center flex-row">
                        
                        {/* Theme Toggler */}
                            <ThemeToggle  disabled={false}/>
                        {/* Sharing Icon */}

                              <Button
                                    className="flex items-center px-3"
                                    variant="primary"
                                    size="md"
                                    text="Share Niti"
                                    onClick={() => {
                                        handleShareButton()
                                        setisShareModalOpen(true)
                                    }}
                                    StartIcon={<ShareIcon size="md" />}
                                    disabled={true}
                                />
        
                                {/* Add Content Icon */}
                                <Button
                                    className="flex items-center"
                                    variant="primary"
                                    size="md"
                                    text="Add Content"
                                    onClick={() => setisModalOpen((prev) => (!prev))}
                                    StartIcon={<AddIcon size="md" />}
                                    disabled={true}
                                />
                    </div>
               
                </section>
               
                {/* <section className="bg-gray-400 dark:bg-gray-950 h-screen  md:h-full w-full rounded-t-lg md:rounded-tl-lg inset-shadow-sm inset-shadow-indigo-300/50 flex flex-row py-4 px-4 gap-4 flex-wrap overflow-y-scroll scroll-smooth"> */}
                            
                <section className="custom-scroll bg-gray-400 dark:bg-gray-950 h-screen md:h-full w-full rounded-t-lg md:rounded-tl-lg inset-shadow-sm inset-shadow-indigo-300/50 flex flex-row py-4 px-4 gap-4 flex-wrap overflow-y-auto scroll-smooth" >

                   
                        {sharelink && isShareModalOpen && (
                        <div className="h-min-content w-1/3 fixed mt-30 z-30 flex justify-center items-center bg-gray-300/90 dark:bg-gray-900/90 ml-70 p-8 text-2xl flex-col text-black dark:text-white rounded-2xl">
                            <div className="w-full flex justify-end mb-5 cursor-pointer">
                                <button onClick={() => setisShareModalOpen(false)}>
                                    <CloseIcon/>
                                </button>
                            </div>
                        Shareable Link:{" "} 
                       
                            {
                            sharelink !== "Link deleted" && <div className="flex flex-row flex-wrap items-center justify-center gap-5"> <a
                            href={sharelink}
                            target="_blank"
                            className="text-blue-500 underline break-all mt-10 flex flex-wrap w-100"
                            >
                            {sharelink}
                        </a>        
                            <div onClick={() => handleDeletebutton()}><TrashIcon size="6" /></div>
                        
                            </div>
                           }
                    </div>
                        )}

                        {Array.isArray(usernotes) && usernotes.map((note: any, index: number) => (
                            
                        <Card
                            key={index}
                            type={note.type}
                            title={note.title}
                            link={note.link}
                        />
                         
                        ))}
                         
                        {/* <Card
                            type="twitter"
                            title="Meme Material"
                            link="https://x.com/meemtales/status/1943381822878159339"
                        />
                            <Card
                                type="twitter"
                                title="Meme Material"
                                link="https://x.com/meemtales/status/1943381822878159339"
                            />
                        <Card
                            type="youtube"
                            title="My first video"
                            link="https://www.youtube.com/watch?v=PXcYBhvYc30"
                        />
                        <Card
                            type="twitter"
                            title="Meme Material"
                            link="https://x.com/meemtales/status/1943381822878159339"
                        />
                        <Card
                            type="youtube"
                            title="My first video"
                            link="https://www.youtube.com/watch?v=PXcYBhvYc30"
                        /> */}
                        
                </section>
            </div>
        </div>
        </div>  
    )

}





export default Dashboard
