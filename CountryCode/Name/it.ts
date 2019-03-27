import { Alpha2 } from "../Alpha2"
import { Alpha3 } from "../Alpha3"
import { Numeric } from "../Numeric"
export function from(country: Alpha2 | Alpha3 | Numeric): string {
	return names[country] || from(Alpha2.from(country as Alpha3 | Numeric))
}

const names: { [country: string]: string | undefined } = {
		AD: "Andorra",
		AE: "Emirati Arabi Uniti",
		AF: "Afghanistan",
		AG: "Antigua e Barbuda",
		AI: "Anguilla",
		AL: "Albania",
		AM: "Armenia",
		AO: "Angola",
		AQ: "Antartide",
		AR: "Argentina",
		AS: "Samoa Americane",
		AT: "Austria",
		AU: "Australia",
		AW: "Aruba",
		AX: "Isole Åland",
		AZ: "Azerbaigian",
		BA: "Bosnia ed Erzegovina",
		BB: "Barbados",
		BD: "Bangladesh",
		BE: "Belgio",
		BF: "Burkina Faso",
		BG: "Bulgaria",
		BH: "Bahrain",
		BI: "Burundi",
		BJ: "Benin",
		BL: "Saint-Barthélemy",
		BM: "Bermuda",
		BN: "Brunei",
		BO: "Bolivia",
		BQ: "Isole BES",
		BR: "Brasile",
		BS: "Bahamas",
		BT: "Bhutan",
		BV: "Isola Bouvet",
		BW: "Botswana",
		BY: "Bielorussia",
		BZ: "Belize",
		CA: "Canada",
		CC: "Isole Cocos e Keeling",
		CD: "Repubblica Democratica del Congo",
		CF: "Repubblica Centrafricana",
		CG: "Repubblica del Congo",
		CH: "Svizzera",
		CI: "Costa d'Avorio",
		CK: "Isole Cook",
		CL: "Cile",
		CM: "Camerun",
		CN: "Cina",
		CO: "Colombia",
		CR: "Costa Rica",
		CU: "Cuba",
		CV: "Capo Verde",
		CW: "Curaçao",
		CX: "Isola del Natale",
		CY: "Cipro",
		CZ: "Repubblica Ceca",
		DE: "Germania",
		DJ: "Gibuti",
		DK: "Danimarca",
		DM: "Dominica",
		DO: "Repubblica Dominicana",
		DZ: "Algeria",
		EC: "Ecuador",
		EE: "Estonia",
		EG: "Egitto",
		EH: "Sahara Occidentale",
		ER: "Eritrea",
		ES: "Spagna",
		ET: "Etiopia",
		FI: "Finlandia",
		FJ: "Figi",
		FK: "Isole Falkland",
		FM: "Stati Federati di Micronesia",
		FO: "Isole Fær Øer",
		FR: "Francia",
		GA: "Gabon",
		GB: "Regno Unito",
		GD: "Grenada",
		GE: "Georgia",
		GF: "Guyana Francese",
		GG: "Guernsey",
		GH: "Ghana",
		GI: "Gibilterra",
		GL: "Groenlandia",
		GM: "Gambia",
		GN: "Guinea",
		GP: "Guadalupa",
		GQ: "Guinea Equatoriale",
		GR: "Grecia",
		GS: "Georgia del Sud e isole Sandwich meridionali",
		GT: "Guatemala",
		GU: "Guam",
		GW: "Guinea-Bissau",
		GY: "Guyana",
		HK: "Hong Kong",
		HM: "Isole Heard e McDonald",
		HN: "Honduras",
		HR: "Croazia",
		HT: "Haiti",
		HU: "Ungheria",
		ID: "Indonesia",
		IE: "Irlanda",
		IL: "Israele",
		IM: "Isola di Man",
		IN: "India",
		IO: "Territori Britannici dell'Oceano Indiano",
		IQ: "Iraq",
		IR: "Iran",
		IS: "Islanda",
		IT: "Italia",
		JE: "Jersey",
		JM: "Giamaica",
		JO: "Giordania",
		JP: "Giappone",
		KE: "Kenya",
		KG: "Kirghizistan",
		KH: "Cambogia",
		KI: "Kiribati",
		KM: "Comore",
		KN: "Saint Kitts e Nevis",
		KP: "Corea del Nord",
		KR: "Corea del Sud",
		KW: "Kuwait",
		KY: "Isole Cayman",
		KZ: "Kazakistan",
		LA: "Laos",
		LB: "Libano",
		LC: "Santa Lucia",
		LI: "Liechtenstein",
		LK: "Sri Lanka",
		LR: "Liberia",
		LS: "Lesotho",
		LT: "Lituania",
		LU: "Lussemburgo",
		LV: "Lettonia",
		LY: "Libia",
		MA: "Marocco",
		MC: "Monaco",
		MD: "Moldavia",
		ME: "Montenegro",
		MF: "Saint-Martin",
		MG: "Madagascar",
		MH: "Isole Marshall",
		MK: "Macedonia",
		ML: "Mali",
		MM: "Birmania  Myanmar",
		MN: "Mongolia",
		MO: "Macao",
		MP: "Isole Marianne Settentrionali",
		MQ: "Martinica",
		MR: "Mauritania",
		MS: "Montserrat",
		MT: "Malta",
		MU: "Mauritius",
		MV: "Maldive",
		MW: "Malawi",
		MX: "Messico",
		MY: "Malesia",
		MZ: "Mozambico",
		NA: "Namibia",
		NC: "Nuova Caledonia",
		NE: "Niger",
		NF: "Isola Norfolk",
		NG: "Nigeria",
		NI: "Nicaragua",
		NL: "Paesi Bassi",
		NO: "Norvegia",
		NP: "Nepal",
		NR: "Nauru",
		NU: "Niue",
		NZ: "Nuova Zelanda",
		OM: "Oman",
		PA: "Panamá",
		PE: "Perù",
		PF: "Polinesia Francese",
		PG: "Papua Nuova Guinea",
		PH: "Filippine",
		PK: "Pakistan",
		PL: "Polonia",
		PM: "Saint Pierre e Miquelon",
		PN: "Isole Pitcairn",
		PR: "Porto Rico",
		PS: "Stato di Palestina",
		PT: "Portogallo",
		PW: "Palau",
		PY: "Paraguay",
		QA: "Qatar",
		RE: "Réunion",
		RO: "Romania",
		RS: "Serbia",
		RU: "Russia",
		RW: "Ruanda",
		SA: "Arabia Saudita",
		SB: "Isole Salomone",
		SC: "Seychelles",
		SD: "Sudan",
		SE: "Svezia",
		SG: "Singapore",
		SH: "Sant'Elena, Isola di Ascensione e Tristan da Cunha",
		SI: "Slovenia",
		SJ: "Svalbard e Jan Mayen",
		SK: "Slovacchia",
		SL: "Sierra Leone",
		SM: "San Marino",
		SN: "Senegal",
		SO: "Somalia",
		SR: "Suriname",
		SS: "Sudan del Sud",
		ST: "São Tomé e Príncipe",
		SV: "El Salvador",
		SX: "Sint Maarten",
		SY: "Siria",
		SZ: "Swaziland",
		TC: "Isole Turks e Caicos",
		TD: "Ciad",
		TF: "Territori Francesi del Sud",
		TG: "Togo",
		TH: "Thailandia",
		TJ: "Tagikistan",
		TK: "Tokelau",
		TL: "Timor Est",
		TM: "Turkmenistan",
		TN: "Tunisia",
		TO: "Tonga",
		TR: "Turchia",
		TT: "Trinidad e Tobago",
		TV: "Tuvalu",
		TW: "Repubblica di Cina",
		TZ: "Tanzania",
		UA: "Ucraina",
		UG: "Uganda",
		UM: "Isole minori esterne degli Stati Uniti",
		US: "Stati Uniti d'America",
		UY: "Uruguay",
		UZ: "Uzbekistan",
		VA: "Città del Vaticano",
		VC: "Saint Vincent e Grenadine",
		VE: "Venezuela",
		VG: "Isole Vergini Britanniche",
		VI: "Isole Vergini Americane",
		VN: "Vietnam",
		VU: "Vanuatu",
		WF: "Wallis e Futuna",
		WS: "Samoa",
		YE: "Yemen",
		YT: "Mayotte",
		ZA: "Sudafrica",
		ZM: "Zambia",
		ZW: "Zimbabwe",
		XK: "Kosov",
}
