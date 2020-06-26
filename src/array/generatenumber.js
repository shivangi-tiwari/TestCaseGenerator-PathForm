const generateTestCase = require('../numbers.js')

module.exports={
 generate1DArrayNumber:function(size,dataType,number,min,max){
    let tests = "";
if(number<0||number>1000000)
tests= "invalid bound!!";
	else{	let res = "";
	for(let i=0; i<number; ++i){		
		res = generateTestCase(dataType,min,max,size).replace(/\n/g," ");
		tests = tests.concat(res,"\n");
	}
    }
	return tests;
},

generate2DArrayNumber:function(row,col,dataType,number,min,max){

    let tests = "";
    if(number<0||number>1000000)
tests= "invalid bound!!";
	else{
    let res = "";
    for(let j=0; j<number; ++j){	
	for(let i=0; i<row; ++i){		
		res = generateTestCase(dataType,min,max,col);
        tests = tests.concat(res,"\n");
    }
    tests = tests.concat("\n");
}}

	return tests;
}

};

