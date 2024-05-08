import axios from 'axios'
import { config } from '../framework/config.mjs'

export const generateToken = async () => {
  const url = `${config.baseUrl}/Account/v1/GenerateToken`
  const body = {
    userName: config.UserName,
    password: config.basePassword,
  }
  const response = await axios.post(url, body)
  return response.data.token
}

export const createBook = async token => {
  const url = `${config.baseUrl}/BookStore/v1/Books`
  const body = {
    userId: config.baseid,
    collectionOfIsbns: [
      {
        isbn: config.isbn[1],
      },
    ],
  }
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  const response = await axios.post(url, body, { headers })
  return {
    status: response.status,
    data: await response.data,
  }
}

export const changeBook = async token => {
  const url = `${config.baseUrl}/BookStore/v1/Books/${config.isbn[1]}`
  const body = {
    userId: config.baseid,
    isbn: config.isbn[0],
  }
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  const response = await axios.put(url, body, { headers })
  return {
    status: response.status,
    data: await response.data,
  }
}

export const getBook = async isbn => {
  const url = `${config.baseUrl}/BookStore/v1/Book?ISBN=${isbn}`
  const response = await axios.get(url)
  return {
    status: response.status,
    data: await response.data,
  }
}

export const deleteBook = async token => {
  const url = `${config.baseUrl}/BookStore/v1/Book`
  const body = {
    isbn: config.isbn[0],
    userId: config.baseid,
  }
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  const response = await axios.put(url, body, { headers })
  return {
    status: response.status,
    data: await response.data,
  }
}

// deleteBook(TOKEN)
//   .then((result) => {
//     console.log('status:', result.status);
//     console.log('data:', result.data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

// getBook(config.isbn[0])
//   .then((result) => {
//     console.log('status:', result.status);
//     console.log('data:', result.data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

// generateToken()
//   .then((result) => {
//     console.log('status:', result.status);
//     console.log('data:', result.data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

// createBook(TOKEN)
//   .then((result) => {
//     console.log('status:', result.status);
//     console.log('data:', result.data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

// changeBook(TOKEN)
//   .then((result) => {
//     console.log('status:', result.status);
//     console.log('data:', result.data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
