import axios,{AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

import { REACT_APP_API_URL } from '../utils/constants'

const host = axios.create({
    baseURL:REACT_APP_API_URL
})

const authInterceptor = (config:AxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    config.headers!.authorization = `Bearer ${token}`; 
    return config
}

const authHost = axios.create({
    baseURL:REACT_APP_API_URL
})

authHost.interceptors.request.use(authInterceptor)
export {authHost,host}
