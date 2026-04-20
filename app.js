const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Jenkins CI/CD Working 🚀 Version 2");;
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
