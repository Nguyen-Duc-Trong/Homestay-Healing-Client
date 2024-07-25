import React from 'react'
import { text } from '../../../ultils/dataContact.js'
import Button from "../../../components/Button/Button.tsx"
const Contact = () => {
  return (
    <div className='bg-white rounded-md w-[100%] h-[90%] overflow-auto pb-[100px] shadow-md p-[20px] flex flex-col justify-center items-center gap-6'>
    <img
        src={text.image}
        alt="thumbnal"
        className='w-[100%] h-[100%] x object-contain'
    />
    <p>{text.content}</p>
    <div className='flex items-center justify-around w-full'>
        {text.contacts.map((item, index) => {
            return (
                <div key={index} className='flex flex-col items-center justify-center'>
                    <span className='text-orange-500 font-semibold'>{item.text}</span>
                    <span className='text-blue-900 text-[24px] font-semibold'>{item.phone}</span>
                    <span className='text-blue-900 text-[24px] font-semibold'>{item.zalo}</span>
                </div>
            )
        })}
    </div>
    <Button
        text='Gửi liên hệ'
        bgColor='bg-blue-600'
        textColor='text-white'
        px='px-6' onClick={undefined} className={undefined} icon={undefined}    />
</div>
  )
}

export default Contact