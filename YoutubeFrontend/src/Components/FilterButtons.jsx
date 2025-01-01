import React, { useEffect, useState } from 'react'
import { FilterButtons } from '../utlies/FilterButtons.jsx'
import axios from 'axios';

import '../Styles/FilterButtons.css'

const FilterCategroy = (props) => {
    const [youtubeDetails, setYoutubeDetails] = useState([]);
    const [Token , setToken] = useState (localStorage.getItem ("token"))

    useEffect(() => {
        getDetails()
    }, []);


    async function getDetails() {

        try {
            const url = 'http://localhost:3000/'
            const response = await fetch (url , {
                method : "GET",
                headers : {
                    'Authorization' : Token
                }
            })

            const result = await response.json();
            setYoutubeDetails(result)
        } catch (err) {
            console.log(err);
        }

    }

    function handlefilterButtons (e) {
        
        if (e.target.innerHTML === "All") {
            props.setData (youtubeDetails)
            return;
        }else {
            const filterdetails = youtubeDetails.filter ((each) => each.genre.toLowerCase().includes(e.target.innerHTML.toLowerCase()))

            props.setData (filterdetails)
            return
        }
            
    }
    return (
        <>
          <div className='filterbuttonContainer flex justify-around flex-1 '>       
          {
                FilterButtons.map((cat , index) => (
                     <button key={index} onClick={(e) => handlefilterButtons(e)} className='filterbutton bg-[#292929] py-1  px-5 hover:bg-[#212121]  xs:border-2  rounded-xl xs:w-[100px] text-white '>{cat}</button>
                ))
            }
          </div>
        </>
    )
}






export default FilterCategroy
