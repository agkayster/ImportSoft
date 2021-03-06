import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MaterialIndex from './components/materials/Index';
import PDFDisplay from './components/PDFDisplay/PDFDisplay';
import New from './components/materials/New';
import NewPdf from './components/materials/NewPdf';
function App() {
	return (
		<Router>
			<>
				<Routes>
					<Route path='/materials/new' element={<New />} />
					<Route path='/materials/uploadPDF' element={<NewPdf />} />
					<Route path='/materials/pdf' element={<PDFDisplay />} />
					<Route path='/materials' element={<MaterialIndex />} />
				</Routes>
			</>
		</Router>
	);
}

export default App;
