import React, {memo} from 'react'
import icons from '../../../../ultils/icons'
import { Link } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { setActiveItem } from '../../../../redux/slides/main1Slide'
const {MdOutlineNavigateNext} = icons

const ItemSidebar = ({content ,title}) => {
  const newData = content?.arr
  const checkLink = (index:any) =>{
    if(index === 0){
      return "/rentingroom"
    }else if(index === 1){
      return "/rentalhouse"
    }else if(index === 2){
      return "/apartmentRental"
    }
  }
  const dispatch = useDispatch();
  const handleHeaderActive = (id: number) => {
    dispatch(setActiveItem(id));
};
// console.log(newData);

  return (
    <div className='p-[20px] mb-[20px] bg-[#fff] border border-[1px] border-solid border-[#dedede] rounded-[8px]'>
      <h3 className='text-[18px] font-semibold mb-[10px]'>{title}</h3>
      {
        
        newData?.map((item: any, index: any) => {
          return (
            <Link to={`${checkLink(index)}`} key={index} className='flex items-center text-[14px] text-[#333] py-[5px] border-dashed border-b-[1px] '>
              <div className="flex items-center" onClick={() => handleHeaderActive(item.id + 1)}>
                <span className='pr-[10px]'><MdOutlineNavigateNext /></span>
                <p className='cursor-pointer text-[#333] hover:text-[#f60]'>{item.value}</p>
              </div>
            </Link>
          )
        })
      }
    </div>  
  )
}

export default memo(ItemSidebar)