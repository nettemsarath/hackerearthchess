const express = require("express");
const router = express.Router();

const {
  GetChessData,
  GetChessMove,
  NextMove,
} = require("../modules/getChessData");

/* GET home page. */
router.get("/", GetChessData);
router.get("/:CODE", GetChessMove);
router.get("/:CODE/:MOVE([^/]*)", NextMove);

module.exports = router;
