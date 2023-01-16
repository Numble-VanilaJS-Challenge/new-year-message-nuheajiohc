const express = require("express");
const path = require("path");

const app = express();

// 모든 페이지에서 서버 돌아가게 하는 코드
app.use("/", express.static(path.resolve(__dirname, "./")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./", "index.html"));
});

app.listen(8080, () => console.log("Server running"));
