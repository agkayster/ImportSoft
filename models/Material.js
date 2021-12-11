const mongoose = require('mongoose');

const { Schema } = mongoose;

const materialSchema = new Schema(
	{
		fileName: { type: String, required: true, unique: true, minLength: 2 },
		agentName: { type: String, required: true, minLength: 2 },
		agentReference: {
			type: String,
			required: true,
			unique: true,
			minLength: 2,
		},
		poNum: {
			type: String,
			required: true,
			unique: true,
			minLength: 2,
			maxLength: 20,
		},
		twentyFtGroupage: { type: Number, required: true },
		fourtyFt: { type: Number, required: true },
		materials: { type: String, required: true, minLength: 2 },
		weight: { type: Number, required: true },
		berth: { type: Date, required: true, default: Date.now },
		dateDelivered: { type: Date, required: true, default: Date.now },
		arrivalMonth: { type: String, required: true, minLength: 2 },
		arrivalYear: { type: Number, required: true },
		formM: { type: String, required: true, unique: true, minLength: 2 },
		dutyPaid: { type: Number, required: true, minLength: 2 },
		dutyRate: { type: [Number], required: true },
		hscodePar: { type: [Number], required: true },
		billOfLading: {
			type: String,
			required: true,
			unique: true,
			minLength: 2,
		},
		importDuty: { type: [Number], required: true },
		supplierName: {
			type: String,
			required: true,
			minLength: 2,
		},
		countryOfSupply: {
			type: String,
			required: true,
			minLength: 2,
		},
		portOfOrigin: {
			type: String,
			required: true,
			minLength: 2,
		},
		countryOfOrigin: {
			type: String,
			required: true,
			minLength: 2,
		},
		cifValue: { type: Number, required: true },
		shippingLine: {
			type: String,
			required: true,
			minLength: 2,
		},
		hscodeFormM: { type: [Number], required: true },
		portOfDestination: {
			type: String,
			required: true,
			minLength: 2,
		},
		archived: { type: Boolean, required: true, default: false },
		user: { type: mongoose.Schema.ObjectId, ref: 'User' }, // "ref" part here points to the model we are referencing and the model is "User.js" model.
	},
	{
		timestamps: true,
	},
	{
		toJSON: {
			virtuals: true,
			transform(doc, json) {
				delete json.__v;
				delete json.id;
				return json;
			},
		},
	}
);

module.exports = mongoose.model('Material', materialSchema);
