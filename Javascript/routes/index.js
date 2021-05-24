const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const input = [
    { username: "ali", hair_color: "brown", height: 1.2 },
    { username: "marc", hair_color: "blue", height: 1.4 },
    { username: "joe", hair_color: "brown", height: 1.7 },
    { username: "zehua", hair_color: "black", height: 1.8 },
  ];

  const inputStringify = JSON.stringify(input);

  const restructure = (props) => {
    let arr = [];
    let keys = [];
    for (let k in props[0]) {
      keys.push(k);
    }
    arr.push(keys);

    let values = [];
    props.map((data) => {
      values.push([data.username, data.hair_color, data.height]);
    });
    arr.push(values);

    return arr;
  };

  const tryThis = JSON.stringify(restructure(input));

  res.render("index", { tryThis: tryThis, inputStringify: inputStringify });
});

module.exports = router;
