import React from 'react'
import icons from '../../../ultils/icons'

const {MdCancel} = icons
const PopupShowQR = ({setIsShowQR}) => {
   
    return (
        <div onClick={() => { setIsShowQR(false) }} className='fixed top-[0px] left-0 right-0 h-screen w-[100%] z-[1000] bg-[#00000080] flex justify-center'>
            <div onClick={(e) => {
                e.stopPropagation()
                setIsShowQR(true)
                }} className='w-[50%] m-auto relative'>
                <div onClick={(e) => {
                    e.stopPropagation()
                    setIsShowQR(false)
                }} className='absolute top-[10px] left-[75px] cursor-pointer '>
                    <MdCancel size={40} color='#ffffff' />
                </div>
                <span className='w-[] text-[18px] font-bold'></span>
                <div className='w-[100%] flex justify-center h-fit m-auto'>
                    <img className='h-[500px]' src="https://res.cloudinary.com/drorqx56b/image/upload/v1720523982/Homstay%20Healing/56d38169-7278-4a41-a540-d0bc6c33ff4e.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default PopupShowQR