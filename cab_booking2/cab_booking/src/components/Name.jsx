import React from 'react'
import Button from './Button'
import '../App.css'

const Name = () => {
    return (

        <div className='w-[100%]  h-[100vh] flex justify-center items-center' >
            <div className='w-[88.7%] h-[268px] flex flex-col justify-between items-center'>
                <div className='w-[100%] h-[86px] text-[35px] font-bold text-center '>Please Provide Your Name</div>

                <input type="text" placeholder='Enter Your Good Name' maxLength={30} className='w-[90%] rounded-[4px] bg-[#AAA4A4] h-[45px] border-none pl-5' />
                {/* <button className='w-full h-[43px] text-white bg-black rounded-[5px]'>Get Otp</button> */}
                <div className='w-[94.3%]'><Button text='Done' path="/search" /></div>
            </div>
        </div>
    )
}

export default Name
