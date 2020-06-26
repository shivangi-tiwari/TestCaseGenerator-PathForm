function generateInt(min,max)
{
    return parseInt(Math.random()*(max-min)+min).toFixed();
}

function generateFloat(min,max)
  { 
      return parseFloat(Math.random()* (max-min)+min).toFixed(7);
  }
  
  function generateDouble(min,max)
  { 
    return (Math.random() * (max - min) + min).toFixed(15);
  }
  

  function generateTestCase(dataType,min,max,number){
      let tests ="";
      if(number>1000000||number<0){
      tests = "invalid bound!!";
      
      }
      else{
      switch(dataType){

          case "int":
              for(let i =0;i<number;i++)
              tests = tests.concat(generateInt(min,max)," ");
              tests = tests.concat("      \n     ")
              break;

              case "float":
              for(let i =0;i<number;i++)
              tests = tests.concat(generateFloat(min,max)," ");
              tests = tests.concat("       \n     ")
              break;

              case "double":
              for(let i =0;i<number;i++)
              tests = tests.concat(generateDouble(min,max)," ");
              tests = tests.concat("       \n     ")
              break;
              

              default :
              tests = dataType+"isn't supported! \n"
              break;
      }
      }


              return tests;
    }
      


      module.exports =function(dataType,min,max,number){
        return generateTestCase(dataType,min,max,number);
      }
  
  
  
