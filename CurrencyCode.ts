import { Currency } from "./Currency"

export type CurrencyCode =
	| "008"
	| "012"
	| "032"
	| "036"
	| "044"
	| "048"
	| "050"
	| "051"
	| "052"
	| "060"
	| "064"
	| "068"
	| "072"
	| "084"
	| "090"
	| "096"
	| "104"
	| "108"
	| "116"
	| "124"
	| "132"
	| "136"
	| "144"
	| "152"
	| "156"
	| "170"
	| "174"
	| "188"
	| "191"
	| "192"
	| "203"
	| "208"
	| "214"
	| "222"
	| "230"
	| "232"
	| "238"
	| "242"
	| "262"
	| "270"
	| "292"
	| "320"
	| "324"
	| "328"
	| "332"
	| "340"
	| "344"
	| "348"
	| "352"
	| "356"
	| "360"
	| "364"
	| "368"
	| "376"
	| "388"
	| "392"
	| "398"
	| "400"
	| "404"
	| "408"
	| "410"
	| "414"
	| "417"
	| "418"
	| "422"
	| "426"
	| "430"
	| "434"
	| "446"
	| "454"
	| "458"
	| "462"
	| "480"
	| "484"
	| "496"
	| "498"
	| "504"
	| "512"
	| "516"
	| "524"
	| "532"
	| "533"
	| "548"
	| "554"
	| "558"
	| "566"
	| "578"
	| "586"
	| "590"
	| "598"
	| "600"
	| "604"
	| "608"
	| "634"
	| "643"
	| "646"
	| "654"
	| "682"
	| "690"
	| "694"
	| "702"
	| "704"
	| "706"
	| "710"
	| "728"
	| "748"
	| "752"
	| "756"
	| "760"
	| "764"
	| "776"
	| "780"
	| "784"
	| "788"
	| "800"
	| "807"
	| "818"
	| "826"
	| "834"
	| "840"
	| "858"
	| "860"
	| "882"
	| "886"
	| "901"
	| "927"
	| "928"
	| "929"
	| "930"
	| "931"
	| "932"
	| "933"
	| "934"
	| "936"
	| "938"
	| "940"
	| "941"
	| "943"
	| "944"
	| "946"
	| "947"
	| "948"
	| "949"
	| "950"
	| "951"
	| "952"
	| "953"
	| "955"
	| "956"
	| "957"
	| "958"
	| "959"
	| "960"
	| "961"
	| "962"
	| "963"
	| "964"
	| "965"
	| "967"
	| "968"
	| "969"
	| "970"
	| "971"
	| "972"
	| "973"
	| "975"
	| "976"
	| "977"
	| "978"
	| "979"
	| "980"
	| "981"
	| "984"
	| "985"
	| "986"
	| "990"
	| "994"
	| "997"
	| "999"

export namespace CurrencyCode {
	export const types: CurrencyCode[] = [
		"008",
		"012",
		"032",
		"036",
		"044",
		"048",
		"050",
		"051",
		"052",
		"060",
		"064",
		"068",
		"072",
		"084",
		"090",
		"096",
		"104",
		"108",
		"116",
		"124",
		"132",
		"136",
		"144",
		"152",
		"156",
		"170",
		"174",
		"188",
		"191",
		"192",
		"203",
		"208",
		"214",
		"222",
		"230",
		"232",
		"238",
		"242",
		"262",
		"270",
		"292",
		"320",
		"324",
		"328",
		"332",
		"340",
		"344",
		"348",
		"352",
		"356",
		"360",
		"364",
		"368",
		"376",
		"388",
		"392",
		"398",
		"400",
		"404",
		"408",
		"410",
		"414",
		"417",
		"418",
		"422",
		"426",
		"430",
		"434",
		"446",
		"454",
		"458",
		"462",
		"480",
		"484",
		"496",
		"498",
		"504",
		"512",
		"516",
		"524",
		"532",
		"533",
		"548",
		"554",
		"558",
		"566",
		"578",
		"586",
		"590",
		"598",
		"600",
		"604",
		"608",
		"634",
		"643",
		"646",
		"654",
		"682",
		"690",
		"694",
		"702",
		"704",
		"706",
		"710",
		"728",
		"748",
		"752",
		"756",
		"760",
		"764",
		"776",
		"780",
		"784",
		"788",
		"800",
		"807",
		"818",
		"826",
		"834",
		"840",
		"858",
		"860",
		"882",
		"886",
		"901",
		"927",
		"928",
		"929",
		"930",
		"931",
		"932",
		"933",
		"934",
		"936",
		"938",
		"940",
		"941",
		"943",
		"944",
		"946",
		"947",
		"948",
		"949",
		"950",
		"951",
		"952",
		"953",
		"955",
		"956",
		"957",
		"958",
		"959",
		"960",
		"961",
		"962",
		"963",
		"964",
		"965",
		"967",
		"968",
		"969",
		"970",
		"971",
		"972",
		"973",
		"975",
		"976",
		"977",
		"978",
		"979",
		"980",
		"981",
		"984",
		"985",
		"986",
		"990",
		"994",
		"997",
		"999",
	]
	export function is(value: CurrencyCode | any): value is CurrencyCode {
		return typeof value == "string" && types.includes(value as any)
	}
	export function from(currency: Currency): CurrencyCode {
		return {
			ALL: "008",
			DZD: "012",
			ARS: "032",
			AUD: "036",
			BSD: "044",
			BHD: "048",
			BDT: "050",
			AMD: "051",
			BBD: "052",
			BMD: "060",
			BTN: "064",
			BOB: "068",
			BWP: "072",
			BZD: "084",
			SBD: "090",
			BND: "096",
			MMK: "104",
			BIF: "108",
			KHR: "116",
			CAD: "124",
			CVE: "132",
			KYD: "136",
			LKR: "144",
			CLP: "152",
			CNY: "156",
			COP: "170",
			KMF: "174",
			CRC: "188",
			HRK: "191",
			CUP: "192",
			CZK: "203",
			DKK: "208",
			DOP: "214",
			SVC: "222",
			ETB: "230",
			ERN: "232",
			FKP: "238",
			FJD: "242",
			DJF: "262",
			GMD: "270",
			GIP: "292",
			GTQ: "320",
			GNF: "324",
			GYD: "328",
			HTG: "332",
			HNL: "340",
			HKD: "344",
			HUF: "348",
			ISK: "352",
			INR: "356",
			IDR: "360",
			IRR: "364",
			IQD: "368",
			ILS: "376",
			JMD: "388",
			JPY: "392",
			KZT: "398",
			JOD: "400",
			KES: "404",
			KPW: "408",
			KRW: "410",
			KWD: "414",
			KGS: "417",
			LAK: "418",
			LBP: "422",
			LSL: "426",
			LRD: "430",
			LYD: "434",
			MOP: "446",
			MWK: "454",
			MYR: "458",
			MVR: "462",
			MUR: "480",
			MXN: "484",
			MNT: "496",
			MDL: "498",
			MAD: "504",
			OMR: "512",
			NAD: "516",
			NPR: "524",
			ANG: "532",
			AWG: "533",
			VUV: "548",
			NZD: "554",
			NIO: "558",
			NGN: "566",
			NOK: "578",
			PKR: "586",
			PAB: "590",
			PGK: "598",
			PYG: "600",
			PEN: "604",
			PHP: "608",
			QAR: "634",
			RUB: "643",
			RWF: "646",
			SHP: "654",
			SAR: "682",
			SCR: "690",
			SLL: "694",
			SGD: "702",
			VND: "704",
			SOS: "706",
			ZAR: "710",
			SSP: "728",
			SZL: "748",
			SEK: "752",
			CHF: "756",
			SYP: "760",
			THB: "764",
			TOP: "776",
			TTD: "780",
			AED: "784",
			TND: "788",
			UGX: "800",
			MKD: "807",
			EGP: "818",
			GBP: "826",
			TZS: "834",
			USD: "840",
			UYU: "858",
			UZS: "860",
			WST: "882",
			YER: "886",
			TWD: "901",
			UYW: "927",
			VES: "928",
			MRU: "929",
			STN: "930",
			CUC: "931",
			ZWL: "932",
			BYN: "933",
			TMT: "934",
			GHS: "936",
			SDG: "938",
			UYI: "940",
			RSD: "941",
			MZN: "943",
			AZN: "944",
			RON: "946",
			CHE: "947",
			CHW: "948",
			TRY: "949",
			XAF: "950",
			XCD: "951",
			XOF: "952",
			XPF: "953",
			XBA: "955",
			XBB: "956",
			XBC: "957",
			XBD: "958",
			XAU: "959",
			XDR: "960",
			XAG: "961",
			XPT: "962",
			XTS: "963",
			XPD: "964",
			XUA: "965",
			ZMW: "967",
			SRD: "968",
			MGA: "969",
			COU: "970",
			AFN: "971",
			TJS: "972",
			AOA: "973",
			BGN: "975",
			CDF: "976",
			BAM: "977",
			EUR: "978",
			MXV: "979",
			UAH: "980",
			GEL: "981",
			BOV: "984",
			PLN: "985",
			BRL: "986",
			CLF: "990",
			XSU: "994",
			USN: "997",
			XXX: "999",
		}[currency] as CurrencyCode
	}
	export function decimalDigits(currencyCode: CurrencyCode): number | undefined {
		return {
			"008": 2,
			"012": 2,
			"032": 2,
			"036": 2,
			"044": 2,
			"048": 3,
			"050": 2,
			"051": 2,
			"052": 2,
			"060": 2,
			"064": 2,
			"068": 2,
			"072": 2,
			"084": 2,
			"090": 2,
			"096": 2,
			"104": 2,
			"108": 0,
			"116": 2,
			"124": 2,
			"132": 2,
			"136": 2,
			"144": 2,
			"152": 0,
			"156": 2,
			"170": 2,
			"174": 0,
			"188": 2,
			"191": 2,
			"192": 2,
			"203": 2,
			"208": 2,
			"214": 2,
			"222": 2,
			"230": 2,
			"232": 2,
			"238": 2,
			"242": 2,
			"262": 0,
			"270": 2,
			"292": 2,
			"320": 2,
			"324": 0,
			"328": 2,
			"332": 2,
			"340": 2,
			"344": 2,
			"348": 2,
			"352": 0,
			"356": 2,
			"360": 2,
			"364": 2,
			"368": 3,
			"376": 2,
			"388": 2,
			"392": 0,
			"398": 2,
			"400": 3,
			"404": 2,
			"408": 2,
			"410": 0,
			"414": 3,
			"417": 2,
			"418": 2,
			"422": 2,
			"426": 2,
			"430": 2,
			"434": 3,
			"446": 2,
			"454": 2,
			"458": 2,
			"462": 2,
			"480": 2,
			"484": 2,
			"496": 2,
			"498": 2,
			"504": 2,
			"512": 3,
			"516": 2,
			"524": 2,
			"532": 2,
			"533": 2,
			"548": 0,
			"554": 2,
			"558": 2,
			"566": 2,
			"578": 2,
			"586": 2,
			"590": 2,
			"598": 2,
			"600": 0,
			"604": 2,
			"608": 2,
			"634": 2,
			"643": 2,
			"646": 0,
			"654": 2,
			"682": 2,
			"690": 2,
			"694": 2,
			"702": 2,
			"704": 0,
			"706": 2,
			"710": 2,
			"728": 2,
			"748": 2,
			"752": 2,
			"756": 2,
			"760": 2,
			"764": 2,
			"776": 2,
			"780": 2,
			"784": 2,
			"788": 3,
			"800": 0,
			"807": 2,
			"818": 2,
			"826": 2,
			"834": 2,
			"840": 2,
			"858": 2,
			"860": 2,
			"882": 2,
			"886": 2,
			"901": 2,
			"927": 4,
			"928": 2,
			"929": 2,
			"930": 2,
			"931": 2,
			"932": 2,
			"933": 2,
			"934": 2,
			"936": 2,
			"938": 2,
			"940": 0,
			"941": 2,
			"943": 2,
			"944": 2,
			"946": 2,
			"947": 2,
			"948": 2,
			"949": 2,
			"950": 0,
			"951": 2,
			"952": 0,
			"953": 0,
			"955": undefined,
			"956": undefined,
			"957": undefined,
			"958": undefined,
			"959": undefined,
			"960": undefined,
			"961": undefined,
			"962": undefined,
			"963": undefined,
			"964": undefined,
			"965": undefined,
			"967": 2,
			"968": 2,
			"969": 2,
			"970": 2,
			"971": 2,
			"972": 2,
			"973": 2,
			"975": 2,
			"976": 2,
			"977": 2,
			"978": 2,
			"979": 2,
			"980": 2,
			"981": 2,
			"984": 2,
			"985": 2,
			"986": 2,
			"990": 4,
			"994": undefined,
			"997": 2,
			"999": undefined,
		}[currencyCode]
	}
}
