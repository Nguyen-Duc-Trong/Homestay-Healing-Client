import React, {memo,useState} from 'react'
import icons from '../../../../ultils/icons.js'
import Button from '../../../../components/Button/Button.tsx'
import { useNavigate, Link } from 'react-router-dom'
import {formatVietnameseToString} from '../../../../ultils/Common/formatVietnameseToString.js'
import { setActiveItem } from '../../../../redux/slides/main1Slide.js'
import { useDispatch } from 'react-redux'

const { IoStarSharp, GoHeart, GoHeartFill} = icons
const indexs = [0,1,2,3]

const ItemDetail = ({images, address, attributes, star, description, title, users, id, Overviews}) => {
  const dispatch = useDispatch()
    const [isHoverIcon, setIsHoverIcon] = useState(false)
    const navigate = useNavigate()
    const handleStar = (star: any) => {
        let stars: JSX.Element[] = [];
        for (let i = 1; i <= +star; i++) {
            stars.push(<IoStarSharp className='star-item' size={17} />);
        }
        return stars;
    }
    const handleDetailPost = () => {
        dispatch(setActiveItem(0))
        navigate(`/chi-tiet/${formatVietnameseToString(title?.replaceAll('/', ''))}/${id}`, {
            state:{ images, address, attributes, star, description, title, users, id, Overviews }
        })

    }
    
    return (
        <div className='w-full flex mb-[10px] py-[15px]  border-t-[1px] border-solid border-[#E13427]'>
            <div onClick={handleDetailPost} className='flex cursor-pointer'>
                <div className='w-[40%] flex flex-wrap gap-[2px] items-center relative'>
                    {images?.length > 0 && images.filter((i:any, index:any) => indexs.some(i => i === index))?.map((i, index) => {
                        return (
                            <img key={index} src={i} alt="" className='w-[140px] h-[120px] object-cover' />
                        )
                    })}
                    <span className='bg-[#00000080] absolute bottom-[8px] left-[5px] text-[#fff] text-center w-[46px] h-[20px] rounded-[3px] text-[12px] px-[5px]'>{`${images?.length}`} ảnh</span>
                    <span
                        className='absolute text-[20px] text-[#fff] bottom-[8px] right-[5px] text-center text-[12px] px-[5px]'
                        onMouseEnter={() => setIsHoverIcon(true)}
                        onMouseLeave={() => setIsHoverIcon(false)}
                    >
                        {isHoverIcon ? <GoHeartFill color='#f73859' /> : <GoHeart />}
                    </span>
                </div>
                <div className='w-[60%] ml-[15px]'>
                    <h3 className='mb-[10px] text-[14px] text-[#e13427] pr-[20px] font-bold'>
                        <span className='inline-block text-[#ffd454] mr-[3px]'>
                            {handleStar(+star).length > 0 && handleStar(+star).map((starr, number) => {
                                return (
                                    <span key={number}>
                                        {starr}
                                    </span>
                                )
                            })}
                        </span>
                        {title}
                    </h3>
                    <div className='mb-[10px]'>
                        <span className='text-[16px] font-bold text-[#16c784] mr-[20px]'>{attributes?.price}</span>
                        <span className='text-[14px] mr-[20px]'>{attributes?.acreage}</span>
                        <span className='text-[14px] mr-[20px]'>{`${address.split(',')[address.split(',').length - 2]},${address.split(',')[address.split(',').length - 1]}`}</span>
                        <span className='text-[14px] mr-[20px] text-[#aaaaaa]'>{attributes?.published}</span>
                    </div>
                    <div className='mb-[10px] w-full h-[60px] text-ellipsis overflow-hidden'>
                        <p className='text-[#8a8d91] leading-[19px] text-[14px] '>
                            {description}
                        </p>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center '>
                            <img src="https://res.cloudinary.com/drorqx56b/image/upload/v1720143468/Homstay%20Healing/default-user_-_Copy_toudvy.png" alt="" className='w-[30px] h-[30px] object-cover rounded-full mr-[5px]  shadow-lg' />
                            <p>{users?.name}</p>
                        </div>
                        <div className='flex'>
                            <Button text={`Gọi ${users?.phone}`} onClick={undefined} className={'bg-[#1266dd] text-[#fff] text-[13px] py-[3px] px-[7px] mr-[5px] hover:border-[#1266dd]  hover:border-[1px] hover:border-solid hover:bg-[#fff] hover:text-[#1266dd] hover:no-underline'} icon={undefined} bgColor={undefined} textColor={undefined} px={undefined} />
                            <Button text={'Nhắn Zalo'} onClick={undefined} className={'bg-[#fff] text-[#1266dd] text-[13px] py-[3px] px-[7px] border-[1px] border-solid border-[#1266dd] hover:bg-[#1266dd] hover:text-[#fff] hover:no-underline'} icon={undefined} bgColor={undefined} textColor={undefined} px={undefined} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ItemDetail)
function dispatch(arg0: { payload: any; type: "main1/setActiveItem" }) {
    throw new Error('Function not implemented.')
}

