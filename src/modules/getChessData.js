const { chessData } = require("../chessData");

const GetChessData = (req, res) => {
  return res.status(200).json(chessData);
};

module.exports = {
  GetChessData,
};
