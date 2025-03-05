import React from 'react'
import Button from './Button'
import { TiArrowLeft } from "react-icons/ti";
import { FaCheck } from "react-icons/fa6";

const PickDrop = () => {
    return (
        <div className='w-[100%] h-[100vh] flex justify-center items-center' >
            <div className='w-[88.7%] h-[95vh] bg-white flex flex-col justify-between items-center mt-10'>

                <div className='flex items-center self-start text-[25px] w-[22px] h-[22px] bg-[#e1dbdb] rounded-full font-[600] mb-12'>
                    <TiArrowLeft />
                </div>

                <div className='w-full h-[206px] mt-[-38%] border-[3px] border-none rounded-[5px] pr-4 ' >
                      <div className='w-[20px] rounded-[50%] h-[20px] bg-[#00FF55] mr-7 ml-3 inline-block '></div><span>From:</span>
                    <div className='flex h-[30%] ml-14  text-[20px] items-center mb-8'>

                        <input type="text" placeholder='Pick Up City' className=' h-full w-full border-b border-gray-300' />
                    </div>

                    <div className='w-[20px] rounded-[50%] h-[20px] bg-[#FF0408] mr-7 ml-3 inline-block'></div><span>To:</span>
                       <div className='h-[30%] ml-14 text-[20px] items-center gap-4'>
                         <input type="text" placeholder='Destination City' className='h-full w-full' />
                       </div>

                </div>

                <div className='w-full h-[42vh] mb-[-20%] mt-[-40px]'>
                    <div className='w-full h-[38px] flex justify-center gap-7 mb-4'>
                        <div className='w-[152px] h-full bg-black text-white rounded-[10px] text-center flex items-center justify-center'>One Way Taxi <span className='w-[20px] h-[20px] rounded-full flex items-center justify-center bg-[#00FF55] ml-1'><FaCheck className='text-[12px]' /></span></div>
                        <div className='w-[103px] h-full bg-[#D9D9D9] rounded-[10px] flex items-center justify-center text-[18px] font-bold border-[1px] border-gray-400'>Share</div>
                    </div>
                    <div className='h-[88%] flex flex-col justify-between'>
                        <div className='flex w-full h-[32%] bg-[#D3D3D3] rounded-[10px]'>
                            <div className='w-[30%] h-full flex items-center pl-2'>
                                <img className='w-full' src="../wagonR.png" alt="" />
                            </div>
                            <div className='w-[70%] h-full pl-4 pt-4 text-[13px]'>
                                <span className='mr-[55%] text-[16px] font-bold'>Mini</span><span className='text-[18px]'>3000</span>
                                <div>
                                    <p>4 Seat, 3 Bag Luggage</p>
                                    <p className='text-green-500'>Wagoner,Alto,Spresso etc.</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex w-full h-[32%] bg-[#EEEAEA] rounded-[10px]'>
                            <div className='w-[30%] h-full  flex items-center'>
                                <img className='w-full pl-2' src="../wagonR.png" alt="" />
                            </div>
                            <div className='w-[70%] h-full pl-4 pt-4 text-[13px]'>
                                <span className='mr-[48%] text-[16px] font-bold'>Sedan</span><span className='text-[18px]'>3000</span>
                                <div>
                                    <p>4 Seat, 4 Bag Luggage</p>
                                    <p className='text-green-500'>Desire,Xcent,Ciaz etc.</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex w-full h-[32%] bg-[#EEEAEA] rounded-[10px]'>
                            <div className='w-[30%] h-full  flex items-center pl-2'>
                                <img className='w-full' src="../wagonR.png" alt="car image" />
                            </div>
                            <div className='w-[70%] h-full pl-4 pt-4 text-[13px]'>
                                <span className='mr-[55%] text-[16px] font-bold'>SUV</span><span className='text-[18px]'>3000</span>
                                <div>
                                    <p>6 Seat, 5 Bag Luggage</p>
                                    <p className='text-green-500'>Ertiga,Scorpio etc.</p>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>


                {/* <button className='w-full h-[43px] text-white bg-black rounded-[5px]'>Get Otp</button> */}
                <div className='w-[94.3%] font-bold'><Button  text='Review Your Ride' path="/pick/drop" /></div>
            </div>
        </div>
    )
}

export default PickDrop
