const express = require('express')
const router = express.Router()

//@route Get api/profile/test
//@desc Test profile route
//@access Public
router.get('/test', (request, response) => response.json({msg: "profile Works"}));
module.exports = router;
