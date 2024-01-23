const express = require('express');
const app = express();
const productRoutes = require('./Routes/routes');

app.use(express.static('public'));

app.get('/test', (req, res) => {
    console.log(req);
    res.send('Testing fake store');
  });
  
app.use('/api/products', productRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
