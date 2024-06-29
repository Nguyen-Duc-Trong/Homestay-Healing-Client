import React from 'react'

const DepositHistory = () => {
  return (
      <div className=" h-[100vh] overflow-auto ">
        <h1  className='text-[30px] font-[600]'>Lịch sử nạp tiền</h1>
        <br />
        <table className='w-[100%]  m-[5px] p-[5px]' >
          <thead className=' border-[2px]'>
            <tr>													
              <th className=' border-r-[2px]'>Ngày nạp</th>
              <th className=' border-r-[2px]'>Mã giao dịch</th>
              <th className=' border-r-[2px]'>Phương thức</th>
              <th className=' border-r-[2px]'>Số tiền</th>
              <th className=' border-r-[2px]'>Khuyến mãi </th>
              <th className=' border-r-[2px]'> Thực nhận</th>
              <th className=' border-r-[2px]'>Trạng thái</th>
              <th className=' border-r-[2px]'>Ghi chú</th>

            </tr>
          </thead>
          <tbody  className=' border-[2px]  p-[5px]'>
              <tr></tr>
          </tbody>
      </table>
    </div>
  )
}

export default DepositHistory