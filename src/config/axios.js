import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: 'http://54.232.196.67:4000'
})

export default clienteAxios