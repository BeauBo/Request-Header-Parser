const express = require('express');
const app = express();
const routes = require('./routes/api');
const useragent = require('express-useragent');

app.use(express.static('public'));
app.set('trust proxy', true);
//use useragent;
app.use(useragent.express());
//initialize routes
app.use('/api',routes);



app.listen(process.env.PORT || 3000, function(){
  console.log('Listening for requests!');
})
