import { useState } from "react";

import ValidationResult from "./validation/validationResultType";

interface ValidatedTextInputProps {
	className?: string;
	name: string;
	placeholder: string;
	value: string;
	setValue: (input: string) => void;
	error: boolean;
	setError: (error: boolean) => void;
	validateInput: (input: string) => ValidationResult;
}

// Displays a text input field with validation
function ValidatedTextInput({
	className, name, value, placeholder, error, setValue, setError, validateInput
}: ValidatedTextInputProps) {

	const [errorMessage, setErrorMessage] = useState<string | undefined>()

	const handleChange = (input: string) => {
		setValue(input)
		setError(false)
		setErrorMessage(undefined)
	}

	// When the field looses focus, perform input validation
	const handleBlur = (input: string) => {
		let validation = validateInput(input)

		setError(validation.error)
		setErrorMessage(validation.message)
	}

	return (
		<div className={(className ? className + " " : "") + 
			"group flex flex-col gap-2"}>
			
			<input type="text" name={name} id={name} value={value} placeholder={placeholder} size={1} 
				onChange={e => handleChange(e.target.value)} onBlur={e => handleBlur(e.target.value)} required={true}
				className={"text-base placeholder:text-darkGrayishViolet p-2 rounded-lg outline outline-1 " +
					"focus:outline-2 focus:outline-veryDarkViolet " +	
					(error ? "outline-errorRed" : "outline-darkGrayishViolet")
				}
			/>

			{
				error && 

				<span className="text-errorRed text-xs">
					{errorMessage}
				</span>
			}
		</div>
	)
}

export default ValidatedTextInput
