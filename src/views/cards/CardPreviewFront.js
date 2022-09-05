import {ReactComponent as CardLogo} from "../../assets/images/card-logo.svg"

// Displays a preview of the front of the credit card with the data inserted by the user
function CardPreviewFront({number, name, expireDate}) {

	const DEFAULT_NUMBER = "0000 0000 0000 0000"
	const DEFAULT_NAME = "Felicia Leire"
	const DEFAULT_DATE = "00/00"

	return (
		<div className="CardPreviewFront text-white w-[275px] p-4 flex flex-col justify-between">

			<div className="grow w-full">
				<CardLogo className="h-8"/>
			</div>

			<div className="w-full flex flex-wrap gap-4 justify-between items-end">
				<div className="uppercase w-full">
					{number || DEFAULT_NUMBER}
				</div>

				<div className="uppercase text-lightGrayishViolet text-xs">
					{name || DEFAULT_NAME}
				</div>

				<div className="text-lightGrayishViolet text-xs">
					{expireDate || DEFAULT_DATE}
				</div>
			</div>
		</div>
	)
}

export default CardPreviewFront
