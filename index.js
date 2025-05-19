const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('Webhook received:', req.body);
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('LINE WORKS Bot Webhook is running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});