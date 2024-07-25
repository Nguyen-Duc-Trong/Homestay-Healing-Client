import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import {apiDeletePost, apiGetPosts} from "../../../service/post"
const ManagePostings = () => {
  const {posts} = useSelector((state:any) => state.post) 
  // console.log(posts);
  const [data,setData] = useState([])
  const getPost = async () =>{
    try {
       const response = await apiGetPosts()
       setData(response?.data?.response)
    } catch (error) {
      console.log(error);
      
    }
   
  }
  useEffect(  () => {
    getPost()
  },[]) 
    // console.log(data);
    
  const handleDeletePost = async (id:any)=>{
    const response = await apiDeletePost({idPost :id})
    if (response.status === 200) {
      alert("Bạn dã xóa thành công bài đăng!")
    }
    // console.log(response);
    getPost()
    
  }
  return (
    <div className='w-[100%] h-[100vh] overflow-auto pb-[100px] '>
        <div className="flex justify-between px-[30px] items-center">
          <div className="">
            <h1 className='text-[30px] font-[600]'>Quản lý tin đăng</h1>
          </div>
          <div className="">
          <label htmlFor="VIP">Chọn loại VIP</label>
          <select className='px-[10px] py-[5px] border-[2px] mx-[5px]' name="VIP" id="VIP">
               <option value="HOT">Tin Hot</option>
              <option value="THUONG">Tin thường</option>
              <option value="VIP10">Tin VIP 10</option>
              <option value="VIP20">Tin VIP 20</option>
              <option value="VIP30">Tin VIP 30</option>
          </select>
          <label htmlFor="NEWS">Chọn loại tin</label>
          <select className='px-[10px] py-[5px] border-[2px] mx-[5px]' name="NEWS" id="NEWS">
              <option value="NewsShowing">Tin đang hiển thị</option>
              <option value="ExpiredNews">Tin hết hạn</option>
              <option value="ExpiredNews">Tin đang ẩn</option>
          </select>
          <Link to={`/personal/DepositMoney/posting`}>
            <button className='px-[10px] py-[5px] text-white font-[500] bg-[#dc3545]'>Đăng tin mới</button>
          </Link>
          </div>
        </div>
        <h1>Tổng số bài đăng : <span className="text-[red]">{data && data.length > 0 ? data.length : 0}</span>   bài</h1>
        <table className='w-[100%]  m-[5px] p-[5px]' >
          <thead className=' border-[2px]'>
            <tr>						
              <th className=' border-r-[2px]'>Mã tin</th>
              <th className=' border-r-[2px]'>Ảnh đại diện</th>
              <th className=' border-r-[2px]'>Tiêu đề</th>
              <th className=' border-r-[2px]'>Giá</th>
              <th className=' border-r-[2px]'>Ngày bắt đầu</th>
              <th className=' border-r-[2px]'>Ngày hết hạn</th>
              <th className=' border-r-[2px]'>Trạng thái</th>
              <th className=' border-r-[2px]'>Xóa</th>
              <th className=' border-r-[2px]'>Sửa</th>
            </tr>
          </thead>
          <tbody  className=' border-[2px]  p-[5px]'>
              {
                data && data.length > 0 ? (
                  data.map((item:any, index:any)=>{
                    const arr = JSON.parse(item?.images?.image)
                    // console.log();
                    
                    return (
                        <tr className='my-[10px]' key={index}>
                          <td  className=' border-[2px]  max-w-[120px]'>{item?.id}</td>
                          <td  className=' border-[2px]'><img className='w-[50px] h-[50px]' src={arr ? arr[1] : ""} alt="img" /></td>
                          <td  className=' border-[2px] max-w-[250px]'>{item?.title}</td>
                          <td  className=' border-[2px]'>{item?.attributes?.price}</td>
                          <td  className=' border-[2px]'><small>{item?.Overviews?.createdAt}</small> </td>
                          <td  className=' border-[2px]'><small>{item?.Overviews?.updatedAt}</small> </td>
                          <td  className=' border-[2px]'></td>
                          <td   className=' border-[2px]'><button 
                          onClick={()=>handleDeletePost(item?.id)}
                          className='font-[500] text-white w-[100%] h-[100%] bg-red-500'>Xóa</button> </td>
                          <td   className=' border-[2px]'><button className='font-[500] text-white w-[100%] h-[100%] bg-yellow-500'>Sửa</button> </td>
                        </tr>
                    )
                  })
                )
                :
                  <tr> Bạn chưa có tin đăng nào. Bấm <Link to={`/personal/DepositMoney/posting`} className='text-blue-400'> vào đây</Link> để bắt đầu đăng tin</tr>
              }
          </tbody>
        </table>

    </div>
  )
}

export default ManagePostings
