function generateCharSet(charSet){
	let len = charSet.length;
	return charSet[Math.floor(Math.random()*(len))];
}


function generateChar(number,charSet){
    let tests = "";
    if(number>1000000||number<0){
        tests = "invalid bound!!";
        
        }
        else{
	
	for(let i=0; i<number; ++i){
        tests = tests.concat(generateCharSet(charSet)," ");}
        tests = tests.concat("  \n    ")
    }
	

	return tests;
}


module.exports = function(number,charSet){
	return generateChar(number,charSet);
}

