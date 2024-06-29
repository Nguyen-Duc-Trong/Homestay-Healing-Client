import React from 'react'
import {Link} from "react-router-dom"
import { dataFooter , dataFooter2 ,dataFooter3} from './dataFooter'
// import logo from "../../../../assets/imgs/logo/logoPage.jpg"
import logo from '../../../assets/imgs/logo/logoPage.jpg'
const Footer = () => {
  return (
    <div className='footer w-[100%] min-h-[50vh] bg-white pb-[50px]'>
      <div className="w-[ w-[1100px] mx-auto mt-[20px]]">
        <div className=" grid grid-cols-4 border-b-[1px] border-[black]">
            {
              dataFooter.map((item ,index)=>{
                return (
                  <div key={index} className="p-[20px]">
                    <div className="">
                      <Link to={item.titleLink}>
                        <h1 className="text-[1.2rem] font-[600]  text-blue-400  hover:text-black">{item.title}</h1>
                      </Link>
                    </div>
                    <br/>
                    <div className="">
                      {item.listChildTitle.map(( item2 ,index)=>{
                          return ( 
                            <div key={index} className="">
                              <Link to={item2.ChildTitleLink}>
                                <p className="text-[1rem] font-[600] text-blue-400 hover:text-black">{item2.ChildTitle}</p>
                              </Link>
                            </div>
                          )
                      })}
                    </div>
                  </div>
                )
              })
            }
        </div>
        <div className=" grid grid-cols-4 min-h-[20vh]">
          <div className="p-[10px] border-r-[1px] border-gray-300">
              <div className="w-[100%] m-auto flex items-center justify-around">
                <img src={logo} alt="logoPage"  className='w-[50px] h-[50px]'/>
                <h1 className="text-[1.2rem] font-[900] text-[#4f5091]">HOSMTAY HEALING</h1>
              </div>
                <br />
                <p>Homestay healing tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh vực cho thuê homestay.</p>
          </div>
            {
              dataFooter2.map((item ,index)=>{
                return(
                  <div  key={index}  className="p-[10px]">
                    <h1 className="text-[1rem] font-[700]  text-black hover:text-blue-400">{item.title}</h1>
                    {
                      item.listChildTitle.map((item2 ,index)=>{
                        return(
                          <p key={index}  className="text-[1rem] font-[500]  text-black hover:text-blue-400">{item2.ChildTitle}</p>
                        )
                      })
                    }
                  </div>
                )
              })
            }
        <div className="">
            {
              dataFooter3.map((item ,index)=>{
                return(
                  <div key={index} className="p-[10px]">
                    <h1 className="text-[1rem] font-[700]  text-black hover:text-blue-400">{item.title}</h1>
                    <div className=" grid grid-cols-4">
                      {
                        item.listImg.map((item2 ,index)=>{
                          return(
                            <img key={index}  src={item2.imgSrc} alt="" className='w-[70%] h-[70%]  p=[10px] m-[10px]' />
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
        </div>
        </div>
        <div className="text-center p-[20px]">
            <p className="pb-[10px]  text-[] font-[600]">CÔNG TY TNHH HOSMTAY HEALING</p>
            <p className="pb-[10px]  text-[] font-[600]">Tổng đài CSKH: 099999999</p>
            <p className="pb-[10px]  ">Copyright © 2015 - 2024 homstayhealing.com</p>
            <p className="pb-[10px]  ">Email: cskh.homstayhealing@gmail.com</p>
            <p className="pb-[10px]  ">Địa chỉ: LD -37 tòa bigcenter 75 giải phóng </p>
            <p className="pb-[10px]  ">Giấy phép đăng ký kinh doanh số 999999 do Sở kế hoạch và Đầu tư thành phố Hà Nội cấp ngày 20 tháng 5 năm 2024.</p>
        </div>
        <br /><br /><br />
      </div>
        <div className="w-[100%] h-[20px] bg-[#febb02] rounded-[10px]"></div>
    </div>
  )
}

export default Footer