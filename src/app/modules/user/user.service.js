const User = require("./user.model")

exports.getUsersService = async () => {
    const result = await User.find({}).select("-password")
    return result;
}
exports.findUserByEmailService = async (email) => {
    const result = await User.findOne({ email })
    return result;
}
exports.createUserService = async (data) => {
    const result = await User.create(data)
    return result;
}