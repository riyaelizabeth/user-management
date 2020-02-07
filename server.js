const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
app.listen(port, () => console.log(`listening to port ${port}`));

require('./db/mongoose');
require('./router')(app);

global.__base = `${__dirname}/`;