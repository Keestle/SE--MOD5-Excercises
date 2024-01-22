const express = require('express');
const testRoutes = require('./calculatorRoutes/calculatorRoutes');
const testRoutes2 = require('./Routes/userRoutes');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use(express.json());
app.use("/calculator", testRoutes);

app.get('/test', (req, res) => {
  console.log(req);
  res.send('Use the force Luke');
});

// Serve static files from the 'Public' directory
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use('/', express.static('Public'));