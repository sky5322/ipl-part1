function mostWinsPerYear(matches) {
    const result = {};
    for (let match of matches) {
      const winner = match.winner;
      const season=match.season;

      if (result[winner]) {
        
          if(result[winner][season]){
            result[winner][season]+=1;
          }else{
            result[winner][season]=1;
          }
      } else {
        
        result[winner]={};
        result[winner][season]=1;
      }
    }
    console.log(result)
    return result;
  }
  
  module.exports = mostWinsPerYear;
  
  
 