import axios from 'axios'

const api = axios.create({
  baseURL: 'https://65c9104ca4fbc162e112924d.mockapi.io/',
})

export { api }
