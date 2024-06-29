import React, {memo} from 'react'
import icons from '../../../../ultils/icons'
import {useDispatch} from "react-redux"
import {setFilterPrice} from "../.././../../redux/slides/searchSlide"
const {MdOutlineNavigateNext} = icons
const ItemSidebarPrice = ({content ,title}) => {
  const newData = content?.arr
//   console.log(newData);
  
  const dispatch = useDispatch();
    const setPrice =(min: any, max: any)=>{
        const obj ={Min : min , Max : max}
        dispatch(setFilterPrice(obj))
    }
  return (
    <div className='p-[20px] mb-[20px] bg-[#fff] border border-[1px] border-solid border-[#dedede] rounded-[8px]'>
      <h3 className='text-[18px] font-semibold mb-[10px]'>{title}</h3>
      {
        
        newData?.map((item: any, index: any) => {
          return (
              <div key={index} onClick={()=> setPrice(item.min , item.max)}  className="flex items-center">
                <span className='pr-[10px]'><MdOutlineNavigateNext /></span>
                <p className='cursor-pointer text-[#333] hover:text-[#f60]'>{item.value}</p>
              </div>
          )
        })
      }
    </div>  
  )
}

export default memo(ItemSidebarPrice)