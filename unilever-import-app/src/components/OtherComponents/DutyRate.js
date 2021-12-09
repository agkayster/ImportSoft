import React from 'react';

const DutyRate = ({ dutyRate }) => {
	// Get all the Duty rates//
	let newDutyRate = '';
	for (let i = 0; i < dutyRate.length; i++) {
		newDutyRate = `${dutyRate[i]}%`;
	}
	return (
		<>
			<div>
				<label className='label dRate layer4'>Duty Rate</label>
				<div className='control'>
					<ul>
						<li className='dutyrate'>{newDutyRate}</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default DutyRate;
