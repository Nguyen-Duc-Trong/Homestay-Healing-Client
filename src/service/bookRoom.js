import axiosConfig from "../axiosConfig"
import axios from 'axios'
export const apiGetBookRoom = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/bookRoom/all',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiAddBookRoom = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/bookRoom/add',
            data : payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiDeleteBookRoom = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/bookRoom/delete',
            data : payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})