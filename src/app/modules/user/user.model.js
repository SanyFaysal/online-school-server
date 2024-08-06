const mongoose = requrie('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    fullName: {
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
    }
})



userSchema.pre("save", function (next) {
    const password = this.password;
    const hash = bcrypt.hashSync(password);
    this.password = hash;

    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User; 