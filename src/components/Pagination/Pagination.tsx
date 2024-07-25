import React, { useEffect, useState, useRef, memo } from "react";
import ItemDetail from '../../pages/HomePage/components/HomeItem/ItemDetail.tsx';
import Button from "../Button/Button.tsx";
import { useSelector} from "react-redux"
import icons from '../../ultils/icons.js'
import {scrollToTop} from "../../ultils/scrollTop.js"
const {FaArrowLeft, FaArrowRight} = icons


const Pagination = ({ data = []}) => {
  const {area1} = useSelector((state:any) => state.search)
  const {postLimit} = useSelector((state:any) => state.postLimit)
  const activeItem = useSelector((state: any) => state.main1.activeItem); 
  const [newData , setNewData] = useState([])
  const [isLoading, setIsLoading] = useState(true); 
  
  const checkSearch = (arr:any ,postLimit:any)=>{
      const isEmptyObject = (obj:any) => {
        return Object.keys(obj).length === 0;
      };
      const filteredArr = arr.filter((item:any) => {
        if (isEmptyObject(postLimit)) {
          return true; 
        }  
        return Object.keys(postLimit).every(key => {
          const postLimitValue = postLimit[key];
          const itemValue = item[key];
          const itemAttributeValue = item.attributes ? item.attributes[key] : undefined;
          if (postLimitValue === 'all' || itemAttributeValue === 'all') {
            return true;
          }
          return postLimitValue === itemValue || postLimitValue === itemAttributeValue;
        });
      });
      // console.log(filteredArr);
      
    return filteredArr;
  }
    useEffect(() => {
        const loadData = () => {
          setIsLoading(true);
          let filteredData = [];
          switch (activeItem) {
            case 1:
              filteredData =  checkSearch(data, postLimit);
              break;
            case 2:
              const listCTPT = data.filter((item:any) =>{
                if ( item.categoryCode === 'ChoThuePhongTro') {
                  return item
                }
              }
            );
            filteredData = checkSearch(listCTPT, postLimit);
                break;
              case 3:
                const listNCT = data.filter((item:any) => {
                  if(item.categoryCode === 'NhaChoThue') {
                    return item
                  }
                })
                filteredData = checkSearch(listNCT, postLimit);
                break;
              case 4:
                const listCTCH = data.filter((item:any) => {
                  if(item.categoryCode === 'ChoThueCanHo') {
                    return item
                  }
                })
                filteredData = checkSearch(listCTCH , postLimit);
                break;
            default:
              filteredData = data;
              break;
          }
          setNewData(filteredData);
          setIsLoading(false);
        };
    loadData();
    }, [activeItem, data, area1, postLimit]);
    // console.log(newData);
    
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(perPage);
  const headerPostingLish = useRef()
  // Ensure data is defined before calling slice
  const record = newData.slice(start, end);
  const total = Math.ceil(newData.length / perPage);
  const number = [...Array(total + 1).keys()].slice(1);

  useEffect(() => {
    setStart((currentPage - 1) * perPage);
    setEnd(currentPage * perPage);
  }, [currentPage, perPage]);
  const showPage = newData?.length > 0 && newData.map((item:any, index:any) => {
    // console.log(newData);
    
    if (index >= start && index < end) {
      return (
          <div key={index}>
            <ItemDetail
              key={item?.id} 
              images={JSON.parse(item?.images?.image)} 
              address={item?.address} 
              attributes={item?.attributes}   
              description={JSON.parse(item?.description)}
              star={+item?.star}
              title={item?.title}
              users={item?.users}
              id={item?.id}
              Overviews={item?.Overviews}
            />
        </div>
      );
    }
    return null;
  });

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    scrollToTop()
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, total));
    scrollToTop()

  };

  const handleChange = (page:any) => {
    setCurrentPage(page);
    scrollToTop()

  };

  return (
    <div className="">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="box">{showPage}</div>
          <div className="box-btn flex">
            <Button text={''} onClick={handlePrev} className={"m-[5px] p-[5px] border-[2px]"} icon={<FaArrowLeft />} bgColor={undefined} textColor={undefined} px={undefined} />
            {number.map((it, index) => (
              <Button key={index} text={it} onClick={() => handleChange(it)} className={`m-[5px] p-[5px] border-[2px] text-center ${currentPage === it ? "bg-red-700 text-white" : ""}`} icon={undefined} bgColor={undefined} textColor={undefined} px={undefined} />
            ))}
            <Button text={''} onClick={handleNext} className={'m-[5px] p-[5px] border-[2px] text-center'} icon={<FaArrowRight />} bgColor={undefined} textColor={undefined} px={undefined} />
          </div>
        </>
      )}
    </div>
  );
};

export default memo(Pagination);
