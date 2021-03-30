import { CurrencyCode } from "./CurrencyCode"

export type Currency =
	| "AED"
	| "AFN"
	| "ALL"
	| "AMD"
	| "ANG"
	| "AOA"
	| "ARS"
	| "AUD"
	| "AWG"
	| "AZN"
	| "BAM"
	| "BBD"
	| "BDT"
	| "BGN"
	| "BHD"
	| "BIF"
	| "BMD"
	| "BND"
	| "BOB"
	| "BOV"
	| "BRL"
	| "BSD"
	| "BTN"
	| "BWP"
	| "BYN"
	| "BZD"
	| "CAD"
	| "CDF"
	| "CHE"
	| "CHF"
	| "CHW"
	| "CLF"
	| "CLP"
	| "CNY"
	| "COP"
	| "COU"
	| "CRC"
	| "CUC"
	| "CUP"
	| "CVE"
	| "CZK"
	| "DJF"
	| "DKK"
	| "DOP"
	| "DZD"
	| "EGP"
	| "ERN"
	| "ETB"
	| "EUR"
	| "FJD"
	| "FKP"
	| "GBP"
	| "GEL"
	| "GHS"
	| "GIP"
	| "GMD"
	| "GNF"
	| "GTQ"
	| "GYD"
	| "HKD"
	| "HNL"
	| "HRK"
	| "HTG"
	| "HUF"
	| "IDR"
	| "ILS"
	| "INR"
	| "IQD"
	| "IRR"
	| "ISK"
	| "JMD"
	| "JOD"
	| "JPY"
	| "KES"
	| "KGS"
	| "KHR"
	| "KMF"
	| "KPW"
	| "KRW"
	| "KWD"
	| "KYD"
	| "KZT"
	| "LAK"
	| "LBP"
	| "LKR"
	| "LRD"
	| "LSL"
	| "LYD"
	| "MAD"
	| "MDL"
	| "MGA"
	| "MKD"
	| "MMK"
	| "MNT"
	| "MOP"
	| "MRU"
	| "MUR"
	| "MVR"
	| "MWK"
	| "MXN"
	| "MXV"
	| "MYR"
	| "MZN"
	| "NAD"
	| "NGN"
	| "NIO"
	| "NOK"
	| "NPR"
	| "NZD"
	| "OMR"
	| "PAB"
	| "PEN"
	| "PGK"
	| "PHP"
	| "PKR"
	| "PLN"
	| "PYG"
	| "QAR"
	| "RON"
	| "RSD"
	| "RUB"
	| "RWF"
	| "SAR"
	| "SBD"
	| "SCR"
	| "SDG"
	| "SEK"
	| "SGD"
	| "SHP"
	| "SLL"
	| "SOS"
	| "SRD"
	| "SSP"
	| "STN"
	| "SVC"
	| "SYP"
	| "SZL"
	| "THB"
	| "TJS"
	| "TMT"
	| "TND"
	| "TOP"
	| "TRY"
	| "TTD"
	| "TWD"
	| "TZS"
	| "UAH"
	| "UGX"
	| "USD"
	| "USN"
	| "UYI"
	| "UYU"
	| "UYW"
	| "UZS"
	| "VES"
	| "VND"
	| "VUV"
	| "WST"
	| "XAF"
	| "XAG"
	| "XAU"
	| "XBA"
	| "XBB"
	| "XBC"
	| "XBD"
	| "XCD"
	| "XDR"
	| "XOF"
	| "XPD"
	| "XPF"
	| "XPT"
	| "XSU"
	| "XTS"
	| "XUA"
	| "XXX"
	| "YER"
	| "ZAR"
	| "ZMW"
	| "ZWL"

export namespace Currency {
	export const types: Currency[] = [
		"AED",
		"AFN",
		"ALL",
		"AMD",
		"ANG",
		"AOA",
		"ARS",
		"AUD",
		"AWG",
		"AZN",
		"BAM",
		"BBD",
		"BDT",
		"BGN",
		"BHD",
		"BIF",
		"BMD",
		"BND",
		"BOB",
		"BOV",
		"BRL",
		"BSD",
		"BTN",
		"BWP",
		"BYN",
		"BZD",
		"CAD",
		"CDF",
		"CHE",
		"CHF",
		"CHW",
		"CLF",
		"CLP",
		"CNY",
		"COP",
		"COU",
		"CRC",
		"CUC",
		"CUP",
		"CVE",
		"CZK",
		"DJF",
		"DKK",
		"DOP",
		"DZD",
		"EGP",
		"ERN",
		"ETB",
		"EUR",
		"FJD",
		"FKP",
		"GBP",
		"GEL",
		"GHS",
		"GIP",
		"GMD",
		"GNF",
		"GTQ",
		"GYD",
		"HKD",
		"HNL",
		"HRK",
		"HTG",
		"HUF",
		"IDR",
		"ILS",
		"INR",
		"IQD",
		"IRR",
		"ISK",
		"JMD",
		"JOD",
		"JPY",
		"KES",
		"KGS",
		"KHR",
		"KMF",
		"KPW",
		"KRW",
		"KWD",
		"KYD",
		"KZT",
		"LAK",
		"LBP",
		"LKR",
		"LRD",
		"LSL",
		"LYD",
		"MAD",
		"MDL",
		"MGA",
		"MKD",
		"MMK",
		"MNT",
		"MOP",
		"MRU",
		"MUR",
		"MVR",
		"MWK",
		"MXN",
		"MXV",
		"MYR",
		"MZN",
		"NAD",
		"NGN",
		"NIO",
		"NOK",
		"NPR",
		"NZD",
		"OMR",
		"PAB",
		"PEN",
		"PGK",
		"PHP",
		"PKR",
		"PLN",
		"PYG",
		"QAR",
		"RON",
		"RSD",
		"RUB",
		"RWF",
		"SAR",
		"SBD",
		"SCR",
		"SDG",
		"SEK",
		"SGD",
		"SHP",
		"SLL",
		"SOS",
		"SRD",
		"SSP",
		"STN",
		"SVC",
		"SYP",
		"SZL",
		"THB",
		"TJS",
		"TMT",
		"TND",
		"TOP",
		"TRY",
		"TTD",
		"TWD",
		"TZS",
		"UAH",
		"UGX",
		"USD",
		"USN",
		"UYI",
		"UYU",
		"UYW",
		"UZS",
		"VES",
		"VND",
		"VUV",
		"WST",
		"XAF",
		"XAG",
		"XAU",
		"XBA",
		"XBB",
		"XBC",
		"XBD",
		"XCD",
		"XDR",
		"XOF",
		"XPD",
		"XPF",
		"XPT",
		"XSU",
		"XTS",
		"XUA",
		"XXX",
		"YER",
		"ZAR",
		"ZMW",
		"ZWL",
	]
	export function is(currency: Currency | any): currency is Currency {
		return typeof currency == "string" && types.includes(currency as any)
	}
	export function from(currencyCode: CurrencyCode): Currency {
		return {
			"784": "AED",
			"971": "AFN",
			"008": "ALL",
			"051": "AMD",
			"532": "ANG",
			"973": "AOA",
			"032": "ARS",
			"036": "AUD",
			"533": "AWG",
			"944": "AZN",
			"977": "BAM",
			"052": "BBD",
			"050": "BDT",
			"975": "BGN",
			"048": "BHD",
			"108": "BIF",
			"060": "BMD",
			"096": "BND",
			"068": "BOB",
			"984": "BOV",
			"986": "BRL",
			"044": "BSD",
			"064": "BTN",
			"072": "BWP",
			"933": "BYN",
			"084": "BZD",
			"124": "CAD",
			"976": "CDF",
			"947": "CHE",
			"756": "CHF",
			"948": "CHW",
			"990": "CLF",
			"152": "CLP",
			"156": "CNY",
			"170": "COP",
			"970": "COU",
			"188": "CRC",
			"931": "CUC",
			"192": "CUP",
			"132": "CVE",
			"203": "CZK",
			"262": "DJF",
			"208": "DKK",
			"214": "DOP",
			"012": "DZD",
			"818": "EGP",
			"232": "ERN",
			"230": "ETB",
			"978": "EUR",
			"242": "FJD",
			"238": "FKP",
			"826": "GBP",
			"981": "GEL",
			"936": "GHS",
			"292": "GIP",
			"270": "GMD",
			"324": "GNF",
			"320": "GTQ",
			"328": "GYD",
			"344": "HKD",
			"340": "HNL",
			"191": "HRK",
			"332": "HTG",
			"348": "HUF",
			"360": "IDR",
			"376": "ILS",
			"356": "INR",
			"368": "IQD",
			"364": "IRR",
			"352": "ISK",
			"388": "JMD",
			"400": "JOD",
			"392": "JPY",
			"404": "KES",
			"417": "KGS",
			"116": "KHR",
			"174": "KMF",
			"408": "KPW",
			"410": "KRW",
			"414": "KWD",
			"136": "KYD",
			"398": "KZT",
			"418": "LAK",
			"422": "LBP",
			"144": "LKR",
			"430": "LRD",
			"426": "LSL",
			"434": "LYD",
			"504": "MAD",
			"498": "MDL",
			"969": "MGA",
			"807": "MKD",
			"104": "MMK",
			"496": "MNT",
			"446": "MOP",
			"929": "MRU",
			"480": "MUR",
			"462": "MVR",
			"454": "MWK",
			"484": "MXN",
			"979": "MXV",
			"458": "MYR",
			"943": "MZN",
			"516": "NAD",
			"566": "NGN",
			"558": "NIO",
			"578": "NOK",
			"524": "NPR",
			"554": "NZD",
			"512": "OMR",
			"590": "PAB",
			"604": "PEN",
			"598": "PGK",
			"608": "PHP",
			"586": "PKR",
			"985": "PLN",
			"600": "PYG",
			"634": "QAR",
			"946": "RON",
			"941": "RSD",
			"643": "RUB",
			"646": "RWF",
			"682": "SAR",
			"090": "SBD",
			"690": "SCR",
			"938": "SDG",
			"752": "SEK",
			"702": "SGD",
			"654": "SHP",
			"694": "SLL",
			"706": "SOS",
			"968": "SRD",
			"728": "SSP",
			"930": "STN",
			"222": "SVC",
			"760": "SYP",
			"748": "SZL",
			"764": "THB",
			"972": "TJS",
			"934": "TMT",
			"788": "TND",
			"776": "TOP",
			"949": "TRY",
			"780": "TTD",
			"901": "TWD",
			"834": "TZS",
			"980": "UAH",
			"800": "UGX",
			"840": "USD",
			"997": "USN",
			"940": "UYI",
			"858": "UYU",
			"927": "UYW",
			"860": "UZS",
			"928": "VES",
			"704": "VND",
			"548": "VUV",
			"882": "WST",
			"950": "XAF",
			"961": "XAG",
			"959": "XAU",
			"955": "XBA",
			"956": "XBB",
			"957": "XBC",
			"958": "XBD",
			"951": "XCD",
			"960": "XDR",
			"952": "XOF",
			"964": "XPD",
			"953": "XPF",
			"962": "XPT",
			"994": "XSU",
			"963": "XTS",
			"965": "XUA",
			"999": "XXX",
			"886": "YER",
			"710": "ZAR",
			"967": "ZMW",
			"932": "ZWL",
		}[currencyCode] as Currency
	}
	export function round(value: number, currency: Currency): number {
		const factor = Math.pow(10, decimalDigits(currency) ?? 2)
		return Math.round((value + Number.EPSILON) * factor) / factor
	}
	export function decimalDigits(currency: Currency): number | undefined {
		return {
			AED: 2,
			AFN: 2,
			ALL: 2,
			AMD: 2,
			ANG: 2,
			AOA: 2,
			ARS: 2,
			AUD: 2,
			AWG: 2,
			AZN: 2,
			BAM: 2,
			BBD: 2,
			BDT: 2,
			BGN: 2,
			BHD: 3,
			BIF: 0,
			BMD: 2,
			BND: 2,
			BOB: 2,
			BOV: 2,
			BRL: 2,
			BSD: 2,
			BTN: 2,
			BWP: 2,
			BYN: 2,
			BZD: 2,
			CAD: 2,
			CDF: 2,
			CHE: 2,
			CHF: 2,
			CHW: 2,
			CLF: 4,
			CLP: 0,
			CNY: 2,
			COP: 2,
			COU: 2,
			CRC: 2,
			CUC: 2,
			CUP: 2,
			CVE: 2,
			CZK: 2,
			DJF: 0,
			DKK: 2,
			DOP: 2,
			DZD: 2,
			EGP: 2,
			ERN: 2,
			ETB: 2,
			EUR: 2,
			FJD: 2,
			FKP: 2,
			GBP: 2,
			GEL: 2,
			GHS: 2,
			GIP: 2,
			GMD: 2,
			GNF: 0,
			GTQ: 2,
			GYD: 2,
			HKD: 2,
			HNL: 2,
			HRK: 2,
			HTG: 2,
			HUF: 2,
			IDR: 2,
			ILS: 2,
			INR: 2,
			IQD: 3,
			IRR: 2,
			ISK: 0,
			JMD: 2,
			JOD: 3,
			JPY: 0,
			KES: 2,
			KGS: 2,
			KHR: 2,
			KMF: 0,
			KPW: 2,
			KRW: 0,
			KWD: 3,
			KYD: 2,
			KZT: 2,
			LAK: 2,
			LBP: 2,
			LKR: 2,
			LRD: 2,
			LSL: 2,
			LYD: 3,
			MAD: 2,
			MDL: 2,
			MGA: 2,
			MKD: 2,
			MMK: 2,
			MNT: 2,
			MOP: 2,
			MRU: 2,
			MUR: 2,
			MVR: 2,
			MWK: 2,
			MXN: 2,
			MXV: 2,
			MYR: 2,
			MZN: 2,
			NAD: 2,
			NGN: 2,
			NIO: 2,
			NOK: 2,
			NPR: 2,
			NZD: 2,
			OMR: 3,
			PAB: 2,
			PEN: 2,
			PGK: 2,
			PHP: 2,
			PKR: 2,
			PLN: 2,
			PYG: 0,
			QAR: 2,
			RON: 2,
			RSD: 2,
			RUB: 2,
			RWF: 0,
			SAR: 2,
			SBD: 2,
			SCR: 2,
			SDG: 2,
			SEK: 2,
			SGD: 2,
			SHP: 2,
			SLL: 2,
			SOS: 2,
			SRD: 2,
			SSP: 2,
			STN: 2,
			SVC: 2,
			SYP: 2,
			SZL: 2,
			THB: 2,
			TJS: 2,
			TMT: 2,
			TND: 3,
			TOP: 2,
			TRY: 2,
			TTD: 2,
			TWD: 2,
			TZS: 2,
			UAH: 2,
			UGX: 0,
			USD: 2,
			USN: 2,
			UYI: 0,
			UYU: 2,
			UYW: 4,
			UZS: 2,
			VES: 2,
			VND: 0,
			VUV: 0,
			WST: 2,
			XAF: 0,
			XAG: undefined,
			XAU: undefined,
			XBA: undefined,
			XBB: undefined,
			XBC: undefined,
			XBD: undefined,
			XCD: 2,
			XDR: undefined,
			XOF: 0,
			XPD: undefined,
			XPF: 0,
			XPT: undefined,
			XSU: undefined,
			XTS: undefined,
			XUA: undefined,
			XXX: undefined,
			YER: 2,
			ZAR: 2,
			ZMW: 2,
			ZWL: 2,
		}[currency]
	}
}
