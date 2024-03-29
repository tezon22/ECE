const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
mongoose.set('strictQuery', false)

const Schema = mongoose.Schema;

const pdfSchema = new Schema({
	url: {
		type: String,
	},
	fileName: {
		type: String,
	},
	size: {
		type: Number,
	},
	title: {
		type: String,
	},
	author: {
		type: String,
	},
	keywords: {
		type: String,
	},
	uplodedAt: {
		type: Date,
		defualt: Date.now,
	},
	level: {
		type: String,
	},
	thumbnail: {
		type: String,
	},
	fileType: {
		type: String,
		default: 'pdf',
	},
});


const PDF_URI = process.env.URI

const pdf = mongoose.createConnection(PDF_URI);

mongoose.connection.on('connect', () => {
	console.log(`Connected to Mongodb Successfully`);
});
mongoose.connection.on('error', (err) => {
	console.log(`There was an error in connecting to Mongodb: ${err}`);
});

const pdfModel = pdf.model('pdf', pdfSchema)

module.exports = pdfModel;

