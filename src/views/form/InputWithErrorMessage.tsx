interface InputWithErrorMessageProps {
	className?: string;
	type: string;
	name: string;
	value: string;
	placeholder: string;
	error: boolean;
	errorMessage?: string;
	handleChange: (input: string) => void;
}

// Displays an input that can display an error message
function InputWithErrorMessage({
	className, type, name, value, placeholder, error, errorMessage, handleChange
}: InputWithErrorMessageProps) {

	return (
		<div className={(className ? className + " " : "") + 
			"group flex flex-col gap-2"}>
			
			<input type={type} name={name} id={name} value={value} placeholder={placeholder} 
				onChange={e => handleChange(e.target.value)} size={1}
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

export default InputWithErrorMessage
