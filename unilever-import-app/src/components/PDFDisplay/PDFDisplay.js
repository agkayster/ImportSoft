import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// This is to enable PDF.JS WORKER//
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// cmaps allows pdf's with non-latin characters display perfectly//
const options = {
	cMapUrl: 'cmaps/',
	cMapPacked: true,
};

const PDFDisplay = ({ pdfLink, pdfName }) => {
	const [file, setFile] = useState(null);
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const pdfPath = {
		pdflink: pdfLink,
		name: pdfName,
	};

	/*To Prevent right click on screen*/
	document.addEventListener('contextmenu', (event) => {
		event.preventDefault();
	});

	// once pdf document loads successfully get number of pages//
	const onDocumentLoadSuccess = ({ numPages: nextNumPages }) => {
		setNumPages(nextNumPages);
		setPageNumber(1);
	};

	// To implement PREVIOUS and NEXT page using pageNumber //
	// Best way to update state to check for past and compare with going forward//
	const changePage = (offset) => {
		setPageNumber((prevPageNumber) => prevPageNumber + offset);
	};

	const previousPage = () => {
		changePage(-1);
	};

	const nextPage = () => {
		changePage(1);
	};

	return (
		<>
			<div className='fileLink'>
				<button
					type='button'
					onClick={() => setFile(pdfPath.pdflink)}
					className='button is-ghost'>
					{pdfPath.name}
				</button>
			</div>
			<div className='fileDocument'>
				<Document
					file={file}
					options={options}
					onLoadSuccess={onDocumentLoadSuccess}
					externalLinkTarget="_blank">
					<Page pageNumber={pageNumber} />
				</Document>
			</div>
			<div>
				<div className='pagec'>
					Page {pageNumber || (numPages ? 1 : '--')} of{' '}
					{numPages || '--'}
				</div>
				<div className='buttonc'>
					<button
						type='button'
						disabled={pageNumber <= 1}
						onClick={previousPage}
						className='prevBtn'>
						Previous
					</button>

					<button
						type='button'
						disabled={pageNumber >= numPages}
						onClick={nextPage}
						className='nextBtn'>
						Next
					</button>
				</div>
			</div>
		</>
	);
};

export default PDFDisplay;
