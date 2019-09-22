import axios from 'axios';
import config from '../config/index';

const {
  paceatsApi: { apiUrl },
} = config;

export const paceatsApi = axios.create({
  baseURL: apiUrl,
});
