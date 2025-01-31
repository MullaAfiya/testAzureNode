const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello, Afiya from Clover infotech.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
