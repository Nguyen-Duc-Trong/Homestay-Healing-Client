import React, {useState,useEffect} from 'react'
import InputForm from '../../components/Input/Input.tsx';
import Button from '../../components/Button/Button.tsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { apiLogin, apiRegister } from "../../service/auth.js";
import { actionTypes } from '../../redux/actions/actionTypes.js';
import {useDispatch, useSelector} from 'react-redux'
import {setActiveItem} from "../../redux/slides/main1Slide.js"
const LoginPage = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isLoggedIn} = useSelector((state:any)=> state.auth)
  const [isRegister, setIsRegister] = useState(location.state?.flag)
  const [payload, setPayload] = useState({name: '',phone: '',password: ''})  
  const [invalidFields, setInvalidFields] = useState([{name : "",message : ""}])  
  useEffect(() => {
    setIsRegister(location.state?.flag)
  }, [location.state?.flag])

  useEffect(() => {
    isLoggedIn && navigate('/')
  }, [isLoggedIn, navigate])
  const handleSubmit = async () => {
  if(isRegister){
    if(payload.name && payload.password && payload.phone){
      try {
        const response = await apiRegister(payload);
        if(response.data.err === 0 ){
        dispatch({ type: actionTypes.REGISTER_SUCCESS, data: response.data })
        navigate('/login'); 
        dispatch(setActiveItem(1))
        alert("Đăng ký thành công!")
        }else{
          alert(response.data.msg)
        };
        ;
      } catch (error) {
        dispatch({ type: actionTypes.REGISTER_FAIL, data: error.msg });
      }
    }else{
      alert("bạn điền thiếu thông tin")

  }}else{
    if( payload.password && payload.phone){
    try {
      const response = await apiLogin(payload);
      if (!response?.data?.checkPhone) {
        alert("Bạn điền sai số điện thoại!")        
      }else if(!response?.data?.checkPass){
        alert("Bạn điền sai mật khẩu!")
      }else if(response?.data?.checkPhone && response?.data?.checkPass){
          dispatch({ type: actionTypes.LOGIN_SUCCESS, data: response.data })
          navigate('/');
          dispatch(setActiveItem(1))
          alert("Đăng nhập thành công!")
      }else{
          dispatch({type : actionTypes.LOGOUT})
          alert(response.data.msg)
      }
      // console.log(response);
 
    } catch (error) {
      alert(error)
      dispatch({ type: actionTypes.LOGIN_FAIL, data: error.msg });
    }
  }else if( !payload.password && !payload.phone){
    alert("Bạn điền thiếu thông tin!")
  }else if( payload.password && !payload.phone){
    alert("Bạn điền thiếu số điện thoại!")
  }else if( !payload.password && payload.phone){
    alert("Bạn điền thiếu mật khẩu!")
  }
}
}
  return (
    <section className='mw-600 m-auto my-[10px]'>
      <div className='bg-[#ffffff] max-w-[600px] m-auto px-[30px] pt-[30px] pb-[100px] rounded-[10px]'>
        <h1 className='text-[28px] font-bold flex justify-center'>{isRegister ? 'ĐĂNG KÍ TÀI KHOẢN' : 'ĐĂNG NHẬP'}</h1>
        <React.Fragment>
        {isRegister && <InputForm
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields} label={'HỌ TÊN'}
                        value={payload.name}
                        setValue={setPayload}
                        keyPayload={'name'}
                        type='name'

                    />}
                    <InputForm
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        label={'SỐ ĐIỆN THOẠI'}
                        value={payload.phone}
                        setValue={setPayload}
                        keyPayload={'phone'}
                        type='phone'
                    />
                    <InputForm
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        label={'MẬT KHẨU'}
                        value={payload.password}
                        setValue={setPayload}
                        keyPayload={'password'}
                        type='password'
                    />
        </React.Fragment>
        <div className='mb-[20px] mt-[20px]'>
          <Button
            text={isRegister ? 'Đăng kí' : 'Đăng nhập'}
            className={'bg-[#3961fb] text-[#ffffff] w-full h-[45px] font-bold'} onClick={handleSubmit} icon={undefined} bgColor={undefined} textColor={undefined} px={undefined}          />
        </div>
        <div className='flex justify-between'>
          {
          isRegister 
          ? 
              <React.Fragment>
                <small className=''>
                  Bạn đã có tài khoản?
                  <span onClick={() => { setIsRegister(false)
                    setPayload({
                      name: '',
                      phone: '',
                      password: ''
                    })
                   }} className='text-[#1266dd] text-[14px] cursor-pointer hover:text-[#f60]'> Đăng nhập ngay</span>
                </small>
              </React.Fragment>
          : 
              <React.Fragment>
                <small className='text-[#1266dd] text-[14px] cursor-pointer hover:text-[#f60]'>Bạn quên mật khẩu</small>
                <small onClick={() => {setIsRegister(true)
                   setPayload({
                    name: '',
                    phone: '',
                    password: ''
                  })
                }} className='text-[#1266dd] text-[14px] cursor-pointer hover:text-[#f60]'>Tạo mật khẩu mới</small>
              </React.Fragment>
          }
        </div>
      </div>
    </section>
  )
}

export default LoginPage