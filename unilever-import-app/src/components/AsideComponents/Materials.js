import React from 'react';

const Materials = ({ materials, onHandleMaterialChange }) => {
	//Get all materials //
	const findMaterials = materials.map((material) => material.materials);
	return (
		<>
			<div className='field materials'>
				<label className='label'>materials</label>
				<div className='control'>
					<div className='select'>
						<select onChange={onHandleMaterialChange}>
							{findMaterials.map((material, index) => (
								<option key={index} value={material}>
									{material}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>
		</>
	);
};

export default Materials;
