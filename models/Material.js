const mongoose = require('mongoose');

const { Schema } = mongoose;

const materialSchema = new Schema(
	{
		fileName: {
			type: String,
			required: 'Please provide a new File Name',
			unique: true,
			minLength: 2,
		},
		agentName: {
			type: String,
			required: 'Please provide a new Agent Name',
			minLength: 2,
		},
		agentReference: {
			type: String,
			required: 'Please provide a new Agent reference',
			unique: true,
			minLength: 2,
		},
		poNum: {
			type: String,
			required: 'Please provide a new PO Number',
			unique: true,
			minLength: 2,
			maxLength: 20,
		},
		twentyFtGroupage: {
			type: Number,
			required: 'Please input a value',
		},
		fourtyFt: { type: Number, required: 'Please input a value' },
		materials: {
			type: String,
			required: 'Please input a value',
			minLength: 2,
		},
		weight: { type: Number, required: 'Please input a value' },
		berth: {
			type: String,
			required: 'Please input a date',
			default: Date.now,
		},
		dateDelivered: {
			type: String,
			required: 'Please input a date',
			default: Date.now,
		},
		arrivalMonth: {
			type: String,
			required: 'Please input a month',
			minLength: 2,
		},
		arrivalYear: { type: Number, required: 'Please input a year' },
		formM: {
			type: String,
			required: 'Please provide a new Form M number',
			unique: true,
			minLength: 2,
		},
		dutyPaid: {
			type: Number,
			required: 'Please input a value',
			minLength: 2,
		},
		dutyRate: { type: [Number], required: 'Please input a value' },
		hscodePar: { type: [Number], required: 'Please input a value' },
		billOfLading: {
			type: String,
			required: 'Please input a new Bill of Lading',
			unique: true,
			minLength: 2,
		},
		importDuty: { type: [Number], required: 'Please input a value' },
		supplierName: {
			type: String,
			required: 'Please input a Supplier Name',
			minLength: 2,
		},
		countryOfSupply: {
			type: String,
			required: 'Please input a Country of Supply',
			minLength: 2,
		},
		portOfOrigin: {
			type: String,
			required: 'Please input a Port of Origin',
			minLength: 2,
		},
		countryOfOrigin: {
			type: String,
			required: 'Please input a Country of Origin',
			minLength: 2,
		},
		cifValue: { type: Number, required: 'Please input a value' },
		shippingLine: {
			type: String,
			required: 'Please provide a Shipping Line',
			minLength: 2,
		},
		hscodeFormM: { type: [Number], required: 'Please input a value' },
		portOfDestination: {
			type: String,
			required: 'Please input a Port of Destination',
			minLength: 2,
		},
		archived: {
			type: Boolean,
			required: 'Please tick the box',
			default: false,
		},
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
