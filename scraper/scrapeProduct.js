const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

url = "https://www.amazon.com/Mielle-Pomegranate-Honey-Leave-Conditioner/dp/B075PTHVKN/ref=sr_1_2?dib=eyJ2IjoiMSJ9.hlIr0OYJW4pqIcRSdhpgXQlmJX_Pous-0NgUK5Ohdii40GDx_lxZaQyqroFE6pbuhOYDpjIuQLTTZP2kqm2i_Zv9yjDCfPqE2nTuL2gexXXjDW_ZXi-aD1Xyl7FqwAUHLrLZFMYH0hC8U7s0YCpPGn3vH986PRpqG7b-z9tDv4NZNteZbC2SCFrn2Ebj86HEWUBGGIdWJM6yydSdzgYPO5TN2Ad84RqLIo-bHx3QD_sdOebQcwm2yQWFS2ppLNQ9U7CexYXxIA-gUAeYt8obVvXkJBoEWBUypoei7F7KWIA.5ipnFyOP9Px6frPA19H8vDCmh2IniNMAPLKAu9GlVxc&dib_tag=se&keywords=leave+in+conditioner+for+curly+hair&qid=1751262298&sr=8-2";


const scrapeProduct = async (url) => {
    const headers = {
        'User-Agent': 'Mozilla/5.0',
        'Accept-Language': 'en-US,en;q=0.9'
    };


}

scrapeProduct(url);