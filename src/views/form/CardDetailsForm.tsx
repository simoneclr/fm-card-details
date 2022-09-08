import { useState, SyntheticEvent } from "react"

import { validateCvc, validateMonth, validateName, validateNumber, validateYear } from "./validation"

import CtaButton from "../../components/CtaButton"
import InputWithErrorMessage from "./InputWithErrorMessage"

interface CardDetailsFormProps {
	updateValues: (
		name: string,
    number: string,
    expireMonth: string,
    expireYear: string,
    cvc: string
	) => void
}

// Displays a form the user can use to input their credit card's details
function CardDetailsForm({updateValues}: CardDetailsFormProps) {

	const [name, setName] = useState<string>("")
	const [nameError, setNameError] = useState<boolean>(false)

	const [number, setNumber] = useState<string>("")
	const [numberError, setNumberError] = useState<boolean>(false)

	const [expireMonth, setExpireMonth] = useState<string>("")
	const [expireMonthError, setExpireMonthError] = useState<boolean>(false)

	const [expireYear, setExpireYear] = useState<string>("")
	const [expireYearError, setExpireYearError] = useState<boolean>(false)

	const [cvc, setCvc] = useState<string>("")
	const [cvcError, setCvcError] = useState<boolean>(false)

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()

		let reject = false
		
		if (validateName(name).error) {
			reject = true
			setNameError(true)
			console.log("Name: " + validateName(number).message)
		}

		if (validateNumber(number).error) {
			reject = true
			setNumberError(true)
			console.log("Number: " + validateNumber(number).message)
		}

		if (validateMonth(expireMonth).error) {
			reject = true
			setExpireMonthError(true)
			console.log("Month: " + validateMonth(expireMonth).message)
		}

		if (validateYear(expireYear).error) {
			reject = true
			setExpireYearError(true)
			console.log("Year: " + validateYear(expireYear).message)
		}

		if (validateCvc(cvc).error) {
			reject = true
			setCvcError(true)
			console.log("Cvc: " + validateCvc(cvc).message)
		}

		if (!reject) {
			updateValues(name, number, expireMonth, expireYear, cvc)

			// Clear form
			setName("")
			setNumber("")
			setExpireMonth("")
			setExpireYear("")
			setCvc("")
		}
	} 

	return (
		<form onSubmit={handleSubmit} className="flex flex-wrap justify-between gap-4 w-80">

			<label className="w-full">
				<div className="uppercase text-sm mb-2">
					Cardholder Name
				</div>

				<InputWithErrorMessage
					className="grow"
					name="name"
					type="text"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
					placeholder="e.g. Jane Appleseed"
					value={name}
					error={nameError}
					errorMessage="Invalid value"
				/>
			</label>

			<label className="w-full">
				<div className="uppercase text-sm mb-2">
					Card Number
				</div>

				<InputWithErrorMessage
					className="grow"
					name="number"
					type="text"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)}
					placeholder="e.g. 1234 4567 9123 0000"
					value={number}
					error={numberError}
					errorMessage="Invalid value"
				/>
			</label>

			<label className="flex flex-wrap gap-x-4 gap-y-2 items-center w-1/2">
				<div className="uppercase text-sm w-full">
					Exp. Date (MM/YY)
				</div>

				<InputWithErrorMessage
					className="grow"
					name="expireMonth"
					type="text"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExpireMonth(e.target.value)}
					placeholder="MM"
					value={expireMonth}
					error={expireMonthError}
					errorMessage="Invalid value"
				/>

				<InputWithErrorMessage
					className="grow"
					name="expireYear"
					type="text"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExpireYear(e.target.value)}
					placeholder="YY"
					value={expireYear}
					error={expireYearError}
					errorMessage="Invalid value"
				/>
			</label>

			<label className="grow">
				<div className="uppercase text-sm mb-2 w-full">
					Cvc
				</div>

				<InputWithErrorMessage
					className="w-full"
					name="name"
					type="text"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCvc(e.target.value)}
					placeholder="e.g. 123"
					value={cvc}
					error={cvcError}
					errorMessage="Invalid value"
				/>
			</label>
			
			<CtaButton className="w-full mt-4" onClick={() => {}}>
				Confirm
			</CtaButton>
		</form>
	)
}

export default CardDetailsForm