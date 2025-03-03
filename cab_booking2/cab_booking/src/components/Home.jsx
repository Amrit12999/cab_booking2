import React from 'react'
import Button from './Button'
import '../App.css'

const Home = () => {
    return (
        <div className='w-[100%] h-[100vh] flex justify-center items-center' >
            <div className='w-[92%] h-[19.813rem] flex flex-col justify-between items-center'>
                <div className='w-full h-[92px] text-[38px] mb-[20px] font-bold text-center'>Enter Your Mobile Number</div>
                <div className='text-[16px]  h-[22px] text-[#000000]'>We will Send Your Confirmation Code</div>
                <input type="tel" placeholder='' maxLength={10} className='w-[100%] rounded-[10px] bg-[#AAA4A4] h-[53px] border-none' />
                {/* <button className='w-full h-[43px] text-white bg-black rounded-[5px]'>Get Otp</button> */}
                <Button text='Get OTP' path="/otp" />
            </div>
        </div>
    )
}

export default Home
