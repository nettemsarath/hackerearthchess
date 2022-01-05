const express = require("express");
const router = express.Router();

const { GetChessData } = require("../modules/getChessData");

/* GET home page. */
router.get("/", GetChessData);

module.exports = router;
