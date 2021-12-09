import React from 'react';

const PONumber = ({ materials, onHandlePONumChange }) => {
	// Get all PO Numbers //
	const getPONum = materials.map((material) => material.poNum);

	return (
		<>
			<div className='field ponum'>
				<label className='label'>po number</label>
				<div className='control'>
					<div className='select'>
						<select onChange={onHandlePONumChange}>
							{getPONum.map((po, index) => (
								<option key={index} value={po}>
									{po}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>
		</>
	);
};

export default PONumber;
