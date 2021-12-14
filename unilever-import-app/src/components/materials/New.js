import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const log = console.log.bind(document);
// import Auth from '../../lib/Auth';

const New = () => {
	const [formData, setFormData] = useState({});
	const [errors, setErrors] = useState({});

	const navigate = useNavigate();

	log('get history =>', navigate);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios
				.post('/api/materials', formData)
				.then(() => navigate('/materials'));
		} catch (err) {
			setErrors(err.response.data.errors);
			log('get errors =>', err);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleArrayChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value.split(',') });
	};

	const handleCheckbox = (e) => {
		const { checked, name } = e.target;
		setFormData({ ...formData, [name]: checked });
	};

	log('get errors1 =>', errors);
	log('get form data =>', formData);

	return (
		<>
			<section className='section'>
				<div className='container'>
					<form onSubmit={handleSubmit}>
						<div className='field'>
							<label className='label'>File Name</label>
							<input
								className='input'
								type='text'
								name='fileName'
								placeholder='eg: UNL-DOC-AIR193-DO12495849-MF20180049086'
								value={formData.fileName || ''}
								onChange={handleChange}
							/>
							{errors.fileName && (
								<small className='help is-danger'>
									{errors.fileName}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Agent Name</label>
							<input
								className='input'
								type='text'
								name='agentName'
								placeholder='eg: GMT'
								value={formData.agentName || ''}
								onChange={handleChange}
							/>
							{errors.agentName && (
								<small className='help is-danger'>
									{errors.agentName}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>
								Agent Reference Number
							</label>
							<input
								className='input'
								type='text'
								name='agentReference'
								placeholder='eg: UNL-DOC-AIR193'
								value={formData.agentReference || ''}
								onChange={handleChange}
							/>
							{errors.agentReference && (
								<small className='help is-danger'>
									{errors.agentReference}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>PO Number</label>
							<input
								className='input'
								type='text'
								name='poNum'
								placeholder='eg: DO12495849'
								value={formData.poNum || ''}
								onChange={handleChange}
							/>
							{errors.poNum && (
								<small className='help is-danger'>
									{errors.poNum}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>
								Twenty Foot Groupage
							</label>
							<input
								className='input'
								type='text'
								name='twentyFtGroupage'
								placeholder='eg: 1'
								value={formData.twentyFtGroupage || ''}
								onChange={handleChange}
							/>
							{errors.twentyFtGroupage && (
								<small className='help is-danger'>
									{errors.twentyFtGroupage}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Forty Foot</label>
							<input
								className='input'
								type='text'
								name='fourtyFt'
								placeholder='eg: 2'
								value={formData.fourtyFt || ''}
								onChange={handleChange}
							/>
							{errors.fourtyFt && (
								<small className='help is-danger'>
									{errors.fourtyFt}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Materials</label>
							<input
								className='input'
								type='text'
								name='materials'
								placeholder='eg: PACKAGING MACHINES WITH BLACK TEA'
								value={formData.materials || ''}
								onChange={handleChange}
							/>
							{errors.materials && (
								<small className='help is-danger'>
									{errors.materials}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Weight</label>
							<input
								className='input'
								type='text'
								name='weight'
								placeholder='eg: 1000'
								value={formData.weight || ''}
								onChange={handleChange}
							/>
							{errors.weight && (
								<small className='help is-danger'>
									{errors.weight}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Berth</label>
							<input
								className='input'
								type='string'
								name='berth'
								placeholder='eg: mm/dd/year'
								value={formData.berth || ''}
								onChange={handleChange}
							/>
							{errors.berth && (
								<small className='help is-danger'>
									{errors.berth}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Arrival Month</label>
							<input
								className='input'
								type='text'
								name='arrivalMonth'
								placeholder='eg: May'
								value={formData.arrivalMonth || ''}
								onChange={handleChange}
							/>
							{errors.arrivalMonth && (
								<small className='help is-danger'>
									{errors.arrivalMonth}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Arrival Year</label>
							<input
								className='input'
								type='text'
								name='arrivalYear'
								placeholder='eg: 2018'
								value={formData.arrivalYear || ''}
								onChange={handleChange}
							/>
							{errors.arrivalYear && (
								<small className='help is-danger'>
									{errors.arrivalYear}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Form M</label>
							<input
								className='input'
								type='text'
								name='formM'
								placeholder='eg: MF20180049086'
								value={formData.formM || ''}
								onChange={handleChange}
							/>
							{errors.formM && (
								<small className='help is-danger'>
									{errors.formM}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Duty Paid</label>
							<input
								className='input'
								type='text'
								name='dutyPaid'
								placeholder='eg: 3679365'
								value={formData.dutyPaid || ''}
								onChange={handleChange}
							/>
							{errors.dutyPaid && (
								<small className='help is-danger'>
									{errors.dutyPaid}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>Duty Rate</label>
							<input
								className='input'
								type='text'
								name='dutyRate'
								placeholder='eg: 5'
								value={formData.dutyRate || ''}
								onChange={handleArrayChange}
							/>
							{errors.dutyRate && (
								<small className='help is-danger'>
									{errors.dutyRate}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>HSCODE PAR</label>
							<input
								className='input'
								type='text'
								name='hscodePar'
								placeholder='eg: 8438800000'
								value={formData.hscodePar || ''}
								onChange={handleArrayChange}
							/>
							{errors.hscodePar && (
								<small className='help is-danger'>
									{errors.hscodePar}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>BILL OF LADING</label>
							<input
								className='input'
								type='text'
								name='billOfLading'
								placeholder='eg: 204-987650'
								value={formData.billOfLading || ''}
								onChange={handleChange}
							/>
							{errors.billOfLading && (
								<small className='help is-danger'>
									{errors.billOfLading}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>DATE DELIVERED</label>
							<input
								className='input'
								type='string'
								name='dateDelivered'
								placeholder='eg: mm/dd/year'
								value={formData.dateDelivered || ''}
								onChange={handleChange}
							/>
							{errors.dateDelivered && (
								<small className='help is-danger'>
									{errors.dateDelivered}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>IMPORT DUTY</label>
							<input
								className='input'
								type='text'
								name='importDuty'
								placeholder='eg: 902228'
								value={formData.importDuty || ''}
								onChange={handleArrayChange}
							/>
							{errors.importDuty && (
								<small className='help is-danger'>
									{errors.importDuty}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>SUPPLIER NAME</label>
							<input
								className='input'
								type='text'
								name='supplierName'
								placeholder='eg: UNILEVER ASIA PRIVATE LIMITED'
								value={formData.supplierName || ''}
								onChange={handleChange}
							/>
							{errors.supplierName && (
								<small className='help is-danger'>
									{errors.supplierName}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>COUNTRY OF SUPPLY</label>
							<input
								className='input'
								type='text'
								name='countryOfSupply'
								placeholder='eg: KENYA'
								value={formData.countryOfSupply || ''}
								onChange={handleChange}
							/>
							{errors.countryOfSupply && (
								<small className='help is-danger'>
									{errors.countryOfSupply}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>PORT OF ORIGIN</label>
							<input
								className='input'
								type='text'
								name='portOfOrigin'
								placeholder='eg: MOMBASA'
								value={formData.portOfOrigin || ''}
								onChange={handleChange}
							/>
							{errors.portOfOrigin && (
								<small className='help is-danger'>
									{errors.portOfOrigin}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>COUNTRY OF ORIGIN</label>
							<input
								className='input'
								type='text'
								name='countryOfOrigin'
								placeholder='eg: KENYA'
								value={formData.countryOfOrigin || ''}
								onChange={handleChange}
							/>
							{errors.countryOfOrigin && (
								<small className='help is-danger'>
									{errors.countryOfOrigin}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>CIF VALUE</label>
							<input
								className='input'
								type='text'
								name='cifValue'
								placeholder='eg: 18032918.96'
								value={formData.cifValue || ''}
								onChange={handleChange}
							/>
							{errors.cifValue && (
								<small className='help is-danger'>
									{errors.cifValue}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>SHIPPING LINE</label>
							<input
								className='input'
								type='text'
								name='shippingLine'
								placeholder='eg: MAERSK LINE'
								value={formData.shippingLine || ''}
								onChange={handleChange}
							/>
							{errors.shippingLine && (
								<small className='help is-danger'>
									{errors.shippingLine}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>HSCODE FORM M</label>
							<input
								className='input'
								type='text'
								name='hscodeFormM'
								placeholder='eg: 902400000'
								value={formData.hscodeFormM || ''}
								onChange={handleArrayChange}
							/>
							{errors.hscodeFormM && (
								<small className='help is-danger'>
									{errors.hscodeFormM}
								</small>
							)}
						</div>
						<div className='field'>
							<label className='label'>PORT OF DESTINATION</label>
							<input
								className='input'
								type='text'
								name='portOfDestination'
								placeholder='eg: NGLOA'
								value={formData.portOfDestination || ''}
								onChange={handleChange}
							/>
							{errors.portOfDestination && (
								<small className='help is-danger'>
									{errors.portOfDestination}
								</small>
							)}
						</div>
						<div className='field'>
							<label
								htmlFor='archiveCheckbox'
								className='checkbox label'>
								ARCHIVED
							</label>
							Tick to confirm all fields have been filled
							<input
								type='checkbox'
								className='ml-2'
								name='archived'
								checked={formData.archived || false}
								onChange={handleCheckbox}
							/>
						</div>
						<div className='control'>
							<button type='submit' className='button is-primary'>
								Submit Form
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default New;
