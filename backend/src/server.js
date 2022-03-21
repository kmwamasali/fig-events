const router = require('./routes/index');
const cors = require('./middleware/cors');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.tylxj.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// server constants
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