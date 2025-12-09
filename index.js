// console.log(`Hello from Node.js`);

import express from 'express';

const app = express();

// Root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Route to handle GET request for /x
app.get('/x', (req, res) => {
  res.send(`https://x.com/`);
});


app.get('/expressjs', (req, res) => {
  res.send(`https://expressjs.com/`);
});


app.get('/nodejs', (req, res) => {
  res.send(`https://nodejs.org/en`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
