import axios from 'axios';
import { basicHeader } from '@/apis/header';
import { healthEndpoint } from '@/apis/endpoints';

export const instance = axios.create({
  baseURL: '/api',
  header: basicHeader,
});

export const getHealth = () => instance.get(healthEndpoint);
