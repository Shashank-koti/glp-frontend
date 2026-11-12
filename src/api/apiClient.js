import axios from 'axios';

const rawUrl = (import.meta.env.VITE_API_URL || 'https://api.glppharmastandards.com/api').trim().replace(/\/+$/, '');
export const API_BASE_URL = rawUrl.endsWith('/api') ? rawUrl : `${rawUrl}/api`;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Automatically attach JWT token if available in localStorage
apiClient.interceptors.request.use(
  (config) => {
    try {
      const storedUser = localStorage.getItem('glp_user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user?.token && !config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${user.token}`;
        }
      }
    } catch (e) {
      console.error('Error attaching auth token in apiClient', e);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
