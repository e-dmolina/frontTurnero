import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: 'http://54.233.102.82:4000'
})

export default clienteAxios