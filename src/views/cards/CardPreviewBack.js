// Displays a preview of the back of the credit card with the data inserted by the user
function CardPreviewBack({number}) {
	
	let renderedNumber = "000"

	if (number) {
		renderedNumber = number.substring(
			Math.max(number.length - 3, 0),
			number.length
		)
	}

	return (
		<div className="CardPreviewBack text-white w-[275px] p-4 relative">
			<div className="uppercase text-right text-xs absolute top-[67px] right-[32px]">
				{renderedNumber}
			</div>
		</div>
	)
}

export default CardPreviewBack
