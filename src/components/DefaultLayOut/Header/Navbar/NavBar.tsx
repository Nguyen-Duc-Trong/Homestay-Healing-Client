import React, {useEffect, useState} from 'react'
import {Link } from "react-router-dom"
import { FaRegHeart } from "react-icons/fa";
import {useSelector,useDispatch} from "react-redux"
import {setActiveItem} from "../../../../redux/slides/main1Slide.js"

const Navbar = ({setNav}) => {
    const dispatch = useDispatch();
    const {activeItem, totalCartRoom} = useSelector((state: any) => state.main1); 
    useEffect(() => {
        // Lưu active item vào localStorage mỗi khi nó thay đổi
        localStorage.setItem('activeItem', activeItem.toString());
    }, [activeItem,]);

    const handleHeaderActive = (id: number) => {
        dispatch(setActiveItem(id));
    };
  return (
   <div className={`header-navbar w-[100%]  ${setNav}  ` }>
        <ul className={`header-list-nav flex justify-around w-[1120px]  m-auto h-[40px] items-center text-[#ffffff] font-bold text-[14px] `}>
            <Link to="/">
                <li className={`flex items-center px-[31px] h-[40px] hover:bg-[#f73859] ${activeItem === 1 ? "bg-[#f73859]" : ""} `}
                    onClick={() => handleHeaderActive(1)}>
                    <span>Trang chủ</span>
                </li>
            </Link>
            <Link to="/RentingRoom">
                <li className={`flex items-center px-[31px] h-[40px] hover:bg-[#f73859] ${activeItem === 2 ? "bg-[#f73859]" : ""} `}
                    onClick={() => handleHeaderActive(2)}>
                    Cho thuê phòng trọ
                </li>
            </Link>
            <Link to="/rentalhouse">
                <li className={`flex items-center px-[31px] h-[40px] hover:bg-[#f73859] ${activeItem === 3 ? "bg-[#f73859]" : ""} `}
                    onClick={() => handleHeaderActive(3)}>
                   Nhà cho thuê
                </li>
            </Link>
            <Link to="/apartmentRental">
                <li className={`${activeItem === 4 ? "bg-[#f73859]" : ""} flex items-center px-[31px] h-[40px] hover:bg-[#f73859]`}
                    onClick={() => handleHeaderActive(4)}>
                    Cho thuê căn hộ
                </li>
            </Link>
            <Link to={"/BookRoom"}>
                <li className={`flex items-center px-[31px] h-[40px] hover:bg-[#f73859] ${activeItem === 5 ? "bg-[#f73859]": ""}`}
                    onClick={() => handleHeaderActive(5)}>
                    <FaRegHeart className='mr-[5px] text-[15px]'/> Giỏ phòng ({totalCartRoom?.length})
                </li> 
            </Link>
            <Link to={"/contract"}>
                <li className={`${activeItem === 6 ? "bg-[#f73859]" : ""} flex items-center px-[31px] h-[40px] hover:bg-[#f73859]`}
                    onClick={() => handleHeaderActive(6)}>
                    Hợp đồng
                </li>
            </Link>
            <Link to="/serviceSense">
                <li className={`${activeItem === 7 ? "bg-[#f73859]" : ""} flex items-center px-[31px] h-[40px] hover:bg-[#f73859]`}
                    onClick={() => handleHeaderActive(0)}>
                   Bảng giá dịch vụ
                </li>
            </Link>
        </ul>
   </div>
)
}

export default Navbar