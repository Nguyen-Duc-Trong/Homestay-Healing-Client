import React, { memo, useEffect, useState } from 'react'
import  Select  from '../../../components/Select/Select.tsx'
import { apiGetPublicProvinces, apiGetPublicDistrict } from '../../../service/app.js'
const Address = ({payload, setPayload }) => {

    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [province, setProvince] = useState('')
    const [district, setDistrict] = useState('')
    const [reset, setReset] = useState(false)
    useEffect(() => {
        const fetchPublicProvince = async () => {
            const response = await apiGetPublicProvinces()            
            if (response.status === 200) {
                const newData = response?.data.results.filter((item:any)=>{
                    const provinceId = item?.province_id
                    if( provinceId === "01" || provinceId === "79" ||provinceId === "52" || provinceId === "74" ){
                        return item
                    }
                })
                setProvinces(  response?.data.results)
            }
        }
        fetchPublicProvince()
    }, [])
    // console.log(province);
    
        // 01  79 52  74 
    useEffect(() => {
        setDistrict('')
        const fetchPublicDistrict = async () => {
            const response = await apiGetPublicDistrict(province)
            if (response.status === 200) {
                setDistricts(response.data?.results)
            }
        }
        province && fetchPublicDistrict()
        !province ? setReset(true) : setReset(false)
        !province && setDistricts([])
    }, [province])    
    useEffect(() => {
        setPayload(prev => ({
            ...prev,
            // @ts-ignore
            address:  ` ${district ? `${districts?.find((item:any) => item.district_id === district)?.district_name},` :''} ${province ? provinces?.find((item:any) => item.province_id === province)?.province_name : ''} `,
            // @ts-ignore
            province: province ? provinces?.find(item => item?.province_id === province)?.province_name : ''
        }))

    }, [province, district])
    return (
        <div>
            <h2 className='font-semibold text-xl py-4'>Địa chỉ cho thuê</h2>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                    <Select type='province' value={province} setValue={setProvince} options={provinces} label='Tỉnh/Thành phố' reset={undefined} name={undefined} />
                    <Select reset={reset} type='district' value={district} setValue={setDistrict} options={districts} label='Quận/Huyện' name={undefined} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor='exactly-address'>Địa chỉ chính xác</label>
                    <input type="text"  readOnly className='border-[1px] outline-none bg-gray-200' 
                    value={
                        // @ts-ignore
                        ` ${district ? `${districts?.find((item:any) => item?.district_id === district)?.district_name},` :''} ${province ? provinces?.find((item:any) => item.province_id === province)?.province_name : ''} `}
                    />
                </div>
            </div>
        </div>
    )
}

export default memo(Address)