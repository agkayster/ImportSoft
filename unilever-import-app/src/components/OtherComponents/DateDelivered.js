import React from 'react';

const DateDelivered = ({ dateDelivered }) => {
	//Get the materials delivery date//
	const deliveryDate = new Date(dateDelivered);
	const newDeliveryDate = `${deliveryDate.getDate()}-${
		deliveryDate.getMonth() + 1
	}-${deliveryDate.getFullYear()}`;
	return (
		<>
			<label className='label delivered layer3'>Date Delivered</label>
			<div className='control groupage'>
				<p className='newDelivery'>{newDeliveryDate}</p>
			</div>
		</>
	);
};

export default DateDelivered;
