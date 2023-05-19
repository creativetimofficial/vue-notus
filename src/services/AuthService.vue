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

async function login(email, password) {
  const response = await instance.post('/auth/login', {
    email: email,
    password: password
  });
  return response.data;
}

async function register(name, password, email) {
  const response = await instance.post('/auth/register', {
    name: name,
    password: password,
    email: email
  });
  return response.data;
}

async function logout() {
  const response = await instance.get('/auth/logout');
  return response.data;
}

async function authenticate(email, password) {
  const response = await instance.post('/auth/authenticate', {
    email: email,
    password: password
  });
  return response.data;
}

async function check() {
  //retrive access token header
  const response = await instance.get('/auth/check');
  return response.status;
}

export default {
  login,
  register,
  logout,
  authenticate,
  check
}

</script>