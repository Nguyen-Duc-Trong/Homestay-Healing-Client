import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputSearch from '../../components/InputSearch/InputSearch.tsx';
import icons from '../../ultils/icons.js';
import Button from '../../components/Button/Button.tsx';
import PopupSearch from './component/PopupSearch.tsx';
import { setProvince, setCategory,setAcreages, setPrice } from '../../redux/slides/searchSlide.js';
import {setPostLimit} from '../../redux/slides/postLimitSlide.js'
import { apiGetProvinces } from '../../service/province.js';
import { apiGetCategories } from '../../service/category.js';
import {apiGetAcreages} from "../../service/acreage.js"
import {apiGetPrices} from '../../service/price.js'

const { MdOutlineNavigateNext, TfiLocationPin, RiMoneyDollarCircleLine, SlCrop, FaRegBuilding, LuDelete, CiSearch } = icons;

const SearchPage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState('');
  const { province, category, acreage, price } = useSelector((state: any) => state.search);
  const [queries, setQueries] = useState({})

  const dispatch = useDispatch();
  useEffect(() => {
    const getProvince = async () => {
      const response = await apiGetProvinces();
      dispatch(setProvince(response.data?.response));
    };
    const getCategory = async () => {
      const response2 = await apiGetCategories(); 
      dispatch(setCategory(response2?.data?.response));
    };
    const getAcreages = async () => {
      const response3 = await apiGetAcreages();
      // console.log(response3);
      dispatch(setAcreages(response3?.data?.response));
    };
    const getPrice = async () => {
      const response4 = await apiGetPrices();
      dispatch(setPrice(response4?.data?.response));
    }
    getCategory();
    getProvince();
    getAcreages();
    getPrice();
    // getPostLimits();
  }, []);

  const handleShowModal = (content: any, name: any) => {
    setContent(content);
    setName(name);
    setIsShowModal(true);
  };

  const handleSubmit = useCallback((e:any, query: any) => {
    e.stopPropagation()
    setQueries(prev => ({...prev, ...query}))
    setIsShowModal(false)
  }, [isShowModal, queries])
  // console.log(queries);

  const handleSearch = () => {
    const queryCodes = Object.entries(queries).filter((item:any) => item[0].includes('Code'))
    let queryCodeObj = {}
    queryCodes.forEach((item:any) => {queryCodeObj[item[0]] = item[1]})
    console.log(queryCodes);
    dispatch(setPostLimit(queryCodeObj))
  }
  
  const createHandleShowModal = (content: any, name: any) => (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    handleShowModal(content, name);
  };
  
  return (
    <React.Fragment>
      <div className='h-[55px] flex p-[10px] bg-[#febb02] rounded-[8px] items-center justify-around text-[13px] '>
        <span onClick={createHandleShowModal(category, 'category')}  className='flex-1 mx-[3px]'>
          <InputSearch IconBefore={<FaRegBuilding />} IconAfter={<LuDelete />} text={
           // @ts-ignore
            queries.category} defaultText={"Loại"}
            fontWeight={undefined}  />
        </span>
        <span onClick={createHandleShowModal(province, 'province')} className='flex-1 mx-[3px]'>
          <InputSearch IconBefore={<TfiLocationPin />} IconAfter={<MdOutlineNavigateNext />} text={
            // @ts-ignore
            queries.province} defaultText={'Địa chỉ'} fontWeight={undefined} />
        </span>
        <span onClick={createHandleShowModal(price, 'price')} className='flex-1 mx-[3px]'>
          <InputSearch IconBefore={<RiMoneyDollarCircleLine />} IconAfter={<MdOutlineNavigateNext />} text={
            // @ts-ignore
            queries.price} defaultText={'Chọn giá'} fontWeight={undefined} />
        </span>
        <span onClick={createHandleShowModal(acreage, 'acreage')} className='flex-1 mx-[3px]'>
          <InputSearch IconBefore={<SlCrop />} IconAfter={<MdOutlineNavigateNext />} text={
            // @ts-ignore
            queries.acreage} defaultText={'Chọn diện tích'} fontWeight={undefined} />
        </span>
        <span className='flex-1 mx-[5px]'>
          <Button text={'Tìm kiếm'} onClick={handleSearch} className={'w-full h-[35px] text-[#fff] text-[13px] bg-[#0071c2] font-bold'} icon={<CiSearch />} bgColor={undefined} textColor={undefined} px={undefined} />
        </span>
      </div>
      {isShowModal && <PopupSearch handleSubmit={handleSubmit} queries={queries} name={name} content={content} setIsShowModal={setIsShowModal} />}
    </React.Fragment>
  );
}

export default SearchPage;