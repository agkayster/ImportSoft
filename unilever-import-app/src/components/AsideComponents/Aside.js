import React from 'react';
import AgentName from './AgentName';
import AgentReferenceNum from './AgentReferenceNum';
import Materials from './Materials';
import PONumber from './PONumber';

const Aside = ({
	handleAgentNameCategory,
	materials,
	agentRefGrouping,
	handleAgentRefChange,
	handleMaterialChange,
	handlePOChange,
}) => {
	return (
		<>
			<aside className='menu'>
				<AgentName
					onhandleAgentNameCategory={handleAgentNameCategory}
					materials={materials}
				/>
				<AgentReferenceNum
					agentRefGrouping={agentRefGrouping}
					onhandleAgentRefChange={handleAgentRefChange}
				/>
				<Materials
					materials={materials}
					onHandleMaterialChange={handleMaterialChange}
				/>
				<PONumber
					onHandlePONumChange={handlePOChange}
					materials={materials}
				/>
			</aside>
		</>
	);
};

export default Aside;
