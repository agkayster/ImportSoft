import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MaterialIndex from './components/materials/Index';
function App() {
	return (
		<Router>
			<>
				<Routes>
					{/* <Route path='/hotels/:id' component={Show} /> */}
					<Route path='/materials' element={<MaterialIndex />} />
				</Routes>
			</>
		</Router>
	);
}

export default App;
