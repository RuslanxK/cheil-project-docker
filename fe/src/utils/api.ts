import axios from 'axios';

const BASE_URL = process.env.VITE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

const handleRequest = async (request: Promise<any>) => {
  try {
    const response = await request;
    return response.data;
  } catch (error: any) {
    console.error('API Error:', error.message);
    throw error.response?.data || new Error('API Request failed');
  }
};

export const API_URLS = {
  products: '/products',
  product: '/product',
};


export const getData = (url: string) => handleRequest(api.get(url));

export const createData = (url: string, body: any) => handleRequest(api.post(url, body));

export const updateData = (url: string, body: any) => handleRequest(api.put(url, body));

export const deleteData = (url: string) => handleRequest(api.delete(url));
