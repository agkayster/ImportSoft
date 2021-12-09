import React from 'react';

const BerthDate = ({ berth }) => {
	// Get the date of the ship berth//
	const date = new Date(berth);
	const newBerth = `${date.getDate()}-${
		date.getMonth() + 1
	}-${date.getFullYear()}`;
	return (
		<>
			<label className='label berthLab layer4'>Berth</label>
			<div className='control startpo'>
				<p className='berth'>{newBerth}</p>
			</div>
		</>
	);
};

export default BerthDate;
