import axios from 'axios'

import config from '../config'

const api = axios.create({
  baseURL: config.endpoint,
  validateStatus: () => true
})

export default api
