const fizzBuzz = function(data) {
    if(typeof(data) !== 'object'){
      console.log("data bukan array")
    }else{
      if(data.length > 0){
        for(let i=0; i<data.length;i++){
          if(data[i] % 5 ==0 && data[i]%3 == 0){
            console.log(data[i]," FizzBuzz")
          }else if(data[i] % 5 == 0){
            console.log(data[i]," Buzz")
          }else if(data[i] % 3 == 0){
            console.log(data[i]," Fizz")
          }else{
            console.log(data[i])
          }
        }
      }else{
        console.log('tidak ada datanya')
      }
    }
}

module.exports = fizzBuzz;