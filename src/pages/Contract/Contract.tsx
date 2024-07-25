import React, {useEffect, useState} from 'react'
import { apiGetContract } from '../../service/contract'
import { useSelector } from 'react-redux';
import Button from "../../components/Button/Button.tsx"
import PopupShowQR from './component/PopupShowQR.tsx';

const Contract = () => {
interface ContractType {
    contractId: string;
    username: string;
    phone: string;
    title: string;
    address: string;
    monthlyRateString: string;
    dailyRate: number;
    acreage: number;
    startDate: string;
    endDate: string;
    bookingDate: string;
    totalCost: number;
    amountToPay?: number;
}
    const {id , username, phone} = useSelector((state: any) => state.auth);
    const [dataContract, setDataContract] = useState<ContractType[]>([]);
    useEffect(() => {
      const getApiContract = async () => {
        const response = await apiGetContract({userId:id})
        if (response?.data?.response) {
            setDataContract(JSON.parse(response?.data?.response?.contractId) )
        }
    }
    getApiContract()
}, [])

const handleSettlement = (contract: any) => {
    const totalCost = contract?.totalCost;
    const deposit = totalCost * 0.5; // Giả sử tiền cọc là 50%
    const amount = totalCost - deposit;
    const newData = dataContract.map((item: any) => {
        if (contract?.contractId === item?.contractId) {
            return { ...item, amountToPay: amount , accept : 1};
        } else {
            return item;
        }
    });
    console.log(newData);
    
    setDataContract(newData);
};

const [isShowQR, setIsShowQR] = useState(false);

const handleShowQR = (item:any) => {
    const newData =  dataContract.map((item2: any) => {
        console.log(item2.contractId + " " + item.contractId);
        if (item2.contractId === item.contractId) {
            return { ...item, accept : 2};
        }else{
            return item2;
        }
    });
    
    setDataContract(newData);
    setIsShowQR(true);
  };

    
  return (
    <div className='bg-white w-full shadow-lg mt-[25px] rounded-[8px]'>
        <h2 className='text-center text-[25px] font-bold mb-[30px] pt-[30px]'>PHÒNG ĐẶT</h2>
        {dataContract?.length > 0 ?
            <div className="flex flex-wrap mb-[60px]">
                {dataContract?.map((item:any, index:any) => {
                    return(
                        <div key={index} className="w-[47%] h-[400px] shadow-xl relative m-auto border-[1px] mt-0 mb-[15px] rounded-[8px] mb-[40px]">
                            <div className=' p-[20px] h-[360px] overflow-y-auto'>
                                <p className='my-[5px]'> - Họ tên người đặt: <span className='font-bold'>{username}</span> </p>
                                <p className='my-[5px]'> - Số điện thoại:  <span className='font-bold'>{phone}</span> </p>
                                <p className='my-[5px]'> - Phòng: {item?.title}</p>
                                <p className='my-[5px]'> - {item?.address}</p>
                                <p className='my-[5px]'> - Giá thuê theo tháng: {item?.monthlyRateString}</p>
                                <p className='my-[5px]'> - Giá thuê theo ngày: {item?.dailyRate.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                <p className='my-[5px]'> - Diện tích: {item?.acreage}</p>
                                <p className='my-[5px]'> - Ngày thuê: {item?.startDate}</p>
                                <p className='my-[5px]'> - Ngày trả: {item?.endDate}</p>
                                <p className='my-[5px]'> - Ngày đặt: {item?.bookingDate}</p>
                                <p className='my-[5px]'> - Tiền cọc (50%): {item?.totalCost ? item?.totalCost?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : ""}</p>
                                <p className='my-[5px]'> - Tổng tiền cần thanh toán:  <span className='font-bold'>{item?.amountToPay ? item?.amountToPay.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : " "}</span></p>
                            </div>
                            <div className='absolute bottom-[0px] w-[100%]'>
                                {
                                   (() => {
                                    if (item?.accept === 1) {
                                        return (
                                            <Button text={`XÁC NHẬN`} onClick={() => handleShowQR(item)} 
                                            className={'w-full rounded-t-[0px] text-center font-bold bg-cyan-400 hover:bg-sky-500 hover:no-underline'} 
                                            icon={undefined} bgColor={undefined} textColor={undefined} px={undefined} />
                                        )
                                    }else if (item?.accept === 2) {
                                        return(
                                            <Button text={'ĐẶT LẠI'} onClick={undefined}
                                            className={'w-full rounded-t-[0px] text-[14px] font-bold text-center bg-red-400  hover:bg-pink-500 hover:no-underline'}
                                            icon={undefined} bgColor={undefined} textColor={undefined} px={undefined} />
                                        )
                                    }else {
                                        return(
                                            <Button text={'THANH LÝ HỢP ĐỒNG'} onClick={() => handleSettlement(item)}
                                            className={'w-full rounded-t-[0px] text-[14px] font-bold text-center bg-[#febb02] hover:bg-yellow-600 hover:no-underline'}
                                            icon={undefined} bgColor={undefined} textColor={undefined} px={undefined} />
                                        )
                                    } 
                                })()
                            }
                            </div>
                        </div>
                    )
                })}
            </div>
            :
            <div className="">
                <img className='w-[100%] h-[100%] boder-none' src={`https://res.cloudinary.com/drorqx56b/image/upload/v1720388554/Homstay%20Healing/Capture_qxtuiy.png`} alt="Danh sách trống " />
            </div>
        }
        {isShowQR && <PopupShowQR  setIsShowQR={setIsShowQR} />}
    </div>
  )
}

export default Contract


