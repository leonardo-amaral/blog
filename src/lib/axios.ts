import axios from 'axios'

const token = JSON.parse(localStorage.getItem('@blogs-token') || 'null')

export const api = axios.create({
  baseURL: 'http://localhost:1313/',
  headers: {
    Authorization: `Bearer ${token}`
  }
})
