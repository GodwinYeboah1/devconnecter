const express = require('express')
const router = express.Router()

//@route    Get api/users/test
//@desc     Test users route
//@access   Public
router.get('/test', (request, response) => response.json({msg: "user Works"}));

module.exports = router;
