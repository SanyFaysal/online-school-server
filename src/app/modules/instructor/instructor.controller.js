const { createInstructorReqService, getAllInstructorReqService } = require("./instructor.service");

exports.createInstructorReq = async (req, res) => {
    try {
        const { userId, ...data } = req.body;
        const userData = { user: userId, ...data }

        const result = await createInstructorReqService(data);
        return res.status(200).json({
            status: 'success',
            message: 'Req sent',
            data: result
        })
    } catch (error) {
        return res.status(400).json({
            status: 'failed',
            error: error.message
        })
    }
}

exports.getAllInstructorReq = async (req, res) => {
    try {
        const data = req.body;
        console.log(data)
        const result = await getAllInstructorReqService(data);
        return res.status(200).json({
            status: 'success',
            message: 'Req sent',
            data: result
        })
    } catch (error) {
        return res.status(400).json({
            status: 'failed',
            error: error.message
        })
    }
}