import axios from "axios";

export const api = axios.create({
  baseURL: 'https://rezervacesutb.wz.cz/api/',
  headers: {
    'Content-Type': 'Application/json',
  },
});