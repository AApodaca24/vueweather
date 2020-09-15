const express = require('express');
const morgan = require('morgan');
const path = require('path');

// INit App variable
const app = express();

app.use(morgan('dev'));
// app.use(helmet());

app.use(express.static('dist'));
app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html')),
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
