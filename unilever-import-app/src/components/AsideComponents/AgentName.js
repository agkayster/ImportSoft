import React from 'react';

const AgentName = ({ materials, onhandleAgentNameCategory }) => {
	// Getting all agent names while removing duplicates //
	const agentName = [
		...new Set(
			materials.map((material) =>
				material.agentName === 'GMT'
					? 'GMT'
					: material.agentName === 'ANZ'
					? 'ANZ'
					: material.agentName === 'DHL'
					? 'DHL'
					: material.agentName
			)
		),
	];
	return (
		<>
			<div>
				{agentName.map((agent, index) => (
					<button
						className='button'
						onClick={onhandleAgentNameCategory}
						key={index}
						value={agent}>
						{agent}
					</button>
				))}
			</div>
		</>
	);
};

export default AgentName;
