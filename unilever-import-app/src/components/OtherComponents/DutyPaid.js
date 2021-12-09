import React from 'react';

const DutyPaid = ({ dutyPaid }) => {
	// Converting duty paid//
	const newDutyPaid = dutyPaid.toLocaleString();
	return (
		<>
			<label className='label dPaid layer3'>Duty Paid(₦)</label>
			<div className='control'>
				<p className='dutypaid'>₦{newDutyPaid}</p>
			</div>
		</>
	);
};

export default DutyPaid;
