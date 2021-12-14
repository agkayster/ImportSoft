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
				<div className='field-body'>
					<div className='field'>
						<div className='control'>
							<Link to='/materials/new'>
								<button className='button is-primary'>
									Add Data
								</button>
							</Link>
						</div>
					</div>
				</div>
				<div className='field-body'>
					<div className='field'>
						<div className='control'>
							<Link to='/materials/uploadPDF'>
								<button className='button is-primary'>
									Upload PDF
								</button>
							</Link>
						</div>
					</div>
				</div>
			</aside>
		</>
	);
};

export default Aside;
