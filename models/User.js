// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');

// const { Schema } = mongoose;

// const userSchema = new Schema(
// 	{
// 		username: { type: String, required: true },
// 		email: { type: String, required: true, unique: true },
// 		password: { type: String, required: true },
// 	},
// 	{
// 		toJSON: {
// 			transform(doc, json) {
// 				// ALWAYS remove the password when converting a user to JSON
// 				delete json.password;
// 				delete json.__v;
// 				return json;
// 			},
// 		},
// 	}
// );

// // A virtual is data we need but don't want to store in the database
// userSchema
// 	.virtual('passwordConfirmation')
// 	.set(function setPasswordConfirmation(plaintext) {
// 		// plaintext is the value of passwordConfirmation
// 		this._passwordConfirmation = plaintext;
// 	});

// // Pre Validate Middleware: logic that happens before the VALIDATE stage
// userSchema.pre('validate', function checkPasswords(next) {
// 	// if the password and passwordConfirmation do not match
// 	if (
// 		this.isModified('password') &&
// 		this._passwordConfirmation !== this.password
// 	) {
// 		// invalidate the data
// 		this.invalidate('passwordConfirmation', 'Passwords do not match');
// 	}

// 	next(); // Don't forget to call next. Meaning if password and passwordConfirmation match, then validate.
// });

// userSchema.pre('save', function hashPassword(next) {
// 	// if the password has been modified
// 	if (this.isModified('password')) {
// 		// hash it using 8 rounds of salt: BCRYPT
// 		this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
// 	}

// 	next(); // Meaning once password is hashed, next is to save the password in the database
// });

// // methods is like prototype for MONGOOSE
// // all users can now validate a password themselves
// userSchema.methods.validatePassword = function validatePassword(plaintext) {
// 	return bcrypt.compareSync(plaintext, this.password);
// };

// module.exports = mongoose.model('User', userSchema);
