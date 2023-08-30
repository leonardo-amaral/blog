import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:1313/',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('@blogs:token')}`
  }
})
