import React, {useCallback} from "react"
import {Link, useNavigate} from "react-router-dom"
import Button from "../../../Button/Button.tsx"
import { path } from "../../../../ultils/constant.js"
import { useSelector, useDispatch } from "react-redux"
import logo from "../../../../assets/imgs/logo/logoPage.jpg"
import { setActiveItemNav ,setActiveItem} from "../../../../redux/slides/main1Slide.js"
import { actionTypes } from '../../../../redux/actions/actionTypes.js';
const HeaderTop = () => {
  const navigate = useNavigate()
  const {isLoggedIn, username, money,avatar} = useSelector((state:any) => state.auth)
  const dispatch = useDispatch()
  const goLogin = useCallback((flag:any) => {
    navigate(path.LOGIN, {state: {flag}})
  }, [])
  const handleHeaderActive = (id: number ,id2 : number) => {
    dispatch(setActiveItemNav(id));
    dispatch(setActiveItem(id2));

};
function formatCurrency(amount:any) {
  let amountStr = amount.toString();
  return amountStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
const gotohome = ()=>{
  navigate("/")
  dispatch(setActiveItem(1));  
}
  return (
    <div className='HeaderTop bg-white'>
      <div className="w-[70%] m-auto">
        <div  className='header-container flex justify-between h-[70px] items-center'>
          {/* //////// LOGO /////////// */}
          <div className='header-logo'>
              <div onClick={gotohome}  className="flex flex items-center justify-around cursor-pointer">
                <img className='logo-img w-[50px]' src={logo} alt="Logo " />
                <h1 className="text-[1.2rem] font-[900] text-[#4f5091]">HOMESTAY HEALING</h1>
              </div>
          </div>

          {!isLoggedIn &&  <div className="flex">
            <Button
            text={"Đăng nhập"}
            onClick={() => goLogin(false)} className={'bg-[#3961FB] text-[#ffffff] h-[40px] w-[100px] mx-[5px] rounded-[10px] py-[2px] px-[4px] '} icon={undefined} />
          <Button
            text={"Đăng ký"}
            onClick={() => goLogin(true)} className={'bg-[#3961FB] text-[#ffffff] h-[40px] w-[100px] mx-[5px] rounded-[10px] py-[2px] px-[4px] '} icon={undefined} />
          </div>}
          {isLoggedIn &&  
            <Link to={`/personal/Information`} onClick={()=> handleHeaderActive(2,0)}>            
              <div className="flex">
                <div className="flex items-center justify-center">
                  <img className="w-[50px] h-[50px] shadow-[1px_1px_1px_1px_#a7acaf]  rounded-[10rem]" src={avatar} alt="avatar" />
                </div>
                  <div className=" mx-[10px]  ">
                      <span className="">Tên tài khoản : <span className="font-[600]"> {username}</span></span> <br />
                      {/* <small className="">Mã tài khoản : <span className="font-[600]">{id}</span> </small><br /> */}
                      <small className="">TK chính :<span className="font-[600]">{formatCurrency(money) }  VND</span></small>

                  </div>
              </div>
            </Link>
          }
        </div>
      </div>
    </div>
  )
}

export default HeaderTop