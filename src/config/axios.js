import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: 'http://18.230.188.15:4000'
})

export default clienteAxios