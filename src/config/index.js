const { NODE_ENV: environment } = process.env;

const isDev = environment === 'development';
const localUrl = 'http://localhost:4000';
const paceatsUrl = 'https://paceats-api.herokuapp.com/api/v1';

export default {
  paceatsApi: {
    apiUrl: isDev ? localUrl : paceatsUrl,
  },
};
