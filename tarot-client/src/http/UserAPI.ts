import axios from 'axios'
import { authHost, host } from '.'
import { REACT_APP_API_URL } from '../utils/constants'
import jwt_decode from 'jwt-decode'

export async function login(email: string, password: string) {
    try {
        const res = await host.post(`/api/users/login`, { email, password })
        localStorage.setItem('token', res.data)
        return jwt_decode(res.data)
    }
    catch (e) {
        console.log(e)
    }
}

export async function register(email: string, password: string) {
    try {
        const res = await host.post(`/api/users/register`, { email, password })
        localStorage.setItem('token', res.data)
        return jwt_decode(res.data)
    }
    catch (e) {
        console.log(e)
    }
}

export async function getUsers() {
    const res = await authHost.get('/api/users')
    return res.data
}