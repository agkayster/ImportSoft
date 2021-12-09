import React from 'react';

const AgentReferenceNum = ({ agentRefGrouping, onhandleAgentRefChange }) => {
	// Get all agent reference numbers //
	const agentRefNo = agentRefGrouping.map((agent) => {
		return agent.agentrefnumber;
	});

	// Add "All" to the agent reference number array//
	agentRefNo.unshift('All');

	// Create a <select> <option> for all agent reference numbers //
	const newAgentRefNo = agentRefNo.map((agent, index) => {
		return (
			<option key={index} value={agent}>
				{agent}
			</option>
		);
	});
	return (
		<>
			<div className='field agentRef'>
				<label className='label'>Agent Reference Number</label>
				<div className='control'>
					<div className='select'>
						<select onChange={onhandleAgentRefChange}>
							{newAgentRefNo}
						</select>
					</div>
				</div>
			</div>
		</>
	);
};

export default AgentReferenceNum;
