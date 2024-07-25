import React from 'react'
import PostingList from '../HomePage/components/PostingList.tsx'

const ApartmentRental = () => {
  return (
    <div className='mt-[10px]'>
      <h2 className='text-center text-[32px] font-bold mb-[5px]'>Cho Thuê Căn Hộ</h2>
      <p className='text-[15px] text-[#65676b] font-normal leading-normal mb-[20px]'>
        Kênh thông tin Homestay số 1 Việt Nam - Website cho thuê phòng trọ, nhà nguyên căn, căn hộ, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.
      </p>
      <PostingList />
    </div>
  )
}

export default ApartmentRental