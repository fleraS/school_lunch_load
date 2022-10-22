import fetch from "node-fetch";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import http from "http";
import fs from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

    const jsonFile = fs.readFileSync('./school_inf.json', 'utf8');

    fetch("https://foodsafetykorea.go.kr/portal/sensuousmenu/selectSchoolWeekMealsDetail.do", {
    "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "ko,en;q=0.9,en-US;q=0.8",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "prefer": "safe",
    "sec-ch-ua": "\"Chromium\";v=\"106\", \"Microsoft Edge\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "elevisor_for_j2ee_uid=8kw26r95zt178; JSESSIONID=2qRHN8cGs0w7WJB2l8j19uGWv34Seumn2EYiThCBJ8ZfR6z0bvhff2aGSnsy9tk7.amV1c19kb21haW4veGNvd2FzMDFfSVBPMDE=",
    "Referer": "https://foodsafetykorea.go.kr/portal/sensuousmenu/schoolMealsDetail.do?",
    "Referrer-Policy": "strict-origin-when-cross-origin"
    },
<<<<<<< HEAD
    "body": "url",
=======
    "body": "menu_no=&menu_grp=&menuNm=&copyUrl=https%3A%2F%2Ffoodsafetykorea.go.kr%3A443%2Fportal%2Fsensuousmenu%2FschoolMealsDetail.do%3F&mberId=&mberNo=&favorListCnt=0&schl_cd=7501017&type_cd=W&year=2022&month=10&week=4&select_year=2022&select_month=10&select_week=4&region=&search_keyword=%EC%98%A5%EB%8F%99%EC%A4%91",
>>>>>>> e2d3e6a (commit)
    "method": "POST"
    }).then(respond => respond.json())
    .then(json => console.log(json));

});
<<<<<<< HEAD
app.listen(3000);
=======
app.listen(3000);
>>>>>>> e2d3e6a (commit)
