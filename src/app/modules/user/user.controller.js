const User = require("./user.model")

exports.getAllUser = async (req, res) => {
    try {
        const result = await User.find({});
        res.status(200).json({
            status: 'Success',
            message: 'Successfuylly fetched users',
            data: result
        })
    } catch (error) {
        res.send(error)
    }
}