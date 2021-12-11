import React from 'react';
import AgentName from './AgentName';
import AgentReferenceNum from './AgentReferenceNum';
import Materials from './Materials';
import PONumber from './PONumber';
import { Link } from 'react-router-dom';

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
				<Link to='/materials/new'>
					<button type='button'>Add NeW Data</button>
				</Link>
			</aside>
		</>
	);
};

export default Aside;
