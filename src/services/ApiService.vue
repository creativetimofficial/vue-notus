<script>
import axios from 'axios';

const DOMAIN = process.env.VUE_APP_API_PATH_V2;

const instance = axios.create({
  baseURL: DOMAIN
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      config.headers['access_token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

async function entry(type,data) {
  const response = await instance.post('/api/'+type,data);
  return response.data;
}

export default {
  entry
}

</script>