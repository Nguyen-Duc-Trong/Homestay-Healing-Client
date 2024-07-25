/* eslint-disable jsx-a11y/alt-text */

import React,{useEffect, useState} from 'react'
import {useNavigate, Link} from "react-router-dom"
import { FaChevronRight } from "react-icons/fa";
import {apiGetBookRoom, apiAddBookRoom, apiDeleteBookRoom} from "../../service/bookRoom"
import { useSelector, useDispatch } from 'react-redux';
import { apiGetPosts } from '../../service/post';
import {setActiveItem, setTotalCartRoom} from '../../redux/slides/main1Slide'
import icons from '../../ultils/icons';
import Button from '../../components/Button/Button.tsx';
import PopupBookRoom from './component/PopupBookRoom.tsx';
import { formatVietnameseToString } from '../../ultils/Common/formatVietnameseToString.js';


const {FaTrashCan, PiShoppingCart} = icons

const BookRoomPage = () => {
  const navigate = useNavigate()
  const [listFavorite, setListFavorite] = useState<string[]>([])
  const {id} = useSelector((state:any) => state.auth)
  const [dataPost, setDataPost] = useState([])
  const [newFilteredData, setFilteredData] = useState([])
  const [isShowBookRoom, setIsShowBookRoom] = useState(false);
  const [item, setItem] = useState({});
  const dispatch = useDispatch()

  const getDataBookRoom = async () => {
    try {
      const response = await apiGetBookRoom({userId: id})
      const arr = response?.data?.response?.bookRoomId
      const newArr = JSON.parse(arr)
      setListFavorite(newArr)
    } catch (error) {
      console.log(error); 
    }
  }
  const getPost = async () =>{
    const response = await apiGetPosts()
    setDataPost(response?.data?.response)
  }
  useEffect(() => {
    getDataBookRoom()
    getPost()
    dispatch(setTotalCartRoom(newFilteredData))
  }, [])
// console.log(newFilteredData);

  useEffect(() => {
    const filteredData = dataPost?.filter((item: any) => listFavorite?.includes(item?.id));
    setFilteredData(filteredData)
    dispatch(setTotalCartRoom(newFilteredData))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listFavorite, dataPost]);
  
const handleDelete = async (idPost:any)=>{
  const response = apiDeleteBookRoom({userId :id, postId : idPost })
  getDataBookRoom()
}

const handleShowBookRoom = (item:any) => {
  setItem(item)
  setIsShowBookRoom(true);
};
const handleChange = (item:any) => {
  const { address, attributes, star, description, title, users, id, Overviews } = item
  const images = JSON.parse( item?.images?.image)
  // console.log(images);
  navigate(`/chi-tiet/${formatVietnameseToString(item?.title?.replaceAll('/', ''))}/${id}`, {
    state:{images,  address, attributes, star, description, title, users, id, Overviews }
})
  dispatch(setActiveItem(0))
}   

  return (
    <div className='w-full'>
      {/* <h1 className='text-[2rem] mb-[5px] leading-[1.2rem] font-[600]'>
        Phòng đã lưu
      </h1> */}
      <h1 className='text-[25px] font-bold my-[20px] cursor-pointer'>Số phòng đã lưu: {newFilteredData ? newFilteredData?.length : 0} </h1>
      <div className="w-[100%] flex mb-[40px] shadow-lg">
        <div className={`w-full bg-white rounded-lg ${listFavorite.length > 0 ? "" : "h-[250px]"}`}>
          {listFavorite.length > 0 ?
            <div className="mx-[15px]">
              {
                newFilteredData?.map((item: any, index: any) => {
                  return (
                    <div key={index} className="flex my-[15px] justify-between border-b-[1px] border-gray-500 border-dashed pb-[15px] cursor-pointer">
                      <div onClick={() => handleChange(item)} className='flex'>
                        <div className='w-[200px] h-[150px] mr-[10px]'>
                          <img src={JSON.parse(item?.images?.image)[1]} className='w-full h-full object-cover' />
                        </div>
                        <div className='w-[600px] mr-[10px]'>
                          <p className='text-[20px] text-[#ff0000] font-bold pr-[30px] mb-[10px]'>{item?.title}</p>
                          <p className='text-[16px] mb-[10px]'>{item?.address}</p>
                          <p>
                            Giá: <span className='text-[16px] text-[#16c784] font-bold mr-[20px]'>{item?.attributes?.price}</span>
                            Diện tích: <span>{item?.attributes?.acreage}</span>
                          </p>
                        </div>
                      </div>
                      <div className='w-[20%] pt-[30px]'>
                        <Button text={'Đặt Phòng'} onClick={()=> handleShowBookRoom(item)} className={'w-full text-center bg-[#febb02] hover:bg-yellow-600 text-[#000000] font-bold hover:no-underline mb-[10px]'} icon={<PiShoppingCart/>} bgColor={undefined} textColor={undefined} px={undefined} />
                        <Button text={undefined} onClick={() => handleDelete(item?.id)} className={'w-full text-center bg-red-500 hover:bg-red-700'} icon={<FaTrashCan />} bgColor={undefined} textColor={undefined} px={undefined} />
                      </div>
                    </div>
                  )
                })

              }
            </div>
            :
            <div className="">
              <img className='w-[100%] h-[100%] boder-none'  src={`https://res.cloudinary.com/drorqx56b/image/upload/v1720388554/Homstay%20Healing/Capture_qxtuiy.png`} alt="Danh sách trống " />
            </div>
          }
        </div>
      </div>
      {isShowBookRoom && <PopupBookRoom item={item} setIsShowBookRoom={setIsShowBookRoom} />}

    </div>
  )
}

export default BookRoomPage;

