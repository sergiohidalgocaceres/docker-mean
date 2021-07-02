const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();

app.use(cors());
app.get('/', async (req, res) => {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD,
  });
  const [products, fields] = await connection.execute('SELECT * FROM products');
  res.json(products);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ejecutándose en el puerto ${PORT}`));
