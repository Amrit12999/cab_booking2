import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'


const Otp = () => {
    return (
        <div className='w-[100%]  h-[100vh] flex justify-center items-center'>
            <div className='w-[92%]  h-[30.813rem] flex flex-col justify-between items-center'>
                <div className='w-full h-[92px] text-[38px] font-bold text-center mb-[20px]'>Enter Code Sent To Your Phone</div>
                <div className='text-[18px]  h-[22px] text-[#000000]'>We Send it to the number +91 0000000000</div>
                <div className='w-[100%] h-[42px] flex justify-around'>
                    <input type="tel" maxLength={1} className='w-[12.5%] rounded-[5px] bg-[#71B8BC] h-[42px] border-none pl-4 text-2xl' />
                    <input type="tel" maxLength={1} className='w-[12.5%] rounded-[5px] bg-[#71B8BC] h-[42px] border-none pl-4 text-2xl' />
                    <input type="tel" maxLength={1} className='w-[12.5%] rounded-[5px] bg-[#71B8BC] h-[42px] border-none pl-4 text-2xl' />
                    <input type="tel" maxLength={1} className='w-[12.5%] rounded-[5px] bg-[#71B8BC] h-[42px] border-none pl-4 text-2xl' />
                    <input type="tel" maxLength={1} className='w-[12.5%] rounded-[5px] bg-[#71B8BC] h-[42px] border-none pl-4 text-2xl' />
                    <input type="tel" maxLength={1} className='w-[12.5%] rounded-[5px] bg-[#71B8BC] h-[42px] border-none pl-4 text-2xl' />
                </div>

                {/* <button className='w-full h-[43px] text-white bg-black rounded-[5px]'>Get Otp</button> */}
                <Button text='Enter' path="/name" />
                <button className='w-[100px] h-[35px] bg-[#1CE5FF] self-end text-white hover:bg-[hsl(189,51%,54%)]'>Resend Code</button>
                <div className='w-[83%] h-[20%]  text-[16px]' >By creating Your Passcode you agree with our <Link className='text-[#489AFF]' to="">Terms & Condition</Link> and <Link className='text-[#489AFF]' to="">Private policy</Link></div>
            </div>
        </div>
    )
}

export default Otp
