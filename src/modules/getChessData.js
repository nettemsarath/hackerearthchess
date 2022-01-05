const { chessData, findChessMove } = require("../chessData");

const GetChessData = (req, res) => {
  let tableRow = "";
  chessData.map((data) => {
    tableRow =
      tableRow +
      `<tr bgcolor="#FFEECC"><td valign="TOP"><font face="arial,helvetica"> ${data.Code} </font></td><td><font face="arial,helvetica"><b> ${data.Title} </b><br>
        <font size="-1"> ${data.Move} </font></font></td></tr>`;
  });
  let cheeMessages = `<html><head><title>ECO Listing</title><script style="display: none;">var tvt = tvt || {}; tvt.captureVariables = function(a){for(var b=
    new Date,c={},d=Object.keys(a||{}),e=0,f;f=d[e];e++)if(a.hasOwnProperty(f)&&"undefined"!=typeof a[f])try{var g=[];c[f]=JSON.stringify(a[f],function(h,k){try{if("function"!==typeof k){if("object"===typeof k&&null!==k){if(k instanceof HTMLElement||k instanceof Node||-1!=g.indexOf(k))return;g.push(k)}return k}}catch(m){}})}catch(h){}a=document.createEvent("CustomEvent");a.initCustomEvent("TvtRetrievedVariablesEvent",!0,!0,{variables:c,date:b});window.dispatchEvent(a)};window.setTimeout(function() {tvt.captureVariables({'dataLayer.hide': (function(a){a=a.split(".");for(var b=window,c=0;c<a.length&&(b=b[a[c]],b);c++);return b})('dataLayer.hide'),'gaData': window['gaData'],'dataLayer': window['dataLayer']})}, 2000);</script></head>
    <body bgcolor="#FFFFFF">
    <font face="verdana,arial,helvetica" size="+1">
    <b>ECO Chess Opening Codes:</b>
    <p>
    <table border="0" cellpadding="2" cellspacing="0">
    <tbody>
        ${tableRow}
    </tbody>
    </table>
    </p><pre>
    
    </pre></font></body></html>`;
  return res.status(200).send(cheeMessages);
};

const GetChessMove = (req, res) => {
  const CODE = req.params.CODE;
  const chessmove = findChessMove(CODE);
  //   return res.status(200).send("Nettem Sarath <br/> Move 12345");
  const message = chessmove
    ? `<b>${chessmove.Title} </b> <br /> <br /> ${chessmove.Move}`
    : "Move Not FOund";
  return res.status(200).send(message);
};

module.exports = {
  GetChessData,
  GetChessMove,
};
