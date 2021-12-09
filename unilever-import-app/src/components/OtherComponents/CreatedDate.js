import React from 'react';

const CreatedDate = ({ createdDate }) => {
	// Get date of when this form was created//
	const getCreatedDate = new Date(createdDate);
	const newCreatedDate = `${getCreatedDate.getDate()}-${
		getCreatedDate.getMonth() + 1
	}-${getCreatedDate.getFullYear()}`;
	return (
		<>
			<div className='field date'>
				<label className='label dCreate'>Date Of Creation</label>
				<div className='control'>
					<p className='createdate'>{newCreatedDate}</p>
				</div>
			</div>
		</>
	);
};

export default CreatedDate;
