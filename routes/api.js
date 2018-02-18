const express = require('express');
const router = express.Router();
// const useragent = require('express-useragent');


router.get('/whoami',function(req, res, next){
  var software, ipaddress, lang;
  lang = req.acceptsLanguages();
  ipaddress = req.ip;
  var os = req.useragent.os;
  var browser = req.useragent.browser;
  software = 'OS: ' + os + '; Browser: ' + browser;

  res.json({
    ipaddress: ipaddress,
    languages: lang[1],
    software: software
  })
});



module.exports = router;
