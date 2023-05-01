import api from './apiConfig'
import jwtDecode from 'jwt-decode'
import axios from 'axios'


export const signUp = async (credentials) => {
    try {
    const resp = await axios.post('https://digimon-api.herokuapp.com/sign-up', credentials)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const signIn = async (credentials) => {
  try {
    const resp = await axios.post('https://digimon-api.herokuapp.com/sign-in', credentials)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const signOut = async () => {
  try {
    localStorage.removeItem("token")
    return true
  } catch (error) {
    throw error
  }
}

export const changePassword = async (passwords, user) => {
  try {
    const resp = await axios.post('https://digimon-api.herokuapp.com/')
    return resp.data
  } catch (error) {
    throw error
  }
}

export const verifyUser = async () => {
  const token = localStorage.getItem('token')
  if (token) {
    const res = await api.get('https://digimon-api.herokuapp.com/verify')
    return res.data
  }
  return false
}