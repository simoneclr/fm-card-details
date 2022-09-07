import { useState } from "react"

import InputWithErrorMessage from "./InputWithErrorMessage"

// Displays a form the user can use to input their credit card's details
function CardDetailsForm() {

	const [name, setName] = useState<string>("")

	return (
		<form className="flex flex-wrap justify-between gap-4 w-80">

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
					error={false}
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
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
					placeholder="e.g. 1234 4567 9123 0000"
					value={name}
					error={false}
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
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
					placeholder="MM"
					value={name}
					error={false}
					errorMessage="Invalid value"
				/>

				<InputWithErrorMessage
					className="grow"
					name="expireYear"
					type="text"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
					placeholder="YY"
					value={name}
					error={false}
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
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
					placeholder="e.g. 123"
					value={name}
					error={false}
					errorMessage="Invalid value"
				/>
			</label>
		</form>
	)
}

export default CardDetailsForm