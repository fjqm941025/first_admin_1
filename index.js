const http = require("http");
const fs = require("fs");
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(express.json());//JSON을 사용하게 해 줌
app.use(express.urlencoded({ extended: true }));
app.use(cors());//CORS 헤더를 알아서 사용해줌
app.use(express.static("static"));//정적파일이 PUBLIC 폴더에 있음

const PORT = 8080;

// TODO 정적파일 반환 편하게하기

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, ".static/index.html"));
});

let title_num = 1;
app.post("/xml_create",(req,res) => { //
  console.log("oh index.js");
  var sec = req.body.input_sec;
  var light = req.body.traffic_light;
  var edge = req.body.edgeNO;
  var occ = req.body.occasion;
  console.log(sec);
  console.log(light);
  // var num1 = 1;
  // var num2 = 2;
  
  var title = `test${title_num}.xml`
  var des = `<?xml version="1.0"?>\n<control>\n\t<edgeNo>${edge}</edgeNo>\n\t<traffic_light>${light}</traffic_light>\n\t<how_many>${sec}</how_many>\n\t<occasion>${occ}</occasion>\n</control>`;
  fs.writeFile('./data/' + title, des, (err) => {
    if(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
  });
  title_num ++;
   res.send({msg :'성공!'});

});//xml 파일 생성

// app.post("/", (req, res) => {
//   const body = req.body;

//   console.log(body);

//   res.send("2post!");
// });

app.listen(PORT, () => {
  console.log(`listening on ${PORT}.....`);//''사이에 ${}넣으면 변수도 출력할 수 잇음
});
