import React, {useEffect} from 'react'
import Button from '../../../components/Button/Button.tsx'
import Pagination from '../../../components/Pagination/Pagination.tsx'
import {useDispatch, useSelector} from 'react-redux'
import { actionTypes } from '../../../redux/actions/actionTypes.js'
import { apiGetPosts } from '../../../service/post.js'
import Sidebar from './Sidebar.tsx'

const PostingList = () => {
  const dispatch = useDispatch()
  const {posts} = useSelector((state:any) => state.post)   
  const getPost = async () =>{
    const response = await apiGetPosts()
    dispatch({type: actionTypes.GET_POSTS ,data:response.data})
  }
  useEffect(  () => {
    getPost()
  },[]) 
    
  return (
    <div className='flex w-full'>
      <div className='bg-[#fff] w-[70%] mr-[10px] p-[20px] border border-[1px] border-solid border-[#dedede] rounded-[8px]'>
        <h4 className='text-[18px] font-bold mb-[15px]'>Danh sách tin đăng</h4>
        <div className='flex mb-[10px]'>
          <span>Sắp xếp: </span>
          <Button text={'Mặc định'} onClick={undefined} className={'bg-[#f1f1f1] ml-[5px] text-[13px] py-[5px] px-[10px]'} icon={undefined} bgColor={undefined} textColor={undefined} px={undefined} />
          <Button text={'Mới Nhất'} onClick={undefined} className={'bg-[#f1f1f1] ml-[5px] text-[13px] py-[5px] px-[10px]'} icon={undefined} bgColor={undefined} textColor={undefined} px={undefined} />
          <Button text={'Có video'} onClick={undefined} className={'bg-[#f1f1f1] ml-[5px] text-[13px] py-[5px] px-[10px]'} icon={undefined} bgColor={undefined} textColor={undefined} px={undefined} />
        </div>
        <Pagination data={posts}  />
      </div>
      <div className='bg-[#f5f5f5] w-[30%]'>
        <Sidebar />
      </div>
    </div>
  )
}

export default PostingList