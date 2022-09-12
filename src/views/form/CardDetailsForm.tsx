import { useState, SyntheticEvent } from "react"

import { validateCvc, validateMonth, validateName, validateNumber, validateYear } from "./validation"

import CtaButton from "../../components/CtaButton"
import ValidatedTextInput from "./ValidatedTextInput"

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

		if (!(nameError || numberError || expireMonthError || expireYearError || cvcError)) {
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

				<ValidatedTextInput
					className="grow"
					name="name"
					placeholder="e.g. Jane Appleseed"
					value={name}
					setValue={setName}
					error={nameError}
					setError={setNameError}
					validateInput={validateName}
				/>
			</label>

			<label className="w-full">
				<div className="uppercase text-sm mb-2">
					Card Number
				</div>

				<ValidatedTextInput
					className="grow"
					name="number"
					placeholder="e.g. 1234 4567 9123 0000"
					value={number}
					setValue={setNumber}
					error={numberError}
					setError={setNumberError}
					validateInput={validateNumber}
				/>
			</label>

			<label className="flex flex-wrap gap-x-4 gap-y-2 items-center w-1/2">
				<div className="uppercase text-sm w-full">
					Exp. Date (MM/YY)
				</div>

				<ValidatedTextInput
					className="grow"
					name="expireMonth"
					placeholder="MM"
					value={expireMonth}
					setValue={setExpireMonth}
					error={expireMonthError}
					setError={setExpireMonthError}
					validateInput={validateMonth}
				/>

				<ValidatedTextInput
					className="grow"
					name="expireYear"
					placeholder="YY"
					value={expireYear}
					setValue={setExpireYear}
					error={expireYearError}
					setError={setExpireYearError}
					validateInput={validateYear}
				/>
			</label>

			<label className="grow">
				<div className="uppercase text-sm mb-2 w-full">
					Cvc
				</div>

				<ValidatedTextInput
					className="w-full"
					name="name"
					placeholder="e.g. 123"
					value={cvc}
					setValue={setCvc}
					error={cvcError}
					setError={setCvcError}
					validateInput={validateCvc}
				/>
			</label>
			
			<CtaButton className="w-full mt-4" onClick={() => {}}>
				Confirm
			</CtaButton>
		</form>
	)
}

export default CardDetailsForm