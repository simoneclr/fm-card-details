import ValidationResult from "./validationResultType";

export const validateMonth: (input: string) => ValidationResult = (input: string) => {

	if (input.length === 0) {
		return {
			error: true,
			message: "Can't be blank"
		}
	}

	let pattern = /^[0-9]+$/

	if (!pattern.test(input)) {
		return {
			error: true,
			message: "Wrong format, numbers only"
		}
	}

	if (parseInt(input) < 1 || parseInt(input) > 12) {
		return {
			error: true,
			message: "That month does not exist"
		}
	}

	return {
		error: false,
		message: "OK"
	}
}

export const validateYear: (input: string) => ValidationResult = (input: string) => {

	if (input.length === 0) {
		return {
			error: true,
			message: "Can't be blank"
		}
	}

	let pattern = /^[0-9]+$/

	if (!pattern.test(input)) {
		return {
			error: true,
			message: "Wrong format, numbers only"
		}
	}

	if (parseInt(input) < 2022) {
		return {
			error: true,
			message: "That year has already passed"
		}
	}

	return {
		error: false,
		message: "OK"
	}
}
