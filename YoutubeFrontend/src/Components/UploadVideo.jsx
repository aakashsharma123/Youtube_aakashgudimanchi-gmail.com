import React, { useEffect, useState } from 'react';
import '../Styles/UploadVideo.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { ErrorMessage, successMessage } from '../ErrorHandle/HandleResponse';


// clodynary upload_presets name is youtube-clone;
// endpoint for sending it to cloudynary "https://api.cloudinary.com/v1_1/cloudName/image/upload"
// my cloudynary name is "dwao9a3pv"

const UploadVideo = () => {
    const [Token , setToken] = useState(localStorage.getItem("token"))
    const [imageIcon , setImageIcon ] = useState("");
    const [ video_url , setvideo_url ] = useState("");
    const [description , setdescription ] = useState("");
    const [category , setcategory ] = useState("");

    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post ('http://localhost:3000/video' , {
                imageIcon , video_url , description , category
            } , {
                headers : {
                    "Authorization" : Token
                }
            })

            if (response.status === 201) {
                console.log(response);
                
                successMessage("video uploaded successfully ")
            }
        }catch (err) {
            // console.log(err);
            
            ErrorMessage("video not uploaded successfully")
        }
    }

    console.log(imageIcon , video_url , description , category);
    

    

    return (
       
            <div className="video-upload-container grid grid-cols-1 place-items-center w-full h-full">
                
                <div className="upload-now grid grid-cols-1 place-items-center w-full h-full" >
                    <form onSubmit={(e) => handlesubmit(e)} className='grid grid-cols-1 place-items-center w-full h-full' >

                        <div className='flex items-center justify-center gap-4 text-2xl'>
                            <img src='youtube_logo_icon_168737.ico' alt="" width={50} height={50} />
                            <span className='font-bold'>Upload Video</span>
                        </div>

                        <div className='flex flex-col gap-5 p-5 justify-start w-full h-full'>
                    
                            <input type="text" className='px-5 w-full py-4 bg-[#292929] border border-[#292929]' onChange={(e) => setImageIcon(e.target.value)} placeholder='image Url' value={imageIcon} name='image' />
                            <input type="text" className='px-5 w-full py-4 bg-[#292929] border border-[#292929]'onChange={(e) => setvideo_url(e.target.value)} placeholder='Video Url'  required name='video_url' />
                            <input type="text" className='px-5 w-full py-4 bg-[#292929] border border-[#292929]'onChange={(e) => setcategory(e.target.value)}  required name='category' />
                            <textarea   className='px-5 w-full py-4 resize-none bg-[#292929] border border-[#292929]' onChange={(e) => setdescription(e.target.value)} placeholder='Description'  name='description' />
                        </div>

                        

                        <div className='flex justify-center mt-2 gap-5'>
                            <button type="submit" className='px-5 py-2 border-2 border-white rounded-lg hover:bg-[#292929]'>Upload</button>
                            <button type="button" className='px-5 py-2 border-2 border-white rounded-lg hover:bg-[#292929]'>Home</button>
                        </div>
                    </form>
                </div>
                <ToastContainer/>
            </div>
          
    
    );
};

export default UploadVideo;


