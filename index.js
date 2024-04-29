const express = require("express");
const app = express();
const port = 3000;
const multer = require("multer");
const ejs = require("ejs");

// 화면엔진은 ejs로 설정함.
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("test", {});
  // res.send("Hello world");
});

app.get("/upload", function (req, res) {
  // res.sendFile(__dirname + "/index.html");
  res.render("uploadform");
  // https://nan491.tistory.com/entry/Nodejs-%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9Cmulter-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0
  //다시 읽어보고 파일 업로드 ? mutler 해보기
});

app.get("/result/:name", function (req, res) {
  const { name } = req.params;

  if (name == "dog") {
    res.json({ sound: "멍멍" });
  } else if (name == "cat") {
    res.json({ sound: "야옹" });
  }

  console.log(name);
});

//서버 열었는지 여부 확인 가능.
app.listen(port, () => {
  console.log("http://localhost:", port);
});

// app.get('/user/:id', function(req, res){
//     //const q = req.params
//     //console.log(q)
//     //console.log(q.id)

//     const q = req

// ejs란? 자바스크립트가 내장되어 있는 html파일이며, ejs라는 확장자를 가짐.
