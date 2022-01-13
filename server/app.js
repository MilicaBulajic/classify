const express = require('express')
const app = express();
const port = process.env.PORT;
const userRouter = require("./routes/users");

app.use("/user", userRouter);

app.get('/', (req, res) => {
  res.send('Hi people!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})