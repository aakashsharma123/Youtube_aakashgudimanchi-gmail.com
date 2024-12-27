import React, { useEffect, useState } from 'react'
import { FilterButtons } from '../utlies/FilterButtons.jsx'
import axios from 'axios';
import { data } from 'react-router-dom';

const FilterCategroy = (props) => {
    const [youtubeDetails, setYoutubeDetails] = useState([]);


    useEffect(() => {
        getDetails()
    }, []);


    async function getDetails() {

        try {
            const data = await axios.get('http://localhost:3000/');
            setYoutubeDetails(data.data)
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
            {
                FilterButtons.map((cat) => (
                    <button onClick={(e) => handlefilterButtons(e)} className='bg-[#292929] py-1  px-5 hover:bg-[#212121] rounded-xl text-white '>{cat}</button>
                ))



            }
        </>
    )
}






export default FilterCategroy
