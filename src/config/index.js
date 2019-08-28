const { NODE_ENV: environment } = process.env;

export default {
  authorization: {
    apiUrl: environment === 'development' ? 'http://localhost:4000' : 'http://api.apilouca.com/',
  },
};
