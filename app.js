import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
  res.send(
    '<h1>Hello Champ!</h1></br><h3>This is the main page of our website. It looks cool doesnt it?</h3>'
  );
});

app.get('/contact', (req, res, next) => {
    res.send(
      '<h1>Contact Page</h1>'
    );
  });

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
