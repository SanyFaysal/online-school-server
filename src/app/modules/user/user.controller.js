
const { createToken } = require("../../utils/CreateToken")
const User = require("./user.model")
const { getUsersService, createUserService, findUserByEmailService, getAllUsersService } = require("./user.service")

exports.getMe = async (req, res) => {
    try {
        const { email } = req.user;
        const result = await findUserByEmailService(email)
        return res.status(200).json({
            status: 'Success',
            message: 'Successfuylly fetched user',
            data: result
        })
    } catch (error) {
        res.send(error)
    }
}


exports.getAllUser = async (req, res) => {
    try {
        const result = await getAllUsersService()
        res.status(200).json({
            status: 'Success',
            message: 'Successfuylly fetched users',
            data: result
        })
    } catch (error) {
        res.send(error)
    }
}

exports.registerUser = async (req, res) => {
    try {
        const data = req.body;
        const { email, password } = data;
        const isExistUser = await findUserByEmailService(email)

        if (isExistUser) {
            return res.status(404).json({
                status: "failed",
                error: "User already existed",
            });
        }
        const result = await createUserService(data)

        const token = createToken({ email: isExistUser?.email })
        return res.status(200).json({
            status: 'Success',
            message: 'Successfuylly fetched users',
            data: result,
            token
        })
    } catch (error) {
        res.send(error)
    }
}
exports.loginUser = async (req, res) => {
    try {
        const data = req.body;
        const { email, password } = data;

        const isExistUser = await findUserByEmailService(email)

        if (!isExistUser) {
            return res.status(404).json({
                status: "failed",
                error: "Incorrect Credential",
            });
        }

        const isPasswordCorrect = isExistUser.comparePassword(password, isExistUser.password)

        if (!isPasswordCorrect) {
            return res.status(404).json({
                status: "failed",
                error: "Incorrect Credential",
            });
        }
        const { password: pass, ...userData } = isExistUser.toObject();
        const token = createToken({ email })

        return res.status(200).json({
            status: 'Success',
            message: 'Successfuylly fetched users',
            data: userData,
            token
        })
    } catch (error) {
        res.send(error)
    }
}