const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('This World is sus');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
//aklsdjfs
