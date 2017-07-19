const Router = require('co-router');
const router = Router();
const workList = require('./work-controller');

router.get('/workList', workList.getTasks);
//router.put('/release', workList.releaseTasksController);
//router.post('/pagination', workList.getWorksPaginated);
//router.post('/reserve',workList.postReserve);

module.exports = router;

