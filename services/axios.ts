import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://anatolyvase-diplom-api-60e5.twc1.net',
  withCredentials: true,
})