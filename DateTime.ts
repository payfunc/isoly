export type DateTime = string

export namespace DateTime {
	export function is(value: any | DateTime): value is DateTime {
		return (
			typeof value == "string" &&
			/^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d)$/.test(
				value
			)
		)
	}
	export function parse(value: DateTime): Date {
		return new Date(value)
	}
	export function create(value: Date): DateTime {
		return value.toISOString()
	}
	export function now(): DateTime {
		return create(new Date())
	}
	export function localize(value: DateTime | Date, locale?: string): DateTime {
		const localeString = locale ? locale : Intl.DateTimeFormat().resolvedOptions().locale
		const localeOptions = {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		}
		return (is(value) ? parse(value) : value).toLocaleString(localeString, localeOptions)
	}
}
