const router = require('./routes/index');
const cors = require('./middleware/cors');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
const PORT = 8000;

app.use(helmet());
app.use(morgan('combined'));
app.use(cors)

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Welcome to FigEvents API')
});

app.listen(PORT);