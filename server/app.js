require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');


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


app.get('/dish/:name', (req, res) => {

  axios.get(`/food/wine/pairing?food=${req.params.name}`,

    {
      baseURL: process.env.API_URL,
      params: { apiKey: process.env.API_KEY },

    }
  )
    .then(data => {

      res.json(data.data);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(404);
    });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
