const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var request = require("request");

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/getMembers', (req, res) => {
console.log(req.query.page)
  var options = { method: 'GET',
  url: 'http://work.mediasmart.io/',
  qs: { page: req.query.page, page_size: '6' },
  headers: {
   	'cache-control': 'no-cache',
     Authorization: 'mediasmart2019',
     'Content-Type': 'application/json' },
  form: false }


request(options, function (error, response, body) {
	var members = JSON.parse(body)

  	if (error) throw new Error(error)
    res.send(members)
    
});

});


app.listen(port, () => console.log(`Listening on port ${port}`));


module.exports = app;


