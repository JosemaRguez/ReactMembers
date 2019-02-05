var express = require('express')
var router = express.Router()
var request = require('request')


router.get('/', (req, res) => {
	console.log(req.query.page)
	var options = { method: 'GET',
	url: 'http://work.mediasmart.io/',
	qs: { page: req.query.page, page_size: 24 },
	headers: {
		'cache-control': 'no-cache',
		Authorization: 'mediasmart2019',
		'Content-Type': 'application/json' },
		form: false }

	request(options, function (error, response, body) {
  		if (error) throw new Error(error)
  		var members = JSON.parse(body)
    	res.send(members)
	})
})

module.exports = router;


