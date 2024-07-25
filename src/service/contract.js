import axiosConfig from "../axiosConfig"
import axios from 'axios'

export const apiGetContract = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/contract/all',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiAddContract = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/contract/add',
            data : payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})