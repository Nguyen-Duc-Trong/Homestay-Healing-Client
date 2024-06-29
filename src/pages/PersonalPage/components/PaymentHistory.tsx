import React from 'react'

const PaymentHistory = () => {
  return (
    <div className=" h-[100vh] overflow-auto ">
    <h1  className='text-[30px] font-[600]'>Lịch sử thanh toán tin</h1>
    <br />
      <table className='w-[100%]  m-[5px] p-[5px]' >
        <thead className=' border-[2px]'>
          <tr>								 			
            <th className=' border-r-[2px]'>Thời gian	</th>
            <th className=' border-r-[2px]'>Loại hoạt động</th>
            <th className=' border-r-[2px]'>Mã tin đăng</th>
            <th className=' border-r-[2px]'>Loại tin</th>
            <th className=' border-r-[2px]'>Số dư </th>
            <th className=' border-r-[2px]'>Phí	</th>
            <th className=' border-r-[2px]'>Còn lại</th>
            <th className=' border-r-[2px]'>Trạng thái</th>
          </tr>
        </thead>
        <tbody  className=' border-[2px]  p-[5px]'>
            <tr></tr>
        </tbody>
      </table>

  </div>
  )
}

export default PaymentHistory