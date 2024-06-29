import React, {useState, useEffect} from 'react'
import Navbar from '../../components/DefaultLayOut/Header/Navbar/NavBar.tsx'
import { IoDocumentTextOutline } from "react-icons/io5";
import { SlNote } from "react-icons/sl";
import { CgDollar } from "react-icons/cg";
import { LiaHistorySolid } from "react-icons/lia";
import { RiFolderHistoryLine } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import { FaRegClipboard } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import {Link, useNavigate} from "react-router-dom"
import logo from "../../assets/imgs/logo/logoPerson.png"
import {useSelector,useDispatch} from "react-redux"
import { setActiveItemNav ,setActiveItem} from "../../../src/redux/slides/main1Slide.js"
import { actionTypes } from '../../redux/actions/actionTypes.js';

const PersonalPage = ({children}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const activeItemNav = useSelector((state: any) => state.main1.activeItemNav);
    const { username,phone ,id , money, rules ,avatar} = useSelector((state:any) => state.auth)
    useEffect(() => {
        // Lưu active item vào localStorage mỗi khi nó thay đổi
        localStorage.setItem('activeItemNav', activeItemNav.toString());
    }, [activeItemNav]);
    const handleHeaderActive = (id: number) => {
        dispatch(setActiveItemNav(id));
    };
     const info = {
        username : "TMC",
        sdt : "123456789",   
        mathanhvien : "987654321",
        tkchinh : "1000000",
        // avatar :  avatar,
    }
    const changeTittle = () => {
        let title = " ";
        switch (activeItemNav) {
            case 1: title = "Quản lý đăng tin";
            break;
            case 2: title = "Sửa thông tin cá nhân";         
            break;
            case 3: title = "Nạp tiền vào tài khoản";      
            break;
            case 4: title = "Lịch sử nạp tiền" ;         
            break;
            case 5: title = "Lịch sử thanh toán"  ; 
            break;
            case 6: title = "Bảng giá dịch vụ" ;
            break;
            case 7: title = "Liên hệ" ;
            break;
            default: title = " " 
            break;
        }
        return title;
    }
    function formatCurrency(amount:any) {
        let amountStr = amount?.toString();
        return amountStr?.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
      const gotohome = ()=>{
        navigate("/")
        dispatch(setActiveItem(1));  
      }
  return (
    <div className="">
        <div className="flex fixed w-[100vw] h-[100vh]">
            <div className="w-[20%]  bg-gray-100 ">
                <div onClick={gotohome} className="bg-[#055699] h-[40px] p-[5px] flex justify-center items-center" >
                    <img className='w-[100$] h-[100%]'  src={logo} alt="LOGO"  />
                    <span className='m-[5px] text-white font-[900]'>HOMSTAY HEALING</span>
                </div> 
                <div className="w-[100%] min-h-[100%] p-[10px] ">
                    <div className="flex h-[100px]">
                        <div className=" w-[100px] h-[100%]">
                            <img className='w-[100%] h-[100%] shadow-[1px_1px_1px_1px_#a7acaf] rounded-[10rem]' src={avatar} alt="avatar" />
                        </div>
                        <div className=" w-[60%] h-[100%] py-[20px] px-[10px]">
                            <h1 className='font-[600]'>{username}</h1>
                            <h1 className=''>{phone}</h1>
                        </div>
                    </div>
                    <br />
                    <p>Mã thành viên : <span className='font-[600]'>{id}</span></p>
                    <p>Tài khoản chính : <span className='font-[600]'>{formatCurrency(money)} VND</span></p>
                    <div className="flex">
                        <Link to={`/personal/DepositMoney`}>
                            <button className=' px-[10px] py-[5px] m-[5px] hover:bg-yellow-400 bg-yellow-500 text-white font-[700]'>Nạp tiền </button>
                        </Link>
                        {
                            rules === "admin" ?
                            <button className=' px-[10px] py-[5px] m-[5px] hover:bg-red-400 bg-red-500 text-white font-[700]'>Đăng tin </button>
                            : 
                            <div className=""></div>
                        }
                    </div>
                    <br />
                    <div className="w-[100%] min-h-[80px] bg-[#fff9e6] rounded-[10px] p-[5px]">
                        <p className='font-[600]'>Nhân viên hỗ trợ của bạn là : </p>
                        <p className='font-[600]'>Đức Trọng </p>
                        <p className='font-[600]'>0912123456</p>
                    </div>
                    <br />
                    <div className="h-[40vh] overflow-y-auto pb-[100px]">
                        <ul>
                        {
                            rules !== "user" ?
                            <Link to="/personal/ManagePostings">
                                <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItemNav === 1 ? "font-[700] bg-gray-200" : ""} `}
                                    onClick={() => handleHeaderActive(1)}>
                                    <span className='flex justify-around'><IoDocumentTextOutline className='m-[3px]' /> <span>Quản lý đăng tin</span>  </span>
                                </li>
                            </Link>
                            : 
                            <li className=""></li>
                        }
                        <Link to="/personal/Information">
                            <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItemNav === 2 ? "font-[700] bg-gray-200" : ""} `}
                                onClick={() => handleHeaderActive(2)}>
                                <span className='flex justify-around'> <SlNote className='m-[3px]'  /> <span>Sửa thông tin cá nhân</span>  </span>
                            </li>
                        </Link>
                        <Link to="/personal/DepositMoney">
                            <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItemNav === 3 ? "font-[700] bg-gray-200" : ""} `}
                                onClick={() => handleHeaderActive(3)}>
                                <span className='flex justify-around'><CgDollar className='m-[3px]'  />  <span> Nạp tiền vào tài khoản</span> </span>
                            </li>
                        </Link>
                        <Link to="/personal/DepositHistory">
                            <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItemNav === 4 ? "font-[700] bg-gray-200" : ""} `}
                                onClick={() => handleHeaderActive(4)}>
                                <span className='flex justify-around'> <LiaHistorySolid  className='m-[3px]' />  <span> Lịch sử nạp tiền</span> </span>
                            </li>
                        </Link>
                        <Link to="/personal/PaymentHistory">
                            <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItemNav === 5 ? "font-[700] bg-gray-200" : ""} `}
                                onClick={() => handleHeaderActive(5)}>
                                <span className='flex justify-around'> <RiFolderHistoryLine  className='m-[3px]' /> <span>Lịch sử thanh toán</span> </span>
                            </li>
                        </Link>
                        <Link to="/personal/ServicePriceList">
                            <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItemNav === 6 ? "font-[700] bg-gray-200" : ""} `}
                                onClick={() => handleHeaderActive(6)}>
                                <span className='flex justify-around'> <FaRegClipboard  className='m-[3px]' /><span>Bảng giá dịch vụ</span> </span>
                            </li>
                        </Link>
                        <Link to="/personal/Contact">
                            <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItemNav === 7 ? "font-[700] bg-gray-200" : ""} `}
                                onClick={() => handleHeaderActive(7)}>
                                <span className='flex justify-around'><GrContact  className='m-[3px]' /> <span>Liên hệ </span> </span>
                            </li>
                        </Link>
                        <li className={`flex items-center justify-left pl-[20px] h-[40px] hover:bg-white ${activeItemNav === 8 ? "font-[700] bg-gray-200" : ""} `}
                            onClick={() => {
                            dispatch({ type: actionTypes.LOGOUT})
                            navigate('/'); 
                            }} >
                            <span className='flex justify-around'> <IoIosLogOut  className='m-[3px]' /> <span>Thoát</span> </span>
                        </li>
                        </ul>
                    </div>
                </div>               
            </div>
            <div className="w-[80%] min-h-[100vh] bg-[#f8f9fa]">
                <Navbar setNav=" bg-[#055699]" />
                <div className="w-[100%] h-[100%]">
                    <div className="w-[100%] h-[50px] bg-gray-300 flex items-center ">
                        <div className='pl-[30px]'>
                            <Link to={"/"}> <span className='text-blue-500 font-[600]'>HomestayHealing.com </span></Link> 
                            <span> / </span>
                             <span className='text-blue-500  font-[600]'>{changeTittle()}</span> 
                        </div>
                    </div>
                    <div className="w-[100%] h-[100%] p-[10px] overflow-auto">
                         {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default PersonalPage