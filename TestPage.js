import { appendValuesWrapper } from 'backend/googlesheet_wrapper.jsw';

$w.onReady(function () {
    registerHandlers();
});

function registerHandlers() {
    $w('#image34').onViewportEnter(() => getValuesFromSheet());
    $w('#submitoptin').onClick(() => saveValuesToSheet());
    $w("#submitoptin").onClick(sendFormData);
    $w('#inputfirstname').onInput
}



// Gets today's date and time
const today = new Date();


async function saveValuesToSheet() {
    const first = $w('#inputfirstname').value;
    const last = $w('#inputlastname').value;    
    const phone = $w('#inputphone').value;
    const city = $w('#inputcity').value;
    const market = "ATL";
    const today = Date();
    const values = [first, last, phone, city, market, today];
    try {
        const res = await appendValuesWrapper(values);
        $w('#inputfirstname').value = '';
        $w('#inputlastname').value = '';
        $w('#inputphone').value = '';
        $w('#inputcity').value = '';
        "ATL";
        Date();
        showMessage(res);
    } catch (err) {
        showMessage(err.toString());
    }
}

function showMessage(msg) {
    $w('#msgbox').text = msg;
    $w('#msgbox').expand()
    setTimeout(() => {
        $w('#msgbox').collapse();
    }, 5000);
}



//incentive pull to site

import { getValuesWrapper } from 'backend/incentive_pull.jsw';




async function getValuesFromSheet() {
    try {
        const [Date, ATLMonMorning,	ATLMonMidday,	ATLMonAfternoon,	ATLMonEvening,	ATLTuesMorning,	ATLTuesMidday,	ATLTuesAfternoon,	ATLTuesEvening,	ATLWedMorning,	ATLWedMidday,	ATLWedAfternoon,	ATLWedEvening,	ATLThurMorning,	ATLThurMidday,	ATLThurAfternoon,	ATLThurEvening,	ATLFriMorning,	ATLFriMidday,	ATLFriAfternoon,	ATLFriEvening,	ATLSatMorning,	ATLSatMidday,	ATLSatAfternoon,	ATLSatEvening,	ATLSunMorning,	ATLSunMidday,	ATLSunAfternoon,	ATLSunEvening,	CHIMonMorning,	CHIMonMidday,	CHIMonAfternoon,	CHIMonEvening,	CHITuesMorning,	CHITuesMidday,	CHITuesAfternoon,	CHITuesEvening,	CHIWedMorning,	CHIWedMidday,	CHIWedAfternoon,	CHIWedEvening,	CHIThurMorning,	CHIThurMidday,	CHIThurAfternoon,	CHIThurEvening,	CHIFriMorning,	CHIFriMidday,	CHIFriAfternoon,	CHIFriEvening,	CHISatMorning,	CHISatMidday,	CHISatAfternoon,	CHISatEvening,	CHISunMorning,	CHISunMidday,	CHISunAfternoon,	CHISunEvening,	CLEMonMorning,	CLEMonMidday,	CLEMonAfternoon,	CLEMonEvening,	CLETuesMorning,	CLETuesMidday,	CLETuesAfternoon,	CLETuesEvening,	CLEWedMorning,	CLEWedMidday,	CLEWedAfternoon,	CLEWedEvening,	CLEThurMorning,	CLEThurMidday,	CLEThurAfternoon,	CLEThurEvening,	CLEFriMorning,	CLEFriMidday,	CLEFriAfternoon,	CLEFriEvening,	CLESatMorning,	CLESatMidday,	CLESatAfternoon,	CLESatEvening,	CLESunMorning,	CLESunMidday,	CLESunAfternoon,	CLESunEvening,	CLSMonMorning,	CLSMonMidday,	CLSMonAfternoon,	CLSMonEvening,	CLSTuesMorning,	CLSTuesMidday,	CLSTuesAfternoon,	CLSTuesEvening,	CLSWedMorning,	CLSWedMidday,	CLSWedAfternoon,	CLSWedEvening,	CLSThurMorning,	CLSThurMidday,	CLSThurAfternoon,	CLSThurEvening,	CLSFriMorning,	CLSFriMidday,	CLSFriAfternoon,	CLSFriEvening,	CLSSatMorning,	CLSSatMidday,	CLSSatAfternoon,	CLSSatEvening,	CLSSunMorning,	CLSSunMidday,	CLSSunAfternoon,	CLSSunEvening,	DENMonMorning,	DENMonMidday,	DENMonAfternoon,	DENMonEvening,	DENTuesMorning,	DENTuesMidday,	DENTuesAfternoon,	DENTuesEvening,	DENWedMorning,	DENWedMidday,	DENWedAfternoon,	DENWedEvening,	DENThurMorning,	DENThurMidday,	DENThurAfternoon,	DENThurEvening,	DENFriMorning,	DENFriMidday,	DENFriAfternoon,	DENFriEvening,	DENSatMorning,	DENSatMidday,	DENSatAfternoon,	DENSatEvening,	DENSunMorning,	DENSunMidday,	DENSunAfternoon,	DENSunEvening,	DETMonMorning,	DETMonMidday,	DETMonAfternoon,	DETMonEvening,	DETTuesMorning,	DETTuesMidday,	DETTuesAfternoon,	DETTuesEvening,	DETWedMorning,	DETWedMidday,	DETWedAfternoon,	DETWedEvening,	DETThurMorning,	DETThurMidday,	DETThurAfternoon,	DETThurEvening,	DETFriMorning,	DETFriMidday,	DETFriAfternoon,	DETFriEvening,	DETSatMorning,	DETSatMidday,	DETSatAfternoon,	DETSatEvening,	DETSunMorning,	DETSunMidday,	DETSunAfternoon,	DETSunEvening,	DFWMonMorning,	DFWMonMidday,	DFWMonAfternoon,	DFWMonEvening,	DFWTuesMorning,	DFWTuesMidday,	DFWTuesAfternoon,	DFWTuesEvening,	DFWWedMorning,	DFWWedMidday,	DFWWedAfternoon,	DFWWedEvening,	DFWThurMorning,	DFWThurMidday,	DFWThurAfternoon,	DFWThurEvening,	DFWFriMorning,	DFWFriMidday,	DFWFriAfternoon,	DFWFriEvening,	DFWSatMorning,	DFWSatMidday,	DFWSatAfternoon,	DFWSatEvening,	DFWSunMorning,	DFWSunMidday,	DFWSunAfternoon,	DFWSunEvening,	GRRMonMorning,	GRRMonMidday,	GRRMonAfternoon,	GRRMonEvening,	GRRTuesMorning,	GRRTuesMidday,	GRRTuesAfternoon,	GRRTuesEvening,	GRRWedMidday,	GRRWedAfternoon,	GRRWedEvening,	GRRThurMorning,	GRRThurMidday,	GRRThurAfternoon,	GRRThurEvening,	GRRFriMorning,	GRRFriMidday,	GRRFriAfternoon,	GRRFriEvening,	GRRSatMorning,	GRRSatMidday,	GRRSatAfternoon,	GRRSatEvening,	GRRSunMorning,	GRRSunMidday,	GRRSunAfternoon,	GRRSunEvening,	HOUMonMorning,	HOUMonMidday,	HOUMonAfternoon,	HOUMonEvening,	HOUTuesMorning,	HOUTuesMidday,	HOUTuesAfternoon,	HOUTuesEvening,	HOUWedMorning,	HOUWedMidday,	HOUWedAfternoon,	HOUWedEvening,	HOUThurMorning,	HOUThurMidday,	HOUThurAfternoon,	HOUThurEvening,	HOUFriMorning,	HOUFriMidday,	HOUFriAfternoon,	HOUFriEvening,	HOUSatMorning,	HOUSatMidday,	HOUSatAfternoon,	HOUSatEvening,	HOUSunMorning,	HOUSunMidday,	HOUSunAfternoon,	HOUSunEvening,	INDMonMorning,	INDMonMidday,	INDMonAfternoon,	INDMonEvening,	INDTuesMorning,	INDTuesMidday,	INDTuesAfternoon,	INDTuesEvening,	INDWedMorning,	INDWedMidday,	INDWedAfternoon,	INDWedEvening,	INDThurMorning,	INDThurMidday,	INDThurAfternoon,	INDThurEvening,	INDFriMorning,	INDFriMidday,	INDFriAfternoon,	INDFriEvening,	INDSatMorning,	INDSatMidday,	INDSatAfternoon,	INDSatEvening,	INDSunMorning,	INDSunMidday,	INDSunAfternoon,	INDSunEvening,	JAXMonMorning,	JAXMonMidday,	JAXMonAfternoon,	JAXMonEvening,	JAXTuesMorning,	JAXTuesMidday,	JAXTuesAfternoon,	JAXTuesEvening,	JAXWedMorning,	JAXWedMidday,	JAXWedAfternoon,	JAXWedEvening,	JAXThurMorning,	JAXThurMidday,	JAXThurAfternoon,	JAXThurEvening,	JAXFriMorning,	JAXFriMidday,	JAXFriAfternoon,	JAXFriEvening,	JAXSatMorning,	JAXSatMidday,	JAXSatAfternoon,	JAXSatEvening,	JAXSunMorning,	JAXSunMidday,	JAXSunAfternoon,	JAXSunEvening,	MIAMonMorning,	MIAMonMidday,	MIAMonAfternoon,	MIAMonEvening,	MIATuesMorning,	MIATuesMidday,	MIATuesAfternoon,	MIATuesEvening,	MIAWedMorning,	MIAWedMidday,	MIAWedAfternoon,	MIAWedEvening,	MIAThurMorning,	MIAThurMidday,	MIAThurAfternoon,	MIAThurEvening,	MIAFriMorning,	MIAFriMidday,	MIAFriAfternoon,	MIAFriEvening,	MIASatMorning,	MIASatMidday,	MIASatAfternoon,	MIASatEvening,	MIASunMorning,	MIASunMidday,	MIASunAfternoon,	MIASunEvening,	MKEMonMorning,	MKEMonMidday,	MKEMonAfternoon,	MKEMonEvening,	MKETuesMorning,	MKETuesMidday,	MKETuesAfternoon,	MKETuesEvening,	MKEWedMorning,	MKEWedMidday,	MKEWedAfternoon,	MKEWedEvening,	MKEThurMorning,	MKEThurMidday,	MKEThurAfternoon,	MKEThurEvening,	MKEFriMorning,	MKEFriMidday,	MKEFriAfternoon,	MKEFriEvening,	MKESatMorning,	MKESatMidday,	MKESatAfternoon,	MKESatEvening,	MKESunMorning,	MKESunMidday,	MKESunAfternoon,	MKESunEvening,	MSPMonMorning,	MSPMonMidday,	MSPMonAfternoon,	MSPMonEvening,	MSPTuesMorning,	MSPTuesMidday,	MSPTuesAfternoon,	MSPTuesEvening,	MSPWedMorning,	MSPWedMidday,	MSPWedAfternoon,	MSPWedEvening,	MSPThurMorning,	MSPThurMidday,	MSPThurAfternoon,	MSPThurEvening,	MSPFriMorning,	MSPFriMidday,	MSPFriAfternoon,	MSPFriEvening,	MSPSatMorning,	MSPSatMidday,	MSPSatAfternoon,	MSPSatEvening,	MSPSunMorning,	MSPSunMidday,	MSPSunAfternoon,	MSPSunEvening,	NSHMonMorning,	NSHMonMidday,	NSHMonAfternoon,	NSHMonEvening,	NSHTuesMorning,	NSHTuesMidday,	NSHTuesAfternoon,	NSHTuesEvening,	NSHWedMorning,	NSHWedMidday,	NSHWedAfternoon,	NSHWedEvening,	NSHThurMorning,	NSHThurMidday,	NSHThurAfternoon,	NSHThurEvening,	NSHFriMorning,	NSHFriMidday,	NSHFriAfternoon,	NSHFriEvening,	NSHSatMorning,	NSHSatMidday,	NSHSatAfternoon,	NSHSatEvening,	NSHSunMorning,	NSHSunMidday,	NSHSunAfternoon,	NSHSunEvening,	NVAMonMorning,	NVAMonMidday,	NVAMonAfternoon,	NVAMonEvening,	NVATuesMorning,	NVATuesMidday,	NVATuesAfternoon,	NVATuesEvening,	NVAWedMorning,	NVAWedMidday,	NVAWedAfternoon,	NVAWedEvening,	NVAThurMorning,	NVAThurMidday,	NVAThurAfternoon,	NVAThurEvening,	NVAFriMorning,	NVAFriMidday,	NVAFriAfternoon,	NVAFriEvening,	NVASatMorning,	NVASatMidday,	NVASatAfternoon,	NVASatEvening,	NVASunMorning,	NVASunMidday,	NVASunAfternoon,	NVASunEvening,	OKCMonMorning,	OKCMonMidday,	OKCMonAfternoon,	OKCMonEvening,	OKCTuesMorning,	OKCTuesMidday,	OKCTuesAfternoon,	OKCTuesEvening,	OKCWedMorning,	OKCWedMidday,	OKCWedAfternoon,	OKCWedEvening,	OKCThurMorning,	OKCThurMidday,	OKCThurAfternoon,	OKCThurEvening,	OKCFriMorning,	OKCFriMidday,	OKCFriAfternoon,	OKCFriEvening,	OKCSatMorning,	OKCSatMidday,	OKCSatAfternoon,	OKCSatEvening,	OKCSunMorning,	OKCSunMidday,	OKCSunAfternoon,	OKCSunEvening,	ORLMonMorning,	ORLMonMidday,	ORLMonAfternoon,	ORLMonEvening,	ORLTuesMorning,	ORLTuesMidday,	ORLTuesAfternoon,	ORLTuesEvening,	ORLWedMorning,	ORLWedMidday,	ORLWedAfternoon,	ORLWedEvening,	ORLThurMorning,	ORLThurMidday,	ORLThurAfternoon,	ORLThurEvening,	ORLFriMorning,	ORLFriMidday,	ORLFriAfternoon,	ORLFriEvening,	ORLSatMorning,	ORLSatMidday,	ORLSatAfternoon,	ORLSatEvening,	ORLSunMorning,	ORLSunMidday,	ORLSunAfternoon,	ORLSunEvening,	PHIMonMorning,	PHIMonMidday,	PHIMonAfternoon,	PHIMonEvening,	PHITuesMorning,	PHITuesMidday,	PHITuesAfternoon,	PHITuesEvening,	PHIWedMorning,	PHIWedMidday,	PHIWedAfternoon,	PHIWedEvening,	PHIThurMorning,	PHIThurMidday,	PHIThurAfternoon,	PHIThurEvening,	PHIFriMorning,	PHIFriMidday,	PHIFriAfternoon,	PHIFriEvening,	PHISatMorning,	PHISatMidday,	PHISatAfternoon,	PHISatEvening,	PHISunMorning,	PHISunMidday,	PHISunAfternoon,	PHISunEvening,	PORMonMorning,	PORMonMidday,	PORMonAfternoon,	PORMonEvening,	PORTuesMorning,	PORTuesMidday,	PORTuesAfternoon,	PORTuesEvening,	PORWedMorning,	PORWedMidday,	PORWedAfternoon,	PORWedEvening,	PORThurMorning,	PORThurMidday,	PORThurAfternoon,	PORThurEvening,	PORFriMorning,	PORFriMidday,	PORFriAfternoon,	PORFriEvening,	PORSatMorning,	PORSatMidday,	PORSatAfternoon,	PORSatEvening,	PORSunMorning,	PORSunMidday,	PORSunAfternoon,	PORSunEvening,	SATMonMorning,	SATMonMidday,	SATMonAfternoon,	SATMonEvening,	SATTuesMorning,	SATTuesMidday,	SATTuesAfternoon,	SATTuesEvening,	SATWedMorning,	SATWedMidday,	SATWedAfternoon,	SATWedEvening,	SATThurMorning,	SATThurMidday,	SATThurAfternoon,	SATThurEvening,	SATFriMorning,	SATFriMidday,	SATFriAfternoon,	SATFriEvening,	SATSatMorning,	SATSatMidday,	SATSatAfternoon,	SATSatEvening,	SATSunMorning,	SATSunMidday,	SATSunAfternoon,	SATSunEvening,	STLMonMorning,	STLMonMidday,	STLMonAfternoon,	STLMonEvening,	STLTuesMorning,	STLTuesMidday,	STLTuesAfternoon,	STLTuesEvening,	STLWedMorning,	STLWedMidday,	STLWedAfternoon,	STLWedEvening,	STLThurMorning,	STLThurMidday,	STLThurAfternoon,	STLThurEvening,	STLFriMorning,	STLFriMidday,	STLFriAfternoon,	STLFriEvening,	STLSatMorning,	STLSatMidday,	STLSatAfternoon,	STLSatEvening,	STLSunMorning,	STLSunMidday,	STLSunAfternoon,	STLSunEvening,	TESTThurMidday,	TESTFriMidday,	TPAMonMorning,	TPAMonMidday,	TPAMonAfternoon,	TPAMonEvening,	TPATuesMorning,	TPATuesMidday,	TPATuesAfternoon,	TPATuesEvening,	TPAWedMorning,	TPAWedMidday,	TPAWedAfternoon,	TPAWedEvening,	TPAThurMorning,	TPAThurMidday,	TPAThurAfternoon,	TPAThurEvening,	TPAFriMorning,	TPAFriMidday,	TPAFriAfternoon,	TPAFriEvening,	TPASatMorning,	TPASatMidday,	TPASatAfternoon,	TPASatEvening,	TPASunMorning,	TPASunMidday,	TPASunAfternoon,	TPASunEvening,	WPBMonMorning,	WPBMonMidday,	WPBMonAfternoon,	WPBMonEvening,	WPBTuesMorning,	WPBTuesMidday,	WPBTuesAfternoon,	WPBTuesEvening,	WPBWedMorning,	WPBWedMidday,	WPBWedAfternoon,	WPBWedEvening,	WPBThurMorning,	WPBThurMidday,	WPBThurAfternoon,	WPBThurEvening,	WPBFriMorning,	WPBFriMidday,	WPBFriAfternoon,	WPBFriEvening,	WPBSatMorning,	WPBSatMidday,	WPBSatAfternoon,	WPBSatEvening,	WPBSunMorning,	WPBSunMidday,	WPBSunAfternoon,	WPBSunEvening] = (await getValuesWrapper('LIVE4TIMES!A1:YX4'))[3];
        $w('#atlmonmorning').text =  ATLMonMorning;
        $w('#atlmonmidday').text =  ATLMonMidday;
        $w('#atlmonevening').text = ATLMonAfternoon;
        $w('#atlmonevening').text = ATLMonEvening;
        $w('#atltuesmorning').text = ATLTuesMorning;
        $w('#atltuesmidday').text =  ATLTuesMidday;
        $w('#atlmonevening').text = ATLTuesAfternoon;
        $w('#atltuesevening').text = ATLTuesEvening;
        $w('#atlwedmorning').text =  ATLWedMorning;
        $w('#atlwedmidday').text =  ATLWedMidday;
        $w('#atlmonevening').text = ATLWedAfternoon;
        $w('#atlwedevening').text = ATLWedEvening;
        $w('#atlthursmorning').text =  ATLThurMorning;
        $w('#atlthursmidday').text =  ATLThurMidday;
        $w('#atlmonevening').text = ATLThurAfternoon;
        $w('#atlthursevening').text = ATLThurEvening;
        $w('#atlfrimorning').text = ATLFriMorning;
        $w('#atlfrimidday').text =  ATLFriMidday;
        $w('#atlmonevening').text = ATLFriAfternoon;
        $w('#atlfrievening').text = ATLFriEvening;
        $w('#atlsatmorning').text =  ATLSatMorning;
        $w('#atlsatmidday').text =  ATLSatMidday;
        $w('#atlmonevening').text = ATLSatAfternoon;
        $w('#atlsatevening').text = ATLSatEvening;
        $w('#atlsunmorning').text =  ATLSunMorning;
        $w('#atlsunmidday').text =  ATLSunMidday;
        $w('#atlmonevening').text = ATLSunAfternoon;
        $w('#atlsunevening').text = ATLSunEvening;
        $w('#date').text = Date;
    } catch (err) {
        showError(err.toString());
    }
}


function showError(msg) {
    $w('#incentiveerror').text = msg;
    $w('#incentiveerror').expand()
    setTimeout(() => {
        $w('#incentiveerror').collapse();
    }, 50000);
}

//emailconfirmation

import {sendEmail, sendEmailWithRecipient} from 'backend/email';


function sendFormData() {
  const subject = `Weekly Incentive Confirmation: ${$w("#date").text}`;
  const body = `You have successfully Opted-in to the Weekly Incentives for ${$w("#date").text}. You're now set up to earn more with each Rescue! For questions feel free to reach out to your Market Lead for more information.`;
  const recipient = $w("#email").value;
 
  sendEmailWithRecipient(subject, body, recipient)
    .then(response => console.log(response)); 
    
  sendEmail(subject, body)
    .then(response => console.log(response));
}

