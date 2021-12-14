import React, { useState } from 'react';
import axios from 'axios';

const NewPDF = (props) => {
	const [formDataPDF, setFormDataPDF] = useState({});
	const [errors, setErrors] = useState({});

	const createFormDataPDF = async () => {
		try {
			await axios
				.post('/api/materialsPdf', formDataPDF)
				.then(() => props.history.push('/materials'));
		} catch (err) {
			setErrors(err.response.data.errors);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createFormDataPDF();
	};

	const handleChangePDF = (e) => {
		const { value, name } = e.target;
		const formdatapdf = { ...formDataPDF, [name]: value };
		setFormDataPDF(formdatapdf);
	};

	// const handleFileUpload = (e) => {
	// 	// Create an empty formData object//
	// 	const formData = new FormData();

	// 	// Add key/value pairs to the formData object//
	// 	formData.append('unileverFiles', e.target.files[0]);
	// 	axios.post();
	// };

	return (
		<>
			<section className='section'>
				<div className='container'>
					<form onSubmit={handleSubmit}>
						<div className='field'>
							<label className='label'>PDF Name</label>
							<input
								className='input'
								name='pdfName'
								placeholder='eg: UNL-DOC-AIR193-DO12495849-MF20180049086'
								value={formDataPDF.pdfName || ''}
								onChange={handleChangePDF}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='control'>
							<button type='submit' className='button is-primary'>
								Submit Form
							</button>
						</div>
					</form>
					{/* <form
						action='/upload'
						method='post'
						encType='multipart/form-data'>
						<h4>Upload PDF file below:</h4>
						<input type='file' name='uploadFile' id='' />
						<br />
						<button type='submit'>Upload</button>
					</form> */}
				</div>
			</section>
		</>
	);
};

export default NewPDF;
