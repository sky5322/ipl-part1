//const express=require('express');
const fs = require("fs");
const csv = require("csvtojson");
const path=require("path");

const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const mostWinsPerYear = require("./ipl/mostWinsPerYear");
const extraRunsConcededByEachTeam = require('./ipl/extraRunsConcededByEachTeam');
const topTenEconomicBowlers = require('./ipl/topTenEconomicBowlers')

//const app = express();
//const PORT = process.env.PORT || 5500


const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

 async function main(fileName) {
 const data =await csv().fromFile(path.join(__dirname,`./csv_data/${fileName}`))
 return data
}

async function getInfo() {
  const matches=await main('matches.csv');
  const deliveries=await main('deliveries.csv');

  fs.writeFile(path.join(__dirname,"./public/data.json"), JSON.stringify({
    matchesPlayedPerYear: matchesPlayedPerYear(matches),
    mostWinsPerYear: mostWinsPerYear(matches),
    extraRunsConcededByEachTeam:extraRunsConcededByEachTeam(deliveries,matches),
    topTenEconomicBowlers:topTenEconomicBowlers(deliveries,matches)
  }), "utf8", err => {
    if (err) {
      console.log(err);
    }
  });
}
getInfo();


//app.use(express.static(path.join(__dirname,'./public')))

//app.listen(PORT,()=>console.log(`listning at ${PORT}`)) 