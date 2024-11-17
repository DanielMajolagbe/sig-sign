const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/routes');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));
app.use('/api', routes); // Routes for handling form submission

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
