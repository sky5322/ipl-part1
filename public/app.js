
  fetch("./data.json")
    .then(res => res.json())
    .then(obj =>{
      for(let func in obj){
        let arr;
        switch(func){
          case 'matchesPlayedPerYear':
            arr=[];
            for (let key in obj.matchesPlayedPerYear) {
              arr.push([key, obj.matchesPlayedPerYear[key]]);
            }
            plotGraph('matches-played-per-year',"years",'container',arr)
            break;

            case 'mostWinsPerYear':
              arr=[];
              for(let key in obj.mostWinsPerYear){
                let temp=[];
                for(let team in obj.mostWinsPerYear[key]){
                  temp.push([team,obj.mostWinsPerYear[key][team]]);
                }
                arr.push({name:key, data:temp})
              }
              plotGraph1('most-wins-per-year', 'container1', arr)
              console.log(arr);
              break;
          case 'extraRunsConcededByEachTeam':
            arr=[];
            for(let key in obj.extraRunsConcededByEachTeam){
              arr.push([key, obj.extraRunsConcededByEachTeam[key]])
            } 
            plotGraph('extra-runs-conceded-in-2016',"teams",'container2',arr)
            break;
          case 'topTenEconomicBowlers':
            arr=[];
            for(let key in obj.topTenEconomicBowlers){
              arr.push([key, obj.topTenEconomicBowlers[key].economuRate])
            }     
            arr=arr.sort((a, b) => a[1]-b[1]).slice(0,11);
            plotGraph('top 10 Economic Bowlers with Economy Rate in 2015',"bowlers",'container3',arr)
            break;
          }
      }
    });
    
function plotGraph(title, name, id, seriesData){
  Highcharts.chart(id, {
    chart: {
      type: 'column'
    },
    title: {
      text: title
    },
    
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0.00,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: name,
        data: seriesData
      }
    ]
  });
    
}

function plotGraph1(title,id,seriesData){
  Highcharts.chart(id,{
    chart:{
      type:'column'
    },
    title: {
      text: title
    },
    
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0.00,
      title: {
        text: "Matches"
      }
    },
    series: seriesData
  });
   
}
