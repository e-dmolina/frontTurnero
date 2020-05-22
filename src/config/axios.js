import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://54.233.102.82:4000'
})

export default clienteAxios