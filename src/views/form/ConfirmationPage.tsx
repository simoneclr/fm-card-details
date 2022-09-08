import { SyntheticEvent } from "react"

import { ReactComponent as IconComplete } from "../../assets/images/icon-complete.svg"
import CtaButton from "../../components/CtaButton"

interface ConfirmationPageProps {
	handleContinue: (e?: SyntheticEvent) => void
}

// Displays a confirmation page when the form is succesfully submitted
function ConfirmationPage({handleContinue}: ConfirmationPageProps) {
	return (
		<div className="flex flex-col items-center">

			<IconComplete className="w-20 h-20 mb-8"/>

			<h1 className="uppercase text-2xl tracking-widest">
				Thank You!
			</h1>

			<h2 className="text-base text-darkGrayishViolet mx-4 mt-2 mb-8">
				We've added your cards details
			</h2>

			<CtaButton className="w-full" onClick={handleContinue}>
				Continue
			</CtaButton>
		</div>
	)
}

export default ConfirmationPage
