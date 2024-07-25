import React ,{useState ,useEffect} from 'react'
import ProminentArea from '../../components/ProminentArea/ProminentArea.tsx'
import PostingList from './components/PostingList.tsx'
import Sidebar from './components/Sidebar.tsx'

const HomePage = () => {
  return (
    <section className='w-1100 '>
      <div className='mb-[15px]'>
        <h1 className='flex justify-center text-[2rem] font-bold'>
          Tìm kiếm chỗ thuê ưng ý
        </h1>
        <p className='text-[15px] text-[#65676b] font-normal leading-normal'>
          Kênh thông tin Homestay số 1 Việt Nam - Website cho thuê phòng trọ, nhà nguyên căn, căn hộ, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.
        </p>
      </div>
      <div className='flex justify-around mb-[50px]'>
        <PostingList/>
      </div>
    </section>
  )
}

export default HomePage