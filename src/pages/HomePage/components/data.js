export const data = [
    {
        id : 1,
        value : "Cho thuê phòng trọ",
        categoryCode : "ChoThuePhongtro"
    },
    {
        id : 2,
        value : "Nhà cho thuê",
        categoryCode : "NhaChoThue"
    },
    {
        id : 3,
        value : "Cho thuê căn hộ",
        categoryCode : "ChoThueCanHo"
    },
]
export const dataPrice1 =  [
    {
        min: 0,
        max: 1,
        value:  'Dưới 1 triệu',
    },
    {
        min: 1,
        max: 2,
        value:  'Từ 1-2 triệu', 
    },
    {
        min: 2,
        max: 3,
        value:  'Từ 2-3 triệu', 
    },
    {
        min: 3,
        max: 5,
        value:  'Từ 3-5 triệu',
    },
    {
        min: 5,
        max: 7,
        value:  'Từ 5-7 triệu',
    },
    {
        min: 7,
        max: 10,
        value:  'Từ 7-10 triệu',
    },
    {
        min: 10,
        max: 15,
        value:  'Từ 10-15 triệu',
    },
    {
        min: 15,
        max: 99999999999,
        value:  'Trên 15 triệu'
    }, 
]


export const dataAcreage1 = [
    {
        min: 0,
        max: 20,
        value: 'Dưới 20m'
    },
    {
        min: 20,
        max: 30,
        value: 'Từ 20-30m'
    },
    {
        min: 30,
        max: 50,
        value: 'Từ 30-50m'
    },
    {
        min: 50,
        max: 70,
        value: 'Từ 50-70m'
    },
    {
        min: 70,
        max: 90,
        value: 'Từ 70-90m'
    },
    {
        min: 90,
        max: 9999999999,
        value: 'Trên 90m'
    },
]



export const removeVnAndSpaces =(str)=> {
    return str
      .normalize('NFD') // Chuẩn hóa chuỗi
      .replace(/[\u0300-\u036f]/g, '') // Loại bỏ các dấu
      .replace(/đ/g, 'd').replace(/Đ/g, 'D') // Thay thế 'đ' và 'Đ'
      .replace(/\s+/g, ''); // Loại bỏ khoảng trắng
  }