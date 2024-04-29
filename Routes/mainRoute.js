const router = require('express').Router();
const upload = require('../utils/multer');
const mainCon = require('../controllers/mainController');


router.get('/', mainCon.home);

router.post('/upload-audio', upload.single('audio'),mainCon.audio);

module.exports = router;
