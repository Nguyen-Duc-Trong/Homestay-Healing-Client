import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeInfo } from '../../../service/changeInfo.js';
import {actionTypes} from '../../../redux/actions/actionTypes.js'
const Information = () => {
  const dispatch = useDispatch()
  const { username, phone, id, avatar, zalo } = useSelector((state: any) => state.auth);
  const [showModal, setShowModal] = useState(false);
  const [newAvatar, setNewAvatar] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [payload, setPayload] = useState({
    username: username,
    phone: phone,
    id: id,
    avatar: avatar,
    zalo: zalo,
    newPassword: ""
  });
// console.log(payload);

  const handleSubmit = async () => {
    if (!password) {
      alert("Bạn chưa nhập mật khẩu");
    } else {
      try {
        const formData = new FormData();
        formData.append('id', payload.id);
        formData.append('password', password);
        formData.append('newPassword', payload.newPassword);
        formData.append('username', payload.username);
        formData.append('phone', payload.phone);
        formData.append('zalo', payload.zalo);
        if (payload.avatar instanceof File) {
          formData.append('avatar', payload.avatar);
        }
        const response = await changeInfo(formData);
        dispatch({ type: actionTypes.CHANGE_INFO, data: response.data })
        // console.log(response);
        setNewAvatar(null)
        setPayload({...payload, newPassword : ""})
        setShowModal(false);
        setPassword('');
      } catch (error) {
        alert("Bạn nhập sai mật khẩu!");
      }
    }
  };

  const handlePostPayload = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Bạn có chắc muốn thay đổi thông tin!")) {
      setShowModal(true);
    } else {
      alert("Bạn đã hủy thay đổi thông tin");
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setPayload((pre) => ({ ...pre, avatar: file }));
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setNewAvatar(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="h-[100vh] overflow-auto">
      <h1 className='text-[30px] font-[600]'>Cập nhật thông tin cá nhân</h1>
      <form className="p-[30px] w-[70%]">
        <table className='w-[70%] m-[auto] border-spacing-3'>
          <tbody>
            <tr>
              <td><label className='font-[500] text-[1.2rem]' htmlFor="id">Mã thành viên</label></td>
              <td>
                <p title='Không thể đổi mã tài khoản' className='w-[100%] bg-gray-400 p-[5px] border-[2px] min-w-[100%]' id='id'>{id}</p>
              </td>
            </tr>
            <tr>
              <td><label className='font-[500] text-[1.2rem]' htmlFor="phone">Số điện thoại</label></td>
              <td>
                <input
                  type="text"
                  value={payload.phone}
                  onChange={(e) => setPayload((pre) => ({ ...pre, phone: e.target.value }))}
                  className='p-[5px] border-[2px] min-w-[100%]'
                  id='phone'
                />
              </td>
            </tr>
            <tr>
              <td><label className='font-[500] text-[1.2rem]' htmlFor="username">Tên hiển thị</label></td>
              <td>
                <input
                  type="text"
                  value={payload.username}
                  onChange={(e) => setPayload((pre) => ({ ...pre, username: e.target.value }))}
                  className='p-[5px] border-[2px] min-w-[100%]'
                  id='username'
                />
              </td>
            </tr>
            <tr>
              <td><label className='font-[500] text-[1.2rem]' htmlFor="zalo">Số Zalo</label></td>
              <td>
                <input
                  placeholder='nhập số điện thoại'
                  value={payload.zalo}
                  onChange={(e) => setPayload((pre) => ({ ...pre, zalo: e.target.value }))}
                  type="text"
                  className='p-[5px] border-[2px] min-w-[100%]'
                  id='zalo'
                />
              </td>
            </tr>
            <tr>
              <td><label className='font-[500] text-[1.2rem]' htmlFor="password">Mật khẩu</label></td>
              <td>
                <input
                  placeholder='nhập mật khẩu mới'
                  value={payload.newPassword}
                  onChange={(e) => setPayload((pre) => ({ ...pre, newPassword: e.target.value }))}
                  type="password"
                  className='p-[5px] border-[2px] min-w-[100%]'
                  id='password'
                />
              </td>
            </tr>
            <tr>
              <td><label className='font-[500] text-[1.2rem]' htmlFor="changeAvatar">Ảnh đại diện</label></td>
              <td>
                <div className="flex">
                  <img className='w-[100px] h-[100px] shadow-[1px_1px_1px_1px_#a7acaf] m-[10px]' src={avatar} alt="avatar" />
                  {newAvatar &&
                    <img
                      className='w-[100px] h-[100px] shadow-[1px_1px_1px_1px_#a7acaf] m-[10px]'
                      src={newAvatar as string}
                      alt="avatar"
                    />
                  }
                </div>
                <input
                  type="file"
                  onChange={handleAvatarChange}
                  className='border-[2px] min-w-[100%]'
                  id='changeAvatar'
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button
                  onClick={handlePostPayload}
                  name="button" type="button"
                  className='w-[100%] h-[50px] text-center bg-green-500 font-[600] text-white text-[1.2tem]'
                >
                  Lưu thay đổi & Cập nhật
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <button
              className="float-right text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="mb-4 text-xl font-bold">Hãy nhập lại mật khẩu:</h2>
            <input
              type="password"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-full px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-700"
              onClick={handleSubmit}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Information;
