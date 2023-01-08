const express = require('express');
const app = express();
const path = require('path');
const routes = require(path.resolve(__dirname, 'routes'));

app.use(routes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running http://localhost:${process.env.PORT || 3000}`);
});
