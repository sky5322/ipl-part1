function extraRunsConcededByEachTeam(deliveries,matches){
    const result={}
    const ids=matches.filter(obj=>obj['season']==='2016').map(obj=>parseInt(obj.id))
    const delivers=deliveries.filter(del=>ids.includes(parseInt(del['match_id'])))
    for(let id of ids){
        for(let deliver of delivers ){
            if(parseInt(deliver['match_id'])=== id){
                if(result[deliver.bowling_team]){
                    result[deliver.bowling_team]+=parseInt(deliver['extra_runs'])
                }else{
                    result[deliver.bowling_team]=parseInt(deliver['extra_runs'])
                }
            }
        }
    }
    return result;
}
module.exports=extraRunsConcededByEachTeam