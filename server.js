const express = require('express');
const app = express();

app.use(express.static('bundle'));
app.use(express.static('css'));

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/app/index.html`);
})

app.listen(7777, () => {
  console.log('Listening on port 7777!');
})
