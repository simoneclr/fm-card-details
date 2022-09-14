interface CardPreviewBackProps {
	cvc: string;
	className?: string;
}

// Displays a preview of the back of the credit card with the data inserted by the user
function CardPreviewBack({cvc, className}: CardPreviewBackProps) {
	return (
		<div className={ (className ? className + " " : "") + 
					"CardPreviewBack text-white w-[275px] xl:w-[400px] p-4"}>
						
			<div className="uppercase text-right text-xs xl:text-base absolute 
				top-[67px] right-[32px] xl:right-[45px] xl:top-[97px]">
				{cvc}
			</div>
		</div>
	)
}

export default CardPreviewBack
