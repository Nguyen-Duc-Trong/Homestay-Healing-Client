import React ,{useState ,useEffect} from 'react'
import ItemSidebar from './HomeItem/ItemSidebar.tsx'
import { apiGetCategories } from '../../../service/category'
import { apiGetPrices } from '../../../service/price'
import { apiGetAcreages } from '../../../service/acreage'
// import {dataPrice1 ,dataAcreage1} from "./data.js"
import ItemSidebarPrice from './HomeItem/itemSidebarPrice.tsx'
import ItemSidebarAcreage from './HomeItem/ItemSidebarAcreage.tsx'

const Sidebar = () => {
    const [data ,setData] = useState({
        arr : [],
        msg : "",
      })
    const [dataPrice, setDataPrice] = useState({
        arr: [],
        msg : "",
      })
    const [dataAcreage, setDataAcreage] = useState({
        arr: [],
        msg: [],
      })
    useEffect(() => {
      categories()
      prices()
      acreage()
    }, [])

    const categories = async () => {
        try {
          const response = await apiGetCategories()
          if (response?.data.err  === 0) {
            setData({...data , arr : response.data.response})
          }else{
            setData({...data , msg : response.data.msg})
          }
      } catch (error) {
        setData({...data , msg : error})
      }}
    
    const prices = async () => {
        try {
          const response = await apiGetPrices()
          if(response?.data.err === 0) {
            setDataPrice({...dataPrice, arr: response.data.response.sort((a:any, b:any)=> {return +a.order - +b.order})})
          }else{
            setDataPrice({...dataPrice , msg : response.data.msg})
          }
        } catch (error) {
          setDataPrice({...dataPrice , msg : error})
        }
      }
    
    const acreage = async () => {
        try {
          const response = await apiGetAcreages()
          if(response?.data.err === 0) {
            setDataAcreage({...dataAcreage, arr: response.data.response.sort((a:any, b:any)=> {return +a.order - +b.order})})
          }else{
            setDataAcreage({...dataAcreage , msg : response.data.msg})
          }
        } catch (error) {
          setDataAcreage({...dataAcreage , msg : error})
        }
      }
      // console.log(dataPrice , dataAcreage);
      
    return (
        <div className='w-full'>
            <ItemSidebar content={data} title='Danh sách cho thuê' />
            <ItemSidebarPrice content={dataPrice} title={'Xem theo giá'} />
            <ItemSidebarAcreage content={dataAcreage} title={'Xem theo diện tích'} />
        </div>
  )
}

export default Sidebar