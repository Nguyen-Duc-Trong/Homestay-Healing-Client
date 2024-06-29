import React, {memo} from 'react'

const ProminentAreaContainer = ({name, img}) => {
  return (
    <div className='w-[220px] shadow-[0_0_10px_1px_rgb(0,0,0,0.1)] rounded-[10px] text-[#1266DD] hover:text-[#FF6600] hover:shadow-[0_0_10px_10px_rgb(0,0,0,0.05)]'>
        <img 
        src={img}
        alt={name} 
        className='w-full h-[110px] object-cover rounded-t-[10px]'
        />
        <span className='flex justify-center items-center py-[12px] px-[10px] rounded-b-[10px] bg-[#fff] text-[14px]  font-bold'>{name}</span>
    </div>
  )
}

export default memo(ProminentAreaContainer)