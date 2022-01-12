const express = require('express')
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hi people!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})