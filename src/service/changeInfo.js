import axiosConfig from "../axiosConfig"
export const changeInfo = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/auth/changeInfo',
            data: payload
        })
        console.log(response);
        resolve(response)
    } catch (error) {
        reject(error)
    }
})