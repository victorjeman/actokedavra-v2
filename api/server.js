const bodyParser = require('body-parser');
const fs = require('fs');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const data = require('./data/db.json');

const SECRET_KEY = '123456789';
const EXPIRES_IN = '1h';

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { EXPIRES_IN });
}

function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => (decode !== undefined ? decode : err));
}

function isAuthenticated({ email, password }) {
  return data.users.findIndex((user) => user.email === email && user.password === password) !== -1;
}

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.post('/auth/login', (req, res) => {
  console.log('login endpoint called; request body:');
  console.log(req.body);

  const { email, password } = req.body;

  if (isAuthenticated({ email, password }) === false) {
    const status = 401;
    const message = 'Incorrect email or password';
    res.status(status).json({ status, message });
    return;
  }
  const access_token = createToken({ email, password });
  console.log('Access Token:' + access_token);
  res.status(200).json({ access_token });
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(' ')[0] !== 'Bearer'
  ) {
    const status = 401;
    const message = 'Error in authorization format';
    res.status(status).json({ status, message });
    return;
  }
  try {
    let verifyTokenResult;
    verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);

    if (verifyTokenResult instanceof Error) {
      const status = 401;
      const message = 'Access token not provided';
      res.status(status).json({ status, message });
      return;
    }
    next();
  } catch (err) {
    const status = 401;
    const message = 'Error access_token is revoked';
    res.status(status).json({ status, message });
  }
});

server.get('/reset', (req, res) => {
  res.jsonp(req.query);

  const src = './api/data/db.example.json';
  const dest = './api/data/db.json';

  fs.copyFile(src, dest, (error) => {
    if (error) {
      console.error(error);
      return;
    }

    console.log('DB reset successfully!');
  });
});

server.use(router);

server.listen(8080, () => {
  console.log('JSON Server is running, see http://localhost:8080');
});
