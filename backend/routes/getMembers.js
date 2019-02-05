var express = require('express')
var router = express.Router()
var request = require('request')


router.get('/', (req, res) => {
	console.log(`User has requested page number ${req.query.page} for ${req.query.page_size} pages `)
	var page = req.query.page
	var page_size = req.query.page_size

	var options = { method: 'GET',
	url: 'http://work.mediasmart.io/',
	qs: { page: page, page_size: page_size },
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


