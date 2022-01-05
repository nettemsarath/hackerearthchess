const express = require("express");
const router = express.Router();

const { GetChessData, GetChessMove } = require("../modules/getChessData");

/* GET home page. */
router.get("/", GetChessData);
router.get("/:CODE", GetChessMove);

module.exports = router;
