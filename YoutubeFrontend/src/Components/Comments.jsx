import React from 'react'

const Comments = () => {
    return (
        <div>
            <div className="container">

                <div className="first-container bg-[#292929] border-none rounded-lg p-5 mt-2 ml-2 ">
                    <span className='text-xl'>{filteredData.views}</span>
                    <span className='text-xl ml-2'>{filteredData.time}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis pariatur nisi facilis eaque sequi fuga tempore delectus temporibus eum ducimus quam itaque rerum autem, ullam velit minus tempora. Error, ipsam?...More</p>
                </div>

                <div className="secound-container border-2 border-black m-7">
                    <div className="input-text bg-[#292929]">
                        <input type="text" required />
                        <button>Comment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments
