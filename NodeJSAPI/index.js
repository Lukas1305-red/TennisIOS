const express = require('express');
const fs = require('fs');
const app = express();

const PORT = '8080';

app.use(express.json())


app.listen(
  PORT, 
  () => console.log(`it is alive on http://localhost:${PORT}`)
);
app.get('/rankings', (req, res) => {
  const filePath = 'ranking.json';
  
  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
          return res.status(500).json({ error: 'Failed to read rankings file' });
      }
      res.json(JSON.parse(data));
  });
});
