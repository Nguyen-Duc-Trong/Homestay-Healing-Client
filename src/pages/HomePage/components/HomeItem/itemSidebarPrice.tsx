import React, {memo} from 'react'
import icons from '../../../../ultils/icons'
import {useDispatch ,useSelector} from "react-redux"
import {setFilterPrice} from "../.././../../redux/slides/searchSlide"
import {setPostLimit} from '../.././../../redux/slides/postLimitSlide.js'
const {MdOutlineNavigateNext} = icons
const ItemSidebarPrice = ({content ,title}) => {
  const newData = content?.arr
//   console.log(newData);
  const {postLimit} = useSelector((state:any)=> state.postLimit)
  // console.log(postLimit);
  
  const dispatch = useDispatch();
    const setPrice =(min: any, max: any , code:any)=>{
        const obj ={Min : min , Max : max}
        dispatch(setFilterPrice(obj))
        dispatch(setPostLimit({...postLimit, priceCode : code }))

    }

    const handleSearch = () => {
      // const queryCodes = Object.entries(queries).filter((item:any) => item[0].includes('Code'))
      // let queryCodeObj = {}
      // queryCodes.forEach((item:any) => {queryCodeObj[item[0]] = item[1]})
      // console.log(queryCodes);
      // dispatch(setPostLimit(queryCodeObj))
    }
  return (
    <div className='p-[20px] mb-[20px] bg-[#fff] border border-[1px] border-solid border-[#dedede] rounded-[8px]'>
      <h3 className='text-[18px] font-semibold mb-[10px]'>{title}</h3>
      {
        newData?.map((item: any, index: any) => {
          return (
              <div  key={index} onClick={()=> setPrice(item.min , item.max ,item?.code)}  className="flex items-center">
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