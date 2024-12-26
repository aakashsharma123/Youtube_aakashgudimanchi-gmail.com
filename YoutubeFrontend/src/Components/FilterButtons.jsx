import React, { useEffect, useState } from 'react'
import { FilterButtons } from '../utlies/FilterButtons.jsx'
import axios from 'axios';
import { data } from 'react-router-dom';

const FilterCategroy = (props) => {
    
console.log(props);

      return (  
        <>
            {
                FilterButtons.map ((cat) =>(
                    <button onClick={() => handlefilterButtons(cat)} className='bg-[#292929] py-1  px-5 hover:bg-[#212121] rounded-xl text-white '>{cat}</button>
                ))
    
              
    
            }
        </>
      )
    }

    
  



export default FilterCategroy
