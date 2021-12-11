import React, { useState, useHistory } from 'react';
import axios from 'axios';
// import Auth from '../../lib/Auth';

const New = (props) => {
	const [formData, setFormData] = useState({});
	const [errors, setErrors] = useState({});
	const [isChecked, setIsChecked] = useState(false);

	const getFormData = async () => {
		try {
			await axios
				.post('/api/materials', formData)
				.then(() => props.history.push('/materials'));
		} catch (err) {
			setErrors(err.response.data.errors);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getFormData();
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		const formdata = { ...formData, [name]: value };
		setFormData(formdata);
	};

	const handleArrayChange = (e) => {
		const { value, name } = e.target;
		const formdata = { ...formData, [name]: value.split(',') };
		setFormData(formdata);
	};

	const handleCheckbox = (e) => {
		setIsChecked(!isChecked);
	};

	return (
		<>
			<section className='section'>
				<div className='container'>
					<form onSubmit={handleSubmit}>
						<div className='field'>
							<label className='label'>File Name</label>
							<input
								className='input'
								name='fileName'
								placeholder='eg: UNL-DOC-AIR193-DO12495849-MF20180049086'
								value={formData.fileName || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Agent Name</label>
							<input
								className='input'
								name='agentName'
								placeholder='eg: GMT'
								value={formData.agentName || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>
								Agent Reference Number
							</label>
							<input
								className='input'
								name='agentReference'
								placeholder='eg: UNL-DOC-AIR193'
								value={formData.agentReference || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>PO Number</label>
							<input
								className='input'
								name='poNum'
								placeholder='eg: DO12495849'
								value={formData.poNum || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>
								Twenty Foot Groupage
							</label>
							<input
								className='input'
								name='twentyFtGroupage'
								placeholder='eg: 1'
								value={formData.twentyFtGroupage || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Forty Foot</label>
							<input
								className='input'
								name='fourtyFt'
								placeholder='eg: 2'
								value={formData.fourtyFt || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Materials</label>
							<input
								className='input'
								name='materials'
								placeholder='eg: PACKAGING MACHINES WITH BLACK TEA'
								value={formData.materials || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Weight</label>
							<input
								className='input'
								name='weight'
								placeholder='eg: 1000'
								value={formData.weight || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Berth</label>
							<input
								className='input'
								name='berth'
								placeholder='eg: 31/12/2012'
								value={formData.berth || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Arrival Month</label>
							<input
								className='input'
								name='arrivalMonth'
								placeholder='eg: May'
								value={formData.arrivalMonth || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Arrival Year</label>
							<input
								className='input'
								name='arrivalYear'
								placeholder='eg: 2018'
								value={formData.arrivalYear || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Arrival Year</label>
							<input
								className='input'
								name='arrivalYear'
								placeholder='eg: 2018'
								value={formData.arrivalYear || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Form M</label>
							<input
								className='input'
								name='formM'
								placeholder='eg: MF20180049086'
								value={formData.formM || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Duty Paid</label>
							<input
								className='input'
								name='dutyPaid'
								placeholder='eg: 3679365'
								value={formData.dutyPaid || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Duty Rate</label>
							<input
								className='input'
								name='dutyRate'
								placeholder='eg: 5'
								value={formData.dutyRate || ''}
								onChange={handleArrayChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>HSCODE PAR</label>
							<input
								className='input'
								name='hscodePar'
								placeholder='eg: 8438800000'
								value={formData.hscodePar || ''}
								onChange={handleArrayChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>BILL OF LADING</label>
							<input
								className='input'
								name='billOfLading'
								placeholder='eg: 204-987650'
								value={formData.billOfLading || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>DATE DELIVERED</label>
							<input
								className='input'
								name='dateDelivered'
								placeholder='eg: 31/12/2012'
								value={formData.dateDelivered || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>IMPORT DUTY</label>
							<input
								className='input'
								name='importDuty'
								placeholder='eg: 902228'
								value={formData.importDuty || ''}
								onChange={handleArrayChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>SUPPLIER NAME</label>
							<input
								className='input'
								name='supplierName'
								placeholder='eg: UNILEVER ASIA PRIVATE LIMITED'
								value={formData.supplierName || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>COUNTRY OF SUPPLY</label>
							<input
								className='input'
								name='countryOfSupply'
								placeholder='eg: KENYA'
								value={formData.countryOfSupply || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>PORT OF ORIGIN</label>
							<input
								className='input'
								name='portOfOrigin'
								placeholder='eg: MOMBASA'
								value={formData.portOfOrigin || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>COUNTRY OF ORIGIN</label>
							<input
								className='input'
								name='countryOfOrigin'
								placeholder='eg: KENYA'
								value={formData.countryOfOrigin || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>CIF VALUE</label>
							<input
								className='input'
								name='cifValue'
								placeholder='eg: 18032918.96'
								value={formData.cifValue || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>SHIPPING LINE</label>
							<input
								className='input'
								name='shippingLine'
								placeholder='eg: MAERSK LINE'
								value={formData.shippingLine || ''}
								onChange={handleChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>HSCODE FORM M</label>
							<input
								className='input'
								name='hscodeFormM'
								placeholder='eg: 902400000'
								value={formData.hscodeFormM || ''}
								onChange={handleArrayChange}
							/>
							{errors.name && (
								<small className='help is-danger'>
									{errors.name}
								</small>
							)}
						</div>
						<div className='field'>
							<label htmlFor='archiveCheckbox' className='label'>
								ARCHIVED
							</label>
							Tick to confirm all fields have been filled
							<input
								type='checkbox'
								className='ml-2'
								id='archiveCheckbox'
								value='archived'
								checked={isChecked}
								onChange={handleCheckbox}
							/>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default New;
