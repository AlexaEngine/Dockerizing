const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
