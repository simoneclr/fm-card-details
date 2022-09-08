import ValidationResult from "./validationResultType";

const validateNumber: (input: string) => ValidationResult = (input: string) => {
	
	if (input.length === 0) {
		return {
			error: true,
			message: "Can't be blank"
		}
	}

	if (input.length !== 16) {
		return {
			error: true,
			message: "Card Number must be exactly 16 digits long"
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

export default validateNumber
