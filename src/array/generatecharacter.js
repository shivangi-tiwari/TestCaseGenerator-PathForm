const generateTestCasesChar = require('../character.js');

module.exports={
 generate1DArrayChar:function(size,number,charSet){
    if(number<0||number>1000000)
    tests= "invalid bound!!";
        else{
	let tests = "";
	let res = "";
	for(let i=0;i<number;++i){
		res = generateTestCasesChar(size,charSet).replace(/\n/g,"");
		tests = tests.concat(res,"\n");
	}
        }
		return tests;
},

generate2DArrayChar :function(row,col,number,charSet){
    if(number<0||number>1000000)
    tests= "invalid bound!!";
        else{
	let tests = "";
    let res = "";
    for(let j=0; j<number; ++j){	
        for(let i=0; i<col; ++i){		
            res = generateTestCasesChar(row,charSet);
            tests = tests.concat(res,"\n");
        }
        tests = tests.concat("\n");
    }

}


		return tests;
}
};


