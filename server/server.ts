const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);

// server.post('/login', (req, res, next) => {
//   const users = readUsers();
//
//   const user = users.filter(
//     u => u.username === req.body.username && u.password === req.body.password
//   )[0];
//
//   if (user) {
//     res.send({ ...formatUser(user), token: checkIfAdmin(user) });
//   } else {
//     res.status(401).send('Incorrect username or password');
//   }
// });

// server.post('/register', (req, res) => {
//   const users = readUsers();
//   const user = users.filter(u => u.username === req.body.username)[0];
//
//   if (user === undefined || user === null) {
//     res.send({
//       ...formatUser(req.body),
//       token: checkIfAdmin(req.body)
//     });
//     db.users.push(req.body);
//   } else {
//     res.status(500).send('User already exists');
//   }
// });

// server.use('/users', (req, res, next) => {
//   if (isAuthorized(req) || req.query.bypassAuth === 'true') {
//     next();
//   } else {
//     res.sendStatus(401);
//   }
// });
server.post('/books', (req, res, next) => {
  req.body.id = Math.random() * 1000000;
  next();
});

server.get('/books', (req, res, next) => {
  next();
});

server.get('/books/:id', (req, res, next) => {
  next();
});


server.use('/cart', (req, res, next) => {
  next();
});

server.put('/books', (req, res, next) => {
  const books = readBooks();
  // const book = books.filter(b => b.id === req.body.id);

  const index = books.findIndex((book) => book.id === req.body.id);
  // res.send(req.body.book);
  db.books = [
    ...books.slice(0, index),
    req.body,
    ...books.slice(index + 1)
  ];
});

server.delete('/books', (req, res, next) => {
  next();
});



server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

function readBooks(): any {
  const dbRaw = fs.readFileSync('./server/db.json');
  return JSON.parse(dbRaw).books;
}
