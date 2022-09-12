import CardPreviewBack from "./CardPreviewBack";
import CardPreviewFront from "./CardPreviewFront";

interface CardPreviewProps {
	number?: string;
	name?: string;
	expireMonth?: string;
	expireYear?: string;
	cvc?: string;
}

// Given the data inserted from the user, displays a preview of the front and back of the credit card
function CardPreview({number, name, expireMonth, expireYear, cvc}: CardPreviewProps) {

	// Process card number for display
	let renderedNumber = number || ""

	// Add 0s at the start if the code is too short
	if (renderedNumber.length < 16) {
		renderedNumber = "0".repeat(16 - renderedNumber.length).concat(renderedNumber)
	}

	// Add a space every four characters
	renderedNumber = renderedNumber.substring(0, 4) + " " +
		renderedNumber.substring(4, 8) + " " +
		renderedNumber.substring(8, 12) + " " +
		renderedNumber.substring(12, 16)
	
	// Process Card holder's name for display
	let renderedName = name || "Felicia Leire"

	// Process Card expire date for display
	let renderedDate = (expireMonth || "00") + "/" + (expireYear || "00")

	// Process CVC for display
	let renderedCvc = cvc || "0000"

	return (
		<div className="relative h-72">
			<CardPreviewFront 
				number={renderedNumber}
				name={renderedName}
				expireDate={renderedDate}
				className="absolute z-10 top-[90px] left-0"
			/>

			<CardPreviewBack cvc={renderedCvc} 
				className="absolute top-0 right-0"
			/>
		</div>
	)
}

export default CardPreview