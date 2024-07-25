import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import icons from '../../ultils/icons'
import SlideDetail from './component/SlideDetail.tsx';
import Button from '../../components/Button/Button.tsx'
import { apiAddBookRoom, apiGetBookRoom } from '../../service/bookRoom.js';
import { useSelector } from 'react-redux';
import PopupBookRoom from '../BookRoomPage/component/PopupBookRoom.tsx';
import MapComponent from '../../components/Map/MapComponent.tsx';

const { IoStarSharp, FaLocationDot, GiPriceTag, SlCrop, CiClock2, FaPhoneAlt, GoHeartFill, SiZalo, PiShoppingCart} = icons

const DetailPost = () => {
  // const { postId } = useParams();
  const data = useSelector((state:any) => state.auth)
  const location = useLocation();
  const [item, setItem] = useState({});
  // {id , images, address, attributes, star, description, users, Overviews, title }
  const dataPost = location.state
  const handleStar = (star: any) => {
    let stars: JSX.Element[] = [];
    for (let i = 1; i <= +star; i++) {
        stars.push(<IoStarSharp className='star-item' size={26} />);
    }
    return stars;
}
const [isShowBookRoom, setIsShowBookRoom] = useState(false);

const handleAdd = async ()=>{
  const response =  await  apiAddBookRoom({userId : data.id , postId :dataPost?.id})
  if(response?.status === 200){
    alert("Thêm vào giỏ phòng thành công! 😍")
}
  await apiGetBookRoom({userId: data.id })
  // console.log(response);
}
const alertErr = ()=>{
  alert("Vui lòng đăng nhập")
}
const handleShowBookRoom = (item:any) => {
  if (data?.isLoggedIn) {
    setItem(item)
    setIsShowBookRoom(true);
  }else{
    alertErr()
  }
};
// console.log(dataPost);
  return (
    <div className='flex w-full'>
      <div className='w-[70%]'>
        <div className='mb-[20px]'>
          <SlideDetail images={dataPost?.images} />
        </div>
        <div className='p-[20px] bg-[#fff]'>
          <h3 className='mb-[10px] text-[24px] text-[#e13427] pr-[20px] text-center font-bold'>
            <span className='inline-block text-[#ffd454] mr-[3px]'>
              {handleStar(+dataPost?.star).length > 0 && handleStar(+dataPost?.star).map((starr, number) => {
                return (
                  <span key={number} className='inline-flex justify-center'>
                    {starr}
                  </span>
                )
              })}
            </span>
            {dataPost?.title}
          </h3>
          <div className='mt-[10px]'>
            <div className='flex items-center text-[14px] mb-[10px]'>
              <FaLocationDot color='#1081e0' className='mr-[8px]'/> 
              {dataPost?.address}
            </div>
            <div className='flex mb-[30px]'>
              <p className='flex items-center mr-[35px]'>
                <GiPriceTag size={16} color='#bebebe' className='mr-[8px]'/>
                <span className='text-[21px] text-[#16c784] font-bold'>{dataPost?.attributes.price}</span>    
              </p>
              <p className='flex items-center mr-[35px]'>
                <SlCrop color='#bebebe' className='mr-[8px]'/>
                <span className='text-[14px]'>{dataPost?.attributes.acreage}</span> 
              </p>
              <p className='flex items-center mr-[35px]'>
                <CiClock2 color='#bebebe' className='mr-[8px]'/> 
                <span className='text-[14px]'>{dataPost?.attributes.published}</span>  
              </p>
              <p className='flex items-center'>{dataPost?.Overviews?.code}</p>
            </div>
            <h2 className='text-[21px] text-[#333333] font-bold mb-[15px]'>Thông tin mô tả</h2>
            <p className='text-[15px] mb-[15px]'>{dataPost?.description}</p>
            <p className='text-[15px] mb-[15px]'>Giá phòng: {dataPost?.attributes?.price}</p>
            <p className='text-[15px] mb-[15px]'>Phòng rộng: {dataPost?.attributes?.acreage}</p>
            <p className='text-[15px] mb-[15px]'>{dataPost?.address}</p>
            <p className='text-[15px] mb-[15px]'>Liên hệ thuê phòng: {dataPost?.users.phone} - {dataPost?.users.name} </p>
            <h3 className='text-[18px] text-[#333333] font-bold mb-[15px]'>Đặc điểm tin đăng</h3>
            <div className='flex mb-[20px]'>
              <div className='w-[30%]'>
                <p className='text-[15px] p-[10px] bg-[#f5f5f5]'>Mã tin: </p>
                <p className='text-[15px] p-[10px]'>Khu vực: </p>
                <p className='text-[15px] p-[10px] bg-[#f5f5f5]'>Loại tin rao: </p>
                <p className='text-[15px] p-[10px]'>Đối tượng thuê:</p>
                <p className='text-[15px] p-[10px] bg-[#f5f5f5]'>Gói tin:</p>
                <p className='text-[15px] p-[10px]'>Ngày đăng:</p>
                <p className='text-[15px] p-[10px] bg-[#f5f5f5]'>Ngày hết hạn:</p>
              </div>
              <div className='w-[70%]'>
                <p className='text-[15px] p-[10px] bg-[#f5f5f5]'>{dataPost?.Overviews?.code}</p>
                <p className='text-[15px] p-[10px] text-[#1266dd]'>{dataPost?.Overviews?.area}</p>
                <p className='text-[15px] p-[10px] bg-[#f5f5f5]'>{dataPost?.Overviews?.type}</p>
                <p className='text-[15px] p-[10px]'>{dataPost?.Overviews?.target}</p>
                <p className='text-[15px] p-[10px] bg-[#f5f5f5] text-[#E13427]'>{dataPost?.Overviews?.bonus}</p>
                <p className='text-[15px] p-[10px]'>{dataPost?.Overviews?.created}---</p>
                <p className='text-[15px] p-[10px] bg-[#f5f5f5]'>{dataPost?.Overviews?.expire}---</p>
              </div>
            </div>
            <h3 className='text-[18px] text-[#333333] font-bold mb-[15px]'>Thông tin liên hệ</h3>
            <div className='flex mb-[20px]'>
              <div className='w-[30%]'>
                <p className='text-[15px] p-[10px] bg-[#f5f5f5]'>Liên hệ: </p>
                <p className='text-[15px] p-[10px]'>Điện thoại: </p>
                <p className='text-[15px] p-[10px] bg-[#f5f5f5]'>Zalo: </p>
              </div>
              <div className='w-[70%]'>
                <p className='text-[15px] p-[10px] bg-[#f5f5f5]'>{dataPost?.users.name}</p>
                <p className='text-[15px] p-[10px]'>{dataPost?.users?.phone}</p>
                <p className='text-[15px] p-[10px] bg-[#f5f5f5]'>{dataPost?.users?.zalo}</p>
              </div>
            </div>
            <h3 className='text-[18px] text-[#333333] font-bold mb-[15px]'>Bản đồ</h3>
            <p className='mb-[15px]'>{dataPost?.address}</p>
            <div>
            <MapComponent  location = {dataPost?.address}/>
            </div>
          </div>
        </div> 
      </div>
      <div className='w-[30%] pl-[15px]'>
          <div className='bg-[#febb02] border-[1px] rounded-[5px] border-[#febb02] p-[15px]'>
            <div className='w-[80px] h-[80px] rounded-[50%] m-auto border-[1px] border-solid'>
              <img src="https://phongtro123.com/images/default-user.png" alt="Ảnh" className='w-[80px] h-[80px] rounded-[50%] object-cover' />
            </div>
            <p className='w-fit m-auto text-[21px] font-bold mb-[10px]'>
              {dataPost?.users?.name}
            </p>
            <Button text={dataPost?.users?.phone} onClick={undefined} className={'w-full h-[40px] bg-[#16c784] hover:bg-[#13bb7b] font-bold text-white text-[21px] mb-[10px] hover:no-underline'} icon={<FaPhoneAlt className='mr-[5px]' />} bgColor={undefined} textColor={undefined} px={undefined}/>
            <a href={`http://zalo.me/${dataPost?.users?.zalo}`}>
              <Button text={'Nhắn Zalo'} onClick={undefined} className={'w-full h-[40px] bg-[#fff] font-bold text-[#000000] text-[14px] mb-[10px]'} icon={<SiZalo size={10} className='text-[#fff] w-[30px] h-[30px] rounded-[50%] bg-[#028fe3] p-[5px] font-bold' />} bgColor={undefined} textColor={undefined} px={undefined}/>
            </a>
            <Button text={'Thêm vào giỏ phòng'} onClick={data?.isLoggedIn ?  handleAdd : alertErr } className={'w-full h-[40px] bg-[#fff] font-bold text-[#000000] text-[14px] mb-[10px]'} icon={<GoHeartFill size={20} color='#f73859' />} bgColor={undefined} textColor={undefined} px={undefined}/>
            <Button text={'Đặt Phòng'} onClick={()=> handleShowBookRoom(item)} className={'w-full h-[40px] bg-[#fff] font-bold text-[#000000] text-[14px]'} icon={<PiShoppingCart/>} bgColor={undefined} textColor={undefined} px={undefined}/>
          </div>
      </div>
      {isShowBookRoom && <PopupBookRoom item={dataPost} setIsShowBookRoom={setIsShowBookRoom} />}
    </div>
  )
}

export default DetailPost