import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Button = ({ text, path }) => {
    const navigate = useNavigate();
    function clickHandle() {
        navigate(path)
    }
    return (
        <>
            <button onClick={clickHandle} className='w-full h-[43px] text-white bg-black rounded-[5px] hover:bg-gray-800'>{text}</button>
        </>
    )
}

export default Button
