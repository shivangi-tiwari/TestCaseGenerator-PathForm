
const generateTestCase = require('./number-route.js');
const generateTestCasesChar = require('./char-route.js');
const generateTestCasesArray = require('./array/array-route.js');

module.exports = function(app){

	app.get('/', (req,res)=>{
		res.send("Hell");
	});

	generateTestCasesChar(app);
	generateTestCase(app);
    generateTestCasesArray(app);
};