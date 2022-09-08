import { ReactNode, SyntheticEvent } from "react"

interface CtaButtonProps {
	className?: string;
	onClick?: (e?: SyntheticEvent) => void;
	children?: ReactNode;
}

// Displays a Call To Action Button
function CtaButton({className, onClick, children}: CtaButtonProps) {
	return (
		<button onClick={onClick !== undefined ? onClick : () => {}}
			className={(className ? className + " " : "") + 
				"rounded-lg bg-veryDarkViolet text-lightGrayishViolet text-base p-3 " + 
				"hover:opacity-80 active:opacity-90 focus:outline outline-2 outline-veryDarkViolet outline-offset-2"
				}>
			{children}
		</button>
	)
}

export default CtaButton
