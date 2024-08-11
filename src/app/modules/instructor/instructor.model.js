const { default: mongoose } = require("mongoose");
const { PENDING, ACCEPTED, REJECTED } = require("./instructor.variables");

const instructorSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    cv_resume: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        default: PENDING,
        enum: {
            values: [PENDING, ACCEPTED, REJECTED],
            message: "{VALUE} can't be a status",
        },
    },
},
    {
        timestamps: {

        },
    }
)

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor; 