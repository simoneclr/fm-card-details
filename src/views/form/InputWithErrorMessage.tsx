interface InputWithErrorMessageProps {
	className?: string;
	label: string;
	type: string;
	name: string;
	value: string;
	placeholder: string;
	error: boolean;
	errorMessage?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Displays an input that can display an error message
function InputWithErrorMessage({
	className, label, type, name, value, placeholder, error, errorMessage, onChange
}: InputWithErrorMessageProps) {

	return (
		<div className={(className ? className + " " : "") + 
			"group flex flex-col gap-2"}>

			<label htmlFor={name} className="uppercase text-xs">
				{label}
			</label>
			
			<input type={type} name={name} id={name} value={value} placeholder={placeholder} onChange={onChange}
				className={(error && "outline-errorRed focus:outline-errorRed ") +
					"text-base placeholder:text-darkGrayishViolet p-2 rounded-lg outline outline-1 " +
					"focus:outline-2 outline-darkGrayishViolet focus:outline-veryDarkViolet"}
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
