import React, {memo} from 'react'

const InputSearch = ({IconBefore, IconAfter, text, fontWeight, defaultText}) => {
  return (
    <div className='bg-[#fff] cursor-pointer mx-[3px] rounded-[5px] h-[35px] w-full py-[10px] pr-[30px] pl-[10px] inline-flex items-center justify-between text-[#777] '>
          <div className='flex items-center'>
            <span className='mr-[5px]'> {IconBefore}</span>
            <span className={`${fontWeight && 'font-bold text-[#000000]'} ${text ? 'font-bold text-[#000000]': 'text-[#777777]'}`}>{text || defaultText}</span>
          </div>
        {IconAfter}
    </div>
  )
}

export default memo(InputSearch)