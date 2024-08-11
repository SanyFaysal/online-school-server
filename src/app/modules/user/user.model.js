const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const { USER, ADMIN, INSTRUCTOR, STUDENT } = require('../../variables/userRoles');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: USER,
        enum: {
            values: [ADMIN, INSTRUCTOR, STUDENT, USER],
            message: "{VALUE} can't be a role",
        },
    },
},
    {
        timestamps: true,
    }
)



userSchema.pre("save", function (next) {
    const password = this.password;
    const hash = bcrypt.hashSync(password);
    this.password = hash;

    next();
});

userSchema.methods.comparePassword = function (password, hash) {
    const isValidPassword = bcrypt.compareSync(password, hash);
    console.log("isValidPassword", isValidPassword)
    return isValidPassword;
}

const User = mongoose.model('User', userSchema);

module.exports = User; 