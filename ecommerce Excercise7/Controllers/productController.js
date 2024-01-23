const path = require('path');

const getProductPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/product.html'));
};

module.exports = {
    getProductPage,
};
