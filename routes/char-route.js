const generateTestCasesChar = require('../src/character.js');

module.exports = function(app){

	
	app.get('/api/PRIMITIVE/char/:number/:charSet', (req,res)=>{
		const number = parseInt(req.params.number);
		const charSet = req.params.charSet;
		console.log(`Data Structure: PRIMITIVE, Data Type: char, Number of Cases: ${number}, charSet: ${charSet}`);
		const out = generateTestCasesChar(number,charSet);		
		console.log(out);
		res.json({output : out});
	});



};