const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const postsRoutes = require('./routes/postsRoutes');
const db = require('./db/connection');
const PORT = process.env.PORT || 3000

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'))

// appends /api before each route - http://localhost:3000/api/posts
app.use('/api', postsRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))