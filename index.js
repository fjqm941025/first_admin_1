const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(express.json());//JSON을 사용하게 해 줌
app.use(express.urlencoded({ extended: true }));
app.use(cors());//CORS 헤더를 알아서 사용해줌
app.use(express.static("static"));//정적파일이 PUBLIC 폴더에 있음

const PORT = 3000;

// TODO 정적파일 반환 편하게하기

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, ".static/index.html"));
});

// app.post("/", (req, res) => {
//   const body = req.body;

//   console.log(body);

//   res.send("2post!");
// });

app.listen(PORT, () => {
  console.log(`listening on ${PORT}.....`);//''사이에 ${}넣으면 변수도 출력할 수 잇음
});
