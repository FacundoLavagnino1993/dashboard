const Router = require('co-router');
const router = Router();
const workList = require('./work-controller');

router.get('/workList', workList.getWorks);

module.exports = router;

