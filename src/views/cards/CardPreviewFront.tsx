import { ReactComponent as CardLogo } from "../../assets/images/card-logo.svg"

interface CardPreviewFrontProps {
	number: string;
	name: string;
	expireDate: string;
	className?: string;
}

// Displays a preview of the front of the credit card with the data inserted by the user
function CardPreviewFront({number, name, expireDate, className}: CardPreviewFrontProps) {

	return (
		<div className={(className ? className + " " : "") + 
					"CardPreviewFront text-white w-[275px] xl:w-[400px] p-4 xl:p-6 flex flex-col justify-between"}>

			<div className="grow w-full">
				<CardLogo className="h-8 xl:h-12"/>
			</div>

			<div className="w-full flex flex-wrap gap-4 justify-between items-end">
				<div className="uppercase w-full xl:text-2xl">
					{number}
				</div>

				<div className="uppercase text-lightGrayishViolet text-xs xl:text-base">
					{name}
				</div>

				<div className="text-lightGrayishViolet text-xs xl:text-base">
					{expireDate}
				</div>
			</div>
		</div>
	)
}

export default CardPreviewFront
