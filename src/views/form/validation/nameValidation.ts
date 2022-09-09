import ValidationResult from "./validationResultType";

const validateName: (input: string) => ValidationResult = (input) => {

	if (input.length === 0) {
		return {
			error: true,
			message: "Can't be blank"
		}
	}

	let words = input.split(" ")

	if (words.length === 0) {
		return {
			error: true,
			message: "Can't be blank"
		}
	}

	// Must inclue at least two words (a name and a surname)
	if (words.length < 2) {
		return {
			error: true,
			message: "Must include a name and a surname"
		}
	}

	// TODO: Needs improvement
	// Consider some names include apostrophees
	let pattern = /[A-Za-z]+$/

	if (words.filter(w => !pattern.test(w)).length > 0) {
		return {
			error: true,
			message: "Invalid name format"
		}
	}

	return {
		error: false,
		message: "OK"
	}
}

export default validateName
