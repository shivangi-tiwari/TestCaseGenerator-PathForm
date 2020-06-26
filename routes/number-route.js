const generateTestCase = require('../src/numbers.js');

module.exports = function(app){

	app.get('/api/PRIMITIVE/:dataType/:min/:max/:number', (req, res) => {
		const dataType = req.params.dataType;
		const number = parseInt(req.params.number);
		const min = parseFloat(req.params.min);
		const max = parseFloat(req.params.max);
		console.log(`Data Structure: PRIMITIVE, Data Type: ${dataType}, Number of Cases: ${number}, Min Value: ${min}, Max Value: ${max}`);
		const out = generateTestCase(dataType,min,max,number);
		console.log(out);
		res.json({output : out});
		
	});

	
		


};
