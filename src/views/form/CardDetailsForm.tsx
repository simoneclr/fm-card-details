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
	const [nameErrorMessage, setNameErrorMessage] = useState<string | undefined>()

	const [number, setNumber] = useState<string>("")
	const [numberError, setNumberError] = useState<boolean>(false)
	const [numberErrorMessage, setNumberErrorMessage] = useState<string | undefined>()

	const [expireMonth, setExpireMonth] = useState<string>("")
	const [expireMonthError, setExpireMonthError] = useState<boolean>(false)
	const [expireMonthErrorMessage, setExpireMonthErrorMessage] = useState<string | undefined>()

	const [expireYear, setExpireYear] = useState<string>("")
	const [expireYearError, setExpireYearError] = useState<boolean>(false)
	const [expireYearErrorMessage, setExpireYearErrorMessage] = useState<string | undefined>()

	const [cvc, setCvc] = useState<string>("")
	const [cvcError, setCvcError] = useState<boolean>(false)
	const [cvcErrorMessage, setCvcErrorMessage] = useState<string | undefined>()

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()

		let reject = false

		let nameValidation = validateName(name)
		
		if (nameValidation.error) {
			reject = true
			setNameError(nameValidation.error)
			setNameErrorMessage(nameValidation.message)
			// console.log("Name: " + validateName(number).message)
		} else {
			setNameError(false)
			setNameErrorMessage(undefined)
		}

		let numberValidation = validateNumber(number)

		if (numberValidation.error) {
			reject = true
			setNumberError(numberValidation.error)
			setNumberErrorMessage(numberValidation.message)
			// console.log("Number: " + validateNumber(number).message)
		} else {
			setNumberError(false)
			setNumberErrorMessage(undefined)
		}

		let monthValidation = validateMonth(expireMonth)

		if (monthValidation.error) {
			reject = true
			setExpireMonthError(monthValidation.error)
			setExpireMonthErrorMessage(monthValidation.message)
			// console.log("Month: " + validateMonth(expireMonth).message)
		} else {
			setExpireMonthError(false)
			setExpireMonthErrorMessage(undefined)
		}

		let yearValidation = validateYear(expireYear)

		if (yearValidation.error) {
			reject = true
			setExpireYearError(yearValidation.error)
			setExpireYearErrorMessage(yearValidation.message)
			// console.log("Year: " + validateYear(expireYear).message)
		} else {
			setExpireYearError(false)
			setExpireYearErrorMessage(undefined)
		}

		let cvcValidation = validateCvc(cvc)

		if (cvcValidation.error) {
			reject = true
			setCvcError(cvcValidation.error)
			setCvcErrorMessage(cvcValidation.message)
			// console.log("Cvc: " + validateCvc(cvc).message)
		} else {
			setCvcError(false)
			setCvcErrorMessage(undefined)
		}

		if (!reject) {
			updateValues(name, number, expireMonth, expireYear, cvc)

			// Clear form
			setName("")
			setNumber("")
			setExpireMonth("")
			setExpireYear("")
			setCvc("")

			// Reset errors
			setNameError(false)
			setNameErrorMessage(undefined)
			
			setNumberError(false)
			setNumberErrorMessage(undefined)
			
			setExpireMonthError(false)
			setExpireMonthErrorMessage(undefined)
			
			setExpireYearError(false)
			setExpireYearErrorMessage(undefined)
			
			setCvcError(false)
			setCvcErrorMessage(undefined)
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
					errorMessage={nameErrorMessage}
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
					errorMessage={numberErrorMessage}
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
					errorMessage={expireMonthErrorMessage}
				/>

				<InputWithErrorMessage
					className="grow"
					name="expireYear"
					type="text"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExpireYear(e.target.value)}
					placeholder="YY"
					value={expireYear}
					error={expireYearError}
					errorMessage={expireYearErrorMessage}
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
					errorMessage={cvcErrorMessage}
				/>
			</label>
			
			<CtaButton className="w-full mt-4" onClick={() => {}}>
				Confirm
			</CtaButton>
		</form>
	)
}

export default CardDetailsForm