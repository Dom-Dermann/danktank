const express = require('express');
const ejs = require('ejs');
const uploads = require('./routes/uploads');
const root = require('./routes/root');


//Initialize app
const app = express();
// set up EJS as view engine
app.set('view engine', 'ejs');
// setting static folder
app.use(express.static('./public'));
// set routes
app.use('/uploads', uploads);
app.use('/', root);

const port = process.env.port || 3000;
app.listen(port, () => console.log(`We are listening on port ${port}`));