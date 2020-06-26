const {generate1DArrayChar,generate2DArrayChar} = require('../../src/array/generatecharacter.js');
const {generate1DArrayNumber,generate2DArrayNumber} = require('../../src/array/generatenumber.js');


module.exports = function(app){


    app.get('/',(req,res)=>{
        var queryParameter = req.query;
        res.json(queryParameter);	
    })


    app.get('/api/1DARRAY/char/:size/:number/:charSet', (req,res)=>{
		const size = parseInt(req.params.size);
		const number = parseInt(req.params.number);
		const charSet = req.params.charSet;
		console.log(`Data Structure: ARRAY, Size of ARRAY: ${size}, Data Type: char, Number of Cases: ${number}, charSet: ${charSet}`);
        const out = generate1DArrayChar(size,number,charSet);
        	
        console.log(out);
		res.json({output : out});
    });




    app.get('/api/2DARRAY/char/:row/:col/:number/:charSet', (req,res)=>{
        const row = parseInt(req.params.row);
        const col = parseInt(req.params.col);
		const number = parseInt(req.params.number);
		const charSet = req.params.charSet;
		console.log(`Data Structure: ARRAY, Row of ARRAY: ${row}, Column of ARRAY: ${col}, Data Type: char, Number of Cases: ${number}, charSet: ${charSet}`);
		const out = generate2DArrayChar(row,col,number,charSet);		
		console.log(out);
		res.json({output : [out]});
    });
    





	// suitable for Primitives like int, float, double
	app.get('/api/1DARRAY/:dataType/:size/:number/:min/:max', (req, res) => {
		const size = parseInt(req.params.size);
		const dataType = req.params.dataType;
		const number = parseInt(req.params.number);
		const min = parseInt(req.params.min);
		const max = parseInt(req.params.max);
		console.log(`Data Structure: ARRAY, Size of ARRAY: ${size}, Data Type: ${dataType}, Number of Cases: ${number}, Min Value: ${min}, Max Value: ${max}`);
		//res.send("Hello TestCaseGenerator");
		const out = generate1DArrayNumber(size,dataType,number,min,max);
		console.log(out);
		res.json({output : out});
	});




	app.get('/api/2DARRAY/:row/:col/:dataType/:number/:min/:max', (req, res) => {
		const row = parseInt(req.params.row);
		const col = parseInt(req.params.col);
		const dataType = req.params.dataType;
		const number = parseInt(req.params.number);
		const min = parseInt(req.params.min);
		const max = parseInt(req.params.max);
		console.log(`Data Structure: ARRAY, Row & Column of ARRAY: (${row},${col}) , Data Type: ${dataType}, Number of Cases: ${number}, Min Value: ${min}, Max Value: ${max}`);
		//res.send("Hello TestCaseGenerator");
		const out = generate2DArrayNumber(row,col,dataType,number,min,max);
		console.log(out);
		res.json({output : out});
	});




};