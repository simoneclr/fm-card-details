import { ReactComponent as CardLogo } from "../../assets/images/card-logo.svg"

interface CardPreviewFrontProps {
	number: string;
	name: string;
	expireDate: string;
}

// Displays a preview of the front of the credit card with the data inserted by the user
function CardPreviewFront({number, name, expireDate}: CardPreviewFrontProps) {

	return (
		<div className="CardPreviewFront text-white w-[275px] p-4 flex flex-col justify-between">

			<div className="grow w-full">
				<CardLogo className="h-8"/>
			</div>

			<div className="w-full flex flex-wrap gap-4 justify-between items-end">
				<div className="uppercase w-full">
					{number}
				</div>

				<div className="uppercase text-lightGrayishViolet text-xs">
					{name}
				</div>

				<div className="text-lightGrayishViolet text-xs">
					{expireDate}
				</div>
			</div>
		</div>
	)
}

export default CardPreviewFront
