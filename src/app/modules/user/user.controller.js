const User = require("./user.model")
const { getUsersService, createUserService, findUserByEmailService } = require("./user.service")

exports.getAllUser = async (req, res) => {
    try {
        const result = await getUsersService()
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


        res.status(200).json({
            status: 'Success',
            message: 'Successfuylly fetched users',
            data: result
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
                error: "Incorrect Email",
            });
        }

        const isPasswordCorrect = isExistUser.comparePassword(password, isExistUser.password)

        if (!isPasswordCorrect) {
            return res.status(404).json({
                status: "failed",
                error: "Incorrect Password",
            });
        }
        const { password: pass, ...userData } = isExistUser.toObject();

        return res.status(200).json({
            status: 'Success',
            message: 'Successfuylly fetched users',
            data: userData
        })
    } catch (error) {
        res.send(error)
    }
}