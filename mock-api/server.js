// server.js
const lodash = require('lodash');
const jsonServer = require('json-server');
const dbJson = require('./db.json');

const server = jsonServer.create();
const router = jsonServer.router(dbJson);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/public/auth/signin', (req, res) => {
  const { email, password } = req.body;
  const { db } = router;
  const user = db
    .get('users')
    .find({ email })
    .value();
  if (!user || user.password !== password) {
    return res.jsonp({ mensagem: 'Usuário e/ou password inválidos' });
  }
  return res.jsonp({
    _id: user.id,
    creationDate: user.creationDate,
    lastUpdate: user.lastUpdate,
    lastLogin: user.lastLogin,
    restaurantId: user.restaurantId,
    accessToken: 'eyJhbGciOiJ.eyJ1c2VyIjp7ImV.l7NuV-YeT_88',
  });
});

server.get('/order/restaurant/:restaurantId', (req, res) => {
  const { restaurantId } = req.params;
  const { db } = router;
  const orders = db
    .get('orders')
    // eslint-disable-next-line eqeqeq
    .filter((e) => e.restaurantId == restaurantId)
    .value();
  if (!orders || !orders.length) {
    return res.jsonp([]);
  }
  return res.jsonp(orders);
});

server.put('/order/status', (req, res) => {
  const { _id, newStatus } = req.body;
  const { db } = router;
  const order = db
    .get('orders')
    .find({ _id })
    .value();
  // eslint-disable-next-line eqeqeq
  lodash.remove(db.get('orders').value(), (o) => o._id == _id);
  db.get('orders')
    .push({ ...order, status: newStatus })
    .write();
  return res.jsonp({
    n: 1,
    nModified: 1,
    opTime: {
      ts: '6738547097487802369',
      t: 1,
    },
    electionId: '7fffffff0000000000000001',
    ok: 1,
    operationTime: '6738547097487802369',
    $clusterTime: {
      clusterTime: '6738547097487802369',
      signature: {
        hash: 'yZFLUJ2snJPqNKfFrET5zdbL9ik=',
        keyId: '6728249591273095169',
      },
    },
  });
});

server.get('/restaurant/details/:_id', (req, res) => {
  const { _id } = req.params;
  const { db } = router;
  const restaurant = db
    .get('restaurants')
    // eslint-disable-next-line eqeqeq
    .find((e) => e._id === _id)
    .value();
  if (!restaurant) {
    return res.jsonp({});
  }
  return res.jsonp(restaurant);
});

server.use(router);

server.listen(4000, () => {
  console.log('JSON Server is running');
});
