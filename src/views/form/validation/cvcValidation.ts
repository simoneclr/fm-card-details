import ValidationResult from "./validationResultType"

const validateCvc: (input: string) => ValidationResult = (input: string) => {

	if (input.length === 0) {
		return {
			error: true,
			message: "Can't be blank"
		}
	}

	if (input.length !== 3) {
		return {
			error: true,
			message: "Must be 3 digit"
		}
	}

	let pattern = /^[0-9]+$/

	if (!pattern.test(input)) {
		return {
			error: true,
			message: "Wrong format, numbers only"
		}
	}

	return {
		error: false,
		message: "OK"
	}
}

export default validateCvc
