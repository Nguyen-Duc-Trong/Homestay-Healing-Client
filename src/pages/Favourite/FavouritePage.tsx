import React,{useState} from 'react'
import heat from "../../assets/imgs/ImgFavouritePage/Capture.png"
import {Link} from "react-router-dom"
import { FaChevronRight } from "react-icons/fa";
const Favourite = () => {
  const [listFavourite, setListFavourite] = useState([])
  // setListFavourite(listFavourite)
  // const product = [1,2,3]
  // useEffect(() => {
  //   setListFavourite(product)
  // }, [listFavourite])
  

  return (
    <div className='favourite'>
      <h1 className='text-[2rem] mb-[5px] leading-[1.2rem] font-[600]'>
        Tin đã lưu
      </h1>
      <div className="w-[100%] flex">
        <div className={`w-[70%] bg-white rounded-lg ${listFavourite.length > 0 ? "" : "h-[250px]"}  mr-[10px] mt-[15px] p-[10px]`}>
            {listFavourite.length > 0 ?
            <div className="">
              <h3 className='text-[1.5rem] mb-[5px] leading-[1.2rem] font-[600]'>Danh sách tin đăng</h3>
              {/* listFavourite.map((item) => {

              }) */}

            </div>
            :
            <div className="">
              <img className='w-[100%] h-[100%] boder-none'  src={heat} alt="Danh sách trống " />

            </div>
            }
        </div>
        <div className="w-[30%] rounded-lg  min-h-[600px] ml-[10px] mt-[15px] ">
        <div className=" bg-white w-[100%] border-[2px] h-[200px]  border-[1px] p-[10px] mb-[10px]">
          <h3 className='text-[1.5rem] mb-[5px] leading-[1.2rem] font-[600]'>Danh mục cho thuê</h3>
            <ul>
              <Link to="/">
                <li className='flex text-[1.1rem] font-[500] py-[5px] hover:text-red-500'  > 
                <FaChevronRight className='mt-[6px]' /> Cho thuê Homestays độc lập</li>
              </Link>
              <Link to="/">
                <li className='flex text-[1.1rem] font-[500] py-[5px] hover:text-red-500'  > 
                <FaChevronRight className='mt-[6px]' /> Cho thuê Homestay nhóm</li>
              </Link>
              <Link to="/">
                <li className='flex text-[1.1rem] font-[500] py-[5px] hover:text-red-500'  > 
                <FaChevronRight className='mt-[6px]' /> Cho thuê Homestay nghỉ dưỡng</li>
              </Link>
            </ul>
        </div>
        <div className=" bg-white w-[100%] border-[2px] p-[10px] rounded-lg  ">
          <h3 className='text-[1.5rem] mb-[5px] leading-[1.2rem] font-[600]'>Bài viết mới</h3>
          <ul className='p-[10px]'>
            <Link to="/">

            </Link>
            <Link to="/">
              <li className='flex text-[1.1rem] font-[500] py-[5px] hover:text-red-500'  > 
                  <FaChevronRight className='m-[6px]' /> 
                  Quy trình đăng ký tạm trú cho người thuê phòng trọ mới nhất
              </li>
            </Link>
            <Link to="/">
              <li className='flex text-[1rem] font-[500] py-[5px] hover:text-red-500'  > 
                  <FaChevronRight className='m-[6px]' /> 
                  Thủ tục thuê homestay chính xác dành cho người nước ngoài
              </li>
            </Link>
            <Link to="/">
              <li className='flex text-[1rem] font-[500] py-[5px] hover:text-red-500'  > 
                  <FaChevronRight className='m-[6px]' /> 
                  Cho thuê homestay có cần đăng ký giấy phép kinh doanh hay không?
              </li>
            </Link>
            <Link to="/">
              <li className='flex text-[1rem] font-[500] py-[5px] hover:text-red-500'  > 
                  <FaChevronRight className='m-[6px]' /> 
                  Kinh doanh cho homestay trọ cần đóng những loại thuế nào?
              </li>
            </Link>
            <Link to="/">
              <li className='flex text-[1rem] font-[500] py-[5px] hover:text-red-500'  > 
                  <FaChevronRight className='m-[6px]' /> 
                  Sinh viên Hà Nội nên ở homestay hay ký túc xá? Cần lưu ý điều gì khi homestay?
              </li>
            </Link>
            <Link to="/">
              <li className='flex text-[1rem] font-[500] py-[5px] hover:text-red-500'  > 
                  <FaChevronRight className='m-[6px]' /> 
                  Chia sẻ "mẹo" đăng tin thuê homestay phòng trọ hiệu quả tại website
              </li>
            </Link>
          </ul>
        </div>
        <div className="bg-white w-[100%] border-[2px] p-[10px] rounded-lg">
        <h3 className='text-[1.5rem] mb-[5px] leading-[1.2rem] font-[600]'>Có thể bạn quan tâm</h3>
          <ul>
            <Link to="/">
              <li className='flex text-[1rem] font-[500] py-[5px] hover:text-red-500'  > 
                  <FaChevronRight className='m-[6px]' /> 
                  Mẫu hợp đồng cho thuê phòng trọ
              </li>
            </Link>
            <Link to="/">
              <li className='flex text-[1rem] font-[500] py-[5px] hover:text-red-500'  > 
                  <FaChevronRight className='m-[6px]' /> 
                  Cẩn thận các kiểu lừa đảo khi thuê phòng trọ
              </li>
            </Link>
            <Link to="/">
              <li className='flex text-[1rem] font-[500] py-[5px] hover:text-red-500'  > 
                  <FaChevronRight className='m-[6px]' /> 
                  Kinh nghiệm thuê phòng trọ Sinh Viên
              </li>
            </Link>

          </ul>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Favourite;