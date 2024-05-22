import axios from 'axios'
import { getSession } from 'next-auth/react'
import { auth } from '../auth/auth'

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use(async (config: any) => {
    const session = await auth()
    config.headers.Authorization = `Bearer ${(session as any).sessionToken}`
    return config
})

export default api;