import React from 'react'
import atmBanking from "../../../assets/imgs/listPayImg/atmBanking.png"
import chuyyenkhoan from "../../../assets/imgs/listPayImg/chuyyenkhoan.png"
import diemgiaodich from "../../../assets/imgs/listPayImg/diemgiaodich.png"
import momo from "../../../assets/imgs/listPayImg/momo.png"
import qrcode from "../../../assets/imgs/listPayImg/qr-code.png"
import shopeepay2 from "../../../assets/imgs/listPayImg/shopeepay2.png"
import tindungqt from "../../../assets/imgs/listPayImg/tindungqt.png"
import zalopay from "../../../assets/imgs/listPayImg/zalopay.png"
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
import {useSelector} from "react-redux"

const DepositMoney = () => {
  const listPay = [
    {
      title : "Chuyển khoản",
      img : chuyyenkhoan,
      link : "/personal/DepositMoney/transfer" 
    },
    {
      title : "Thẻ ATM Internet Banking",
      img : atmBanking,
      link : "/" 
    },
    {
      title : "thẻ tín dụng quốc tế",
      img : tindungqt,
      link : "/" 
    },
    {
      title : "MOMO",
      img : momo,
      link : "/" 
    },
    {
      title : "ZaloPay",
      img : zalopay,
      link : "/" 
    },
    {
      title : "ShopeePay",
      img : shopeepay2,
      link : "/" 
    },
    {
      title : "Điểm giao dịch, cửa hàng tiện lợi",
      img : diemgiaodich,
      link : "/" 
    },
    {
      title : "Quét mã QRCode",
      img : qrcode,
      link : "/" 
    },
  ]
  const { money} = useSelector((state:any) => state.auth)
  function formatCurrency(amount:any) {
    let amountStr = amount.toString();
    return amountStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return (
    <div className=" h-[100vh] ">
      <h1  className='text-[30px] font-[600]'>Nạp tiền vào tài khoản</h1>
      <div className="w-[100%] h-[90vh] overflow-auto flex pb-[1000px]">
        <div className="w-[80%] min-h-[100%]  border-[1px]">
          <br /><br />
          <h1  className='text-[30px] font-[400]'>Mời bạn chọn phương thức nạp tiền</h1>
          <br /><br />
          <div className="w-[90%] m-auto grid grid-cols-3  gap-[40px]">
            {
              listPay.map((item,index)=>{
                  return (
                    <Link key={index} to={item.link}>
                        <div className="w-[180px] h-[190px] bg-white m-auto m-[5px]
                        hover:scale-[1.1] hover:shadow-[1px_1px_30px_rgba(0,0,0,0.5)]
                        group rounded-[20px] border-[1px] hover:border-[gray] overflow-hidden">
                        <div className="w-[100%] h-[140px]">
                            <img src={item.img} alt="img" className='w-[100%] h-[100%] p-[5px]' />
                        </div>
                        <div className="w-[100%] h-[60px] group-hover:bg-blue-500">
                            <h1 className='text-center font-[700] text-[1rem]'> {item.title}</h1>
                        </div>
                        </div>
                    </Link>
                  )
              })
            }
          </div>
        </div>
        <div className="w-[20%] min-h-[100%] border-[1px]">
            <div className="w-[95%] h-[100px] border-[black]  border-[1px] m-[5px] p-[10px]">
              <h1 className="font-[600] text-[1.2rem]">Số dư tài khoản: </h1>
              <h1 className="font-[700] text-[1.4rem] text-[green]">{formatCurrency(money) } đ</h1>
            </div>
            <Link to='/personal/DepositHistory'>
              <button className="w-[100%] flex items-center justify-center h-[30px] m-[5px] font-[600] text-[1.1rem] text-white bg-[#6c757d]">
                Lịch sử nạp tiền
              <FaChevronRight className='font-[600] text-[1rem] text-white m-[5px]'  />
              </button>              
            </Link>
            <Link to='/personal/PaymentHistory'>
              <button className="w-[100%] flex items-center justify-center h-[30px] m-[5px] font-[600] text-[1.1rem] text-white bg-[#6c757d]">
              Lịch sử thanh toán
              <FaChevronRight className='font-[600] text-[1rem] text-white m-[5px]'  />
              </button>              
            </Link>
            <Link to='/personal/ServicePriceList'>
              <button className="w-[100%] flex items-center justify-center h-[30px] m-[5px] font-[600] text-[1.1rem] text-white bg-[#6c757d]">
              Bảng giá dịch vụ
              <FaChevronRight className='font-[600] text-[1rem] text-white m-[5px]'  />
              </button>              
            </Link>
        </div>
      </div>
    </div>
  )
}

export default DepositMoney