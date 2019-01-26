const express = require('express')
const router = express.Router()

//@route Get api/post/test
//@desc Test post route
//@access Public
router.get('/test', (request, response) => response.json({msg: "Post Works"}));
module.exports = router;
