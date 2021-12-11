import React, { useState } from 'react';
import PDFDisplay from '../PDFDisplay/PDFDisplay';
// import { Link } from 'react-router-dom';

const Button = ({ pdfLink, pdfName }) => {
	const [file, setFile] = useState(null);
	return (
		<>
			<div className='fileLink'>
				<button
					type='button'
					onClick={() => setFile(pdfLink)}
					className='button is-ghost'>
					{pdfName}
				</button>
			</div>
			<PDFDisplay file={file} />
		</>
	);
};

export default Button;
