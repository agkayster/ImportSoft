import React from 'react';

const Archived = ({ archived }) => {
	// Getting archived state//
	const getArchive = archived === true ? 'YES' : 'NO';
	return (
		<>
			<label className='label archived layer4'>Archived</label>
			<div className='control'>
				<p className='archive'>{getArchive}</p>
			</div>
		</>
	);
};

export default Archived;
