import axios from 'axios'
import { config } from '../framework/config.mjs'
import { GenerateUsers } from '../framework/fixtures.mjs'

export const createUser = async () => {
  const url = `${config.baseUrl}/user/createWithList`
  const user = GenerateUsers()
  const user1 = [user]
  const response = await axios.post(url, user1)
  return {
    status: response.status,
    data: await response.data,
  }
}

export const getUsers = async (login) => {
  const url = `${config.baseUrl}/user/${login}`
  const response = await axios.get(url)
  return {
    status: response.status,
    data: await response.data,
  }
}

export const LogIn = async (login, password) => {
  const url = `${config.baseUrl}/user/login?=${login}&password?=${password}`
  const response = await axios.get(url)
  return {
    status: response.status,
    data: await response.data,
  }
}

export const DELETE = async login => {
  const url = `${config.baseUrl}/user/${login}`
  const response = await axios.delete(url)
  return {
    status: response.status,
    data: await response.data,
  }
}
