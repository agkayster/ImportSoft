import React, { useState, useEffect } from 'react';
// import PDFDisplay from '../PDFDisplay/PDFDisplay';
import DutyRate from '../OtherComponents/DutyRate';
import Archived from '../OtherComponents/Archived';
import DutyPaid from '../OtherComponents/DutyPaid';
import CreatedDate from '../OtherComponents/CreatedDate';
import DateDelivered from '../OtherComponents/DateDelivered';
import BerthDate from '../OtherComponents/BerthDate';
import Aside from '../AsideComponents/Aside';
import { axiosInstance } from '../../Utils/API';
import Button from '../OtherComponents/Button';

const log = console.log.bind(document);

const MaterialIndex = () => {
	const [materials, setmaterials] = useState([]);
	const [agentRefGrouping, setagentRefGrouping] = useState([]);
	const [agentRefNum, setagentRefNum] = useState('');
	const [poNumber, setpoNumber] = useState('');
	const [newMaterials, setnewMaterials] = useState('');
	const [weight, setweight] = useState('');
	const [berth, setberth] = useState(new Date());
	const [twentyFtGroupage, settwentyFtGroupage] = useState('');
	const [fortyFt, setfortyFt] = useState('');
	const [dateDelivered, setdateDelivered] = useState(new Date());
	const [arrivalMonth, setarrivalMonth] = useState('');
	const [arrivalYear, setarrivalYear] = useState('');
	const [formM, setformM] = useState('');
	const [dutyPaid, setdutyPaid] = useState('');
	const [dutyRate, setdutyRate] = useState([]);
	const [hsCodePar, sethsCodePar] = useState([]);
	const [billOfLading, setbillOfLading] = useState('');
	const [importDuty, setimportDuty] = useState([]);
	const [supplierName, setsupplierName] = useState('');
	const [countryOfSupply, setcountryOfSupply] = useState('');
	const [portOfOrigin, setportOfOrigin] = useState('');
	const [countryOfOrigin, setcountryOfOrigin] = useState('');
	const [cifValue, setcifValue] = useState('');
	const [shippingLine, setshippingLine] = useState('');
	const [hscodeFormM, sethscodeFormM] = useState([]);
	const [portOfDestination, setportOfDestination] = useState('');
	const [archived, setarchived] = useState(false);
	const [createdDate, setcreatedDate] = useState(new Date());
	const [fileName, setFileName] = useState('');
	const [pdfLink, setPdfLink] = useState('');
	const [pdfName, setPdfName] = useState('');
	const [materialsPDF, setMaterialsPDF] = useState([]);

	useEffect(() => {
		const getMaterials = async () => {
			try {
				await axiosInstance
					.get('/materials')
					.then((res) => setmaterials(res.data));
			} catch (err) {
				log('get error materials =>', err);
			}
		};
		getMaterials();
	}, []);

	useEffect(() => {
		const getMaterialsPDF = async () => {
			try {
				await axiosInstance
					.get('/materialsPdf')
					.then((res) => setMaterialsPDF(res.data));
			} catch (err) {
				log('get error pdf =>', err);
			}
		};
		getMaterialsPDF();
	}, []);

	// Handles changes when you pick a particular agent name //
	const handleAgentNameCategory = (e) => {
		const agentRefGroup = [];
		const { value } = e.target;

		let searchValue = '';

		switch (value) {
			case 'GMT':
				searchValue = 'GMT';
				break;
			case 'ANZ':
				searchValue = 'ANZ';
				break;
			case 'DHL':
				searchValue = 'DHL';
				break;
			default:
				searchValue = 'All';
		}

		let i = 0;

		materials.forEach((material) => {
			materialsPDF.forEach((materialPDF) => {
				if (
					material.agentName === searchValue &&
					materialPDF.pdfName === material.fileName
				) {
					agentRefGroup.push({
						id: i++,
						agentrefnumber: material.agentReference.toUpperCase(),
						fileName: material.fileName.toUpperCase(),
						dutyRate: material.dutyRate,
						hscodePar: material.hscodePar,
						importDuty: material.importDuty,
						hscodeFormM: material.hscodeFormM.toUpperCase(),
						archived: material.archived,
						poNum: material.poNum.toUpperCase(),
						twentyFtGroupage: material.twentyFtGroupage,
						fourtyFt: material.fourtyFt,
						materials: material.materials.toUpperCase(),
						weight: material.weight,
						berth: material.berth,
						arrivalMonth: material.arrivalMonth.toUpperCase(),
						arrivalYear: material.arrivalYear,
						formM: material.formM.toUpperCase(),
						dutyPaid: material.dutyPaid,
						billOfLading: material.billOfLading,
						supplierName: material.supplierName.toUpperCase(),
						countryOfSupply: material.countryOfSupply.toUpperCase(),
						portOfOrigin: material.portOfOrigin.toUpperCase(),
						countryOfOrigin: material.countryOfOrigin.toUpperCase(),
						cifValue: material.cifValue,
						shippingLine: material.shippingLine.toUpperCase(),
						portOfDestination:
							material.portOfDestination.toUpperCase(),
						dateDelivered: material.dateDelivered,
						createdDate: material.createdAt,
						pdfURLLink: materialPDF.pdfPathLink,
						pdfURLName: materialPDF.pdfName.toUpperCase(),
					});
				}
			});
		});

		setagentRefGrouping(agentRefGroup);
	};

	// Get all agent reference numbers //
	const agentRefNo = agentRefGrouping.map((agent) => {
		return agent.agentrefnumber;
	});
	//Handles changes when you select a particular agent reference number //
	const handleAgentRefChange = (e) => {
		const { value } = e.target;
		const getDetails = agentRefGrouping.find(
			(agent) => agent.agentrefnumber === value
		);
		agentRefNo.forEach((item) => {
			if (value === item) {
				setagentRefNum(getDetails.agentrefnumber);
				setpoNumber(getDetails.poNum);
				setnewMaterials(getDetails.materials);
				setweight(getDetails.weight);
				setberth(getDetails.berth);
				settwentyFtGroupage(getDetails.twentyFtGroupage);
				setfortyFt(getDetails.fourtyFt);
				setdateDelivered(getDetails.dateDelivered);
				setarrivalMonth(getDetails.arrivalMonth);
				setarrivalYear(getDetails.arrivalYear);
				setformM(getDetails.formM);
				setdutyPaid(getDetails.dutyPaid);
				setdutyRate(getDetails.dutyRate);
				sethsCodePar(getDetails.hscodePar);
				setbillOfLading(getDetails.billOfLading);
				setimportDuty(getDetails.importDuty);
				setsupplierName(getDetails.supplierName);
				setcountryOfSupply(getDetails.countryOfSupply);
				setportOfOrigin(getDetails.portOfOrigin);
				setcountryOfOrigin(getDetails.countryOfOrigin);
				setcifValue(getDetails.cifValue);
				setshippingLine(getDetails.shippingLine);
				sethscodeFormM(getDetails.hscodeFormM);
				setportOfDestination(getDetails.portOfDestination);
				setarchived(getDetails.archived);
				setcreatedDate(getDetails.createdDate);
				setFileName(getDetails.fileName);
				setPdfLink(getDetails.pdfURLLink);
				setPdfName(getDetails.pdfURLName);
			}
		});
	};

	// Handles changes when you select a particular material//
	const handleMaterialChange = (e) => {
		const { value } = e.target;

		materials.forEach((material) => {
			if (value === material.materials) {
				setagentRefNum(material.agentReference.toUpperCase());
				setpoNumber(material.poNum.toUpperCase());
				setnewMaterials(material.materials.toUpperCase());
				setweight(material.weight);
				setberth(material.berth);
				settwentyFtGroupage(material.twentyFtGroupage);
				setfortyFt(material.fourtyFt);
				setdateDelivered(material.dateDelivered);
				setarrivalMonth(material.arrivalMonth.toUpperCase());
				setarrivalYear(material.arrivalYear);
				setformM(material.formM.toUpperCase());
				setdutyPaid(material.dutyPaid);
				setdutyRate(material.dutyRate);
				sethsCodePar(material.hscodePar);
				setbillOfLading(material.billOfLading);
				setimportDuty(material.importDuty);
				setsupplierName(material.supplierName.toUpperCase());
				setcountryOfSupply(material.countryOfSupply.toUpperCase());
				setportOfOrigin(material.portOfOrigin.toUpperCase());
				setcountryOfOrigin(material.countryOfOrigin.toUpperCase());
				setcifValue(material.cifValue);
				setshippingLine(material.shippingLine.toUpperCase());
				sethscodeFormM(material.hscodeFormM);
				setportOfDestination(material.portOfDestination.toUpperCase());
				setarchived(material.archived);
				setcreatedDate(material.createdAt);
			}
		});
	};

	// Handles changes when you select a particular PO //
	const handlePOChange = (e) => {
		const { value } = e.target;
		materials.forEach((material) => {
			if (value === material.poNum) {
				setagentRefNum(material.agentReference.toUpperCase());
				setpoNumber(material.poNum.toUpperCase());
				setnewMaterials(material.materials.toUpperCase());
				setweight(material.weight);
				setberth(material.berth);
				settwentyFtGroupage(material.twentyFtGroupage);
				setfortyFt(material.fourtyFt);
				setdateDelivered(material.dateDelivered);
				setarrivalMonth(material.arrivalMonth.toUpperCase());
				setarrivalYear(material.arrivalYear);
				setformM(material.formM.toUpperCase());
				setdutyPaid(material.dutyPaid);
				setdutyRate(material.dutyRate);
				sethsCodePar(material.hscodePar);
				setbillOfLading(material.billOfLading);
				setimportDuty(material.importDuty);
				setsupplierName(material.supplierName.toUpperCase());
				setcountryOfSupply(material.countryOfSupply.toUpperCase());
				setportOfOrigin(material.portOfOrigin.toUpperCase());
				setcountryOfOrigin(material.countryOfOrigin.toUpperCase());
				setcifValue(material.cifValue);
				setshippingLine(material.shippingLine.toUpperCase());
				sethscodeFormM(material.hscodeFormM);
				setportOfDestination(material.portOfDestination.toUpperCase());
				setarchived(material.archived);
				setcreatedDate(material.createdAt);
			}
		});
	};

	log('get materials =>', materials);
	log('get materials pdf =>', materialsPDF);
	log('get materials pdf =>', materialsPDF);

	if (materials.length === 0) return <h4>Loading...</h4>;
	return (
		<div className='importApp'>
			<Aside
				handleAgentNameCategory={handleAgentNameCategory}
				agentRefGrouping={agentRefGrouping}
				materials={materials}
				handleAgentRefChange={handleAgentRefChange}
				handleMaterialChange={handleMaterialChange}
				handlePOChange={handlePOChange}
			/>
			<div className='allContainer'>
				<header className='matSoft'>
					<h1 className='mainSoft'>MaterialsSoft</h1>
				</header>
				<section className='section'>
					<div className='container'>
						<form className='form'>
							<div className='field agentRef'>
								<label className='label'>
									Agent Reference Number
								</label>
								<div className='control'>
									<div className='select'>
										<select onChange={handleAgentRefChange}>
											<option
												key={agentRefNum}
												value={agentRefNum}>
												{agentRefNum}
											</option>
										</select>
									</div>
								</div>
							</div>
							<div className='matDate'>
								<div className='field is-grouped startpo'>
									<label className='label'>PO Number</label>
									<div className='control startpo'>
										<p className='poNum'>{poNumber}</p>
									</div>

									<label className='label matLabel layer2'>
										Materials
									</label>
									<div className='control startpo'>
										<p className='materials'>
											{newMaterials}
										</p>
									</div>

									<label className='label weigth layer3'>
										Weight
									</label>
									<div className='control startpo'>
										<p className='weight'>{weight}</p>
									</div>

									<BerthDate berth={berth} />
								</div>
								<div className='field is-grouped groupage'>
									<label className='label twenty'>
										Twenty Foot Groupage
									</label>
									<div className='control groupage'>
										<p className='twentyFt'>
											{twentyFtGroupage}
										</p>
									</div>
									<label className='label forty layer2'>
										Forty Foot
									</label>
									<div className='control groupage'>
										<p className='fortyFt'>{fortyFt}</p>
									</div>
									<DateDelivered
										dateDelivered={dateDelivered}
									/>
									<label className='label month layer4'>
										Arrival Month
									</label>
									<div className='control groupage'>
										<p className='arrivalMonth'>
											{arrivalMonth}
										</p>
									</div>
								</div>

								<div className='field is-grouped startyear'>
									<label className='label arryear'>
										Arrival Year
									</label>
									<div className='control'>
										<p className='arrivalyear'>
											{arrivalYear}
										</p>
									</div>
									<label className='label formM layer2'>
										Form M
									</label>
									<div className='control'>
										<p className='fM'>{formM}</p>
									</div>
									<DutyPaid dutyPaid={dutyPaid} />
									<DutyRate dutyRate={dutyRate} />
								</div>

								<div className='field is-grouped startpar'>
									<label className='label hscodeP'>
										HSCODE PAR
									</label>
									<div className='control'>
										<ul>
											{hsCodePar.map((code) => (
												<li className='par' key={code}>
													{code}
												</li>
											))}
										</ul>
									</div>
									<label className='label bLading layer2'>
										Bill of Lading
									</label>
									<div className='control'>
										<p className='lading'>{billOfLading}</p>
									</div>
									<label className='label impDuty layer3'>
										Import Duty(₦)
									</label>
									<div className='control'>
										<ul>
											{importDuty.map((duty) => (
												<li className='duty' key={duty}>
													₦{duty.toLocaleString()}
												</li>
											))}
										</ul>
									</div>
									<label className='label supName layer4'>
										Supplier Name
									</label>
									<div className='control'>
										<p className='supname'>
											{supplierName}
										</p>
									</div>
								</div>

								<div className='field is-grouped startcountry'>
									<label className='label cSupply'>
										Country of Supply
									</label>
									<div className='control'>
										<p className='supply'>
											{countryOfSupply}
										</p>
									</div>

									<label className='label pOrigin layer2'>
										Port Of Origin
									</label>
									<div className='control'>
										<p className='origin'>{portOfOrigin}</p>
									</div>

									<label className='label cOrigin layer3'>
										Country Of Origin
									</label>
									<div className='control'>
										<p className='countryorigin'>
											{countryOfOrigin}
										</p>
									</div>

									<label className='label cifV layer4'>
										CIF VALUE(₦)
									</label>
									<div className='control'>
										<p className='cif'>
											₦{cifValue.toLocaleString()}
										</p>
									</div>
								</div>

								<div className='field is-grouped startline'>
									<label className='label sLine'>
										Shipping Line
									</label>
									<div className='control'>
										<p className='shipping'>
											{shippingLine}
										</p>
									</div>
									<label className='label hscodeM layer2'>
										HSCODE FORM M
									</label>
									<div className='control'>
										<ul>
											{hscodeFormM.map((code) => (
												<li
													className='hsformm'
													key={code}>
													{code}
												</li>
											))}
										</ul>
									</div>
									<label className='label pDest layer3'>
										Port of Destination
									</label>
									<div className='control'>
										<p className='destination'>
											{portOfDestination}
										</p>
									</div>
									<Archived archived={archived} />
								</div>
							</div>
							<div className='field pdfLink'>
								<label className='label pdfLink'>
									Click to view PDF
								</label>
								<div className='control'>
									<Button
										pdfLink={pdfLink}
										pdfName={pdfName}
									/>
									{/* <PDFDisplay
										pdfLink={pdfLink}
										pdfName={pdfName}
									/> */}
								</div>
							</div>
							<CreatedDate createdDate={createdDate} />
						</form>
					</div>
				</section>
			</div>
		</div>
	);
};

export default MaterialIndex;
