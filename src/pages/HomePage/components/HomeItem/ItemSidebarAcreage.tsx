import React, {memo} from 'react'
import icons from '../../../../ultils/icons'
import {setFilterAcreage} from "../.././../../redux/slides/searchSlide"
import {useDispatch ,useSelector} from "react-redux"
import {setPostLimit} from '../.././../../redux/slides/postLimitSlide.js'
const {MdOutlineNavigateNext} = icons

const ItemSidebarAcreage = ({content ,title}) => {
  const {postLimit} = useSelector((state:any)=> state.postLimit)
  const newData = content?.arr
  const dispatch = useDispatch();
  const setPrice =(min: any, max: any ,code:any)=>{
    const obj ={Min : min , Max : max}
    dispatch(setFilterAcreage(obj))
    dispatch(setPostLimit({...postLimit, acreageCode: code }))
  }
    return (
        <div className='p-[20px] mb-[20px] bg-[#fff] border border-[1px] border-solid border-[#dedede] rounded-[8px]'>
          <h3 className='text-[18px] font-semibold mb-[10px]'>{title}</h3>
          {
            
            newData?.map((item: any, index: any) => {
              return (
                  <div key={index} onClick={()=> setPrice(item.min , item.max ,item.code)}  className="flex items-center">
                    <span className='pr-[10px]'><MdOutlineNavigateNext /></span>
                    <p className='cursor-pointer text-[#333] hover:text-[#f60]'>{item.value}</p>
                  </div>
              )
            })
          }
        </div>  
    )
    }

export default memo(ItemSidebarAcreage)