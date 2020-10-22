const express = require('express');
const router = express.Router();
const devzamse = require('./controller/devzamse');
const sunedu = require('./controller/sunedu')
const tcsbs = require('./controller/TipoCambioSBS')
const clima = require('./controller/Clima')

//checkStatus
router.get("/", (req, res) => { res.send({ status: true }) });

//webScrapping
router.get('/f', devzamse.test);
router.post('/carreras', sunedu.test);

router.get('/tcsbs', tcsbs.tcsbs_m);
router.get('/clima', clima.clima_m);

module.exports = router;