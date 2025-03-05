import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { TiArrowLeft } from "react-icons/ti";
import Button from './Button'
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineSupport } from "react-icons/md";
import { TbShieldLockFilled } from "react-icons/tb";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";

const Search = () => {
  const [isOpen,setIsOpen] = useState(false);
  const ToggleButton = () => {
        setIsOpen(!isOpen)
  }
  

  
  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center' >
    <div className='w-[88.7%] h-[90vh] bg-white flex flex-col justify-between items-center'>
      <div className='flex gap-[44vw]'>
       <div className='flex text-[25px] font-[600] mb-12'>
         <TiArrowLeft />Destination</div>
          <div className='text-[30px]' onClick={ToggleButton}>{isOpen? < RxCross2/> :<FiAlignJustify/> }
          {isOpen ? (
          <div className="fixed left-0 top-0 ease-linear duration-400 w-[80%] h-[100vh] z-10 text-center  bg-white bg-opacity-20">
           <div className='h-[30%] w-full bg-black flex'> 
             <div className='w-full h-[60%] flex items-center gap-5 self-end mb-6 '>
              <div className='w-[100px] h-[100px] rounded-[50%] ml-4 bg-amber-900'>
                <img src="" alt="" />
              </div>
              <div className='text-white text-[20px] font-bold'><h3 className='mb-6'>Anamika Kumari</h3>
              <p>0000000000</p>
              </div>
             </div>
           </div>
           <div className='h-[70%] w-ful pt-14 pl-7 flex flex-col justify-between'>
            <div className='text-[17px] w-full h-[185px] font-bold flex flex-col justify-around '>
              <div className='flex gap-8 '><AiOutlineBars className='text-[20px]' />Your Ride</div>
              <div className='flex gap-8'><MdOutlineSupport />Support</div>
              <div className='flex gap-8'><TbShieldLockFilled />Private Policy</div>
              <div className='flex gap-8'><IoNewspaperOutline />Terms of Services</div>
              <div className='flex gap-8'><MdOutlineAssignmentInd />Profile Settings</div>
            </div>
            <div className='flex gap-8 text-[16px] text-gray-500 items-center pb-6'><PiSignOut className='text-[26px] text-black'/>Sign Out</div>
           </div>
          </div>
        ) : (
          <div className="fixed left-[-500px]">
            
          </div>
        )}
          </div>
      </div>
      <div className='w-[80%] ml-[-60px] mt-[-49vh] h-[73px] '>
        <p>Pick Up Date and Time</p>
        <div className='flex gap-8 mt-5 items-end'>
        <input type="date" placeholder='03-05-2025' />
        <input type="time" placeholder='06:00 hrs'  className=''/>
        </div>
      </div>
         
      <div className='w-full h-[140px] mt-[-44vh] border-[3px] border-gray-400 rounded-[5px] pr-4' >
       <div className='flex h-[50%]  text-[20px] items-center ml-3 gap-4'><div className='w-[10px] rounded-[50%] h-[10px] bg-[#00FF55]'></div> <input type="text" placeholder='Pick Up City'className=' h-full w-full border-b border-gray-300'  /></div> 
       <div className='flex h-[50%] text-[20px] items-center ml-3 gap-4'><div className='w-[10px] rounded-[50%] h-[10px] bg-[#FF0408]'></div> <input type="text" placeholder='Destination City' className=' h-full w-full'  /></div> 
      <div className='w-full flex justify-center'>
       <button className='w-[103px] h-[38px] bg-[#D9D9D9] rounded-[10px] text-[18px] mt-8 border-[2px] border-gray-400 hover:bg-gray-300'>Search</button>
       </div>
      </div>
        

    
        {/* <button className='w-full h-[43px] text-white bg-black rounded-[5px]'>Get Otp</button> */}
        <div className='w-[94.3%]'><Button text='Done' path="/pick/drop" /></div>
    </div>   
</div>
  )

}

export default Search
