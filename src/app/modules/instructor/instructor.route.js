const express = require('express');
const { createInstructorReq, getAllInstructorReq } = require('./instructor.controller');
const router = express.Router();

router.post('/create-request', createInstructorReq)
router.get('/all-request', getAllInstructorReq)


module.exports = router;