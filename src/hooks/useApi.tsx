import axios from 'axios'

export const useApi = () => {
  const api = axios.create({
    baseURL: 'http://localhost:1313/',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('@blogs:token')}`
    }
  })

  api.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 404) {
        console.log('404')
      }
      return Promise.reject(error)
    }
  )

  return { api }
}
