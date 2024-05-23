import axios from 'axios'


const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use(async (config: any) => {

    config.headers.Authorization = `Bearer ${process.env.PUBLIC_ACCESSTOKEN}`
    return config
})

export default api;