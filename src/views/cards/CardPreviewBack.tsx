interface CardPreviewBackProps {
	cvc: string;
}

// Displays a preview of the back of the credit card with the data inserted by the user
function CardPreviewBack({cvc}: CardPreviewBackProps) {
	return (
		<div className="CardPreviewBack text-white w-[275px] p-4 relative">
			<div className="uppercase text-right text-xs absolute top-[67px] right-[32px]">
				{cvc}
			</div>
		</div>
	)
}

export default CardPreviewBack
