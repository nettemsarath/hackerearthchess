const axios = require("axios");
const cheerio = require("cheerio");
const SCRAPE_URl = process.env.SCRAPE_URl;

let chessData = [];

async function fetchHTML(url) {
  try {
    const { data } = await axios.get(url);
    return cheerio.load(data);
  } catch (error) {
    throw error;
  }
}

const ScrapeData = async () => {
  try {
    const $ = await fetchHTML(SCRAPE_URl);
    $("body > font > p > table > tbody > tr").each((index, element) => {
      chessData.push({
        Id: `${$(element).find("td:nth-child(1) > font").text()}`,
        Title: `${$(element).find("td:nth-child(2) > font > b ").text()}`,
        Move: `${$(element).find("td:nth-child(2) > font > font ").text()}`,
      });
    });
    return;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  chessData,
  ScrapeData,
};

// fetchHTML(SCRAPE_URl)
//   .then(($) => {
//     $("body > font > p > table > tbody > tr").each((index, element) => {
//       chessData.push({
//         Id: `${$(element).find("td:nth-child(1) > font").text()}`,
//         Title: `${$(element).find("td:nth-child(2) > font > b ").text()}`,
//         Move: `${$(element).find("td:nth-child(2) > font > font ").text()}`,
//       });
//     });
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// body > font > p > table > tbody > tr:nth-child(1) > td:nth-child(1)
