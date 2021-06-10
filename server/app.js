require('dotenv').config();
const express = require('express');
const morgan = require('morgan');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname + '/..client/public'));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('tiny'));
}





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
