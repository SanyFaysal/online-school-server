const Instructor = require("./instructor.model");
const { PENDING } = require("./instructor.variables");

exports.createInstructorReqService = async (data) => {
    const result = await Instructor.create(data);
    return result;
}
exports.getAllInstructorReqService = async (data) => {
    const result = await Instructor.find({ status: PENDING });
    return result;
}