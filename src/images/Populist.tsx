import * as React from 'react'

function Populist(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 1024 1024'
			{...props}
		>
			<path
				d='M866.7 1024.5H158.3C71.2 1024.5.5 953.9.5 866.7V157.3C.5 70.1 71.1-.5 158.3-.5h708.4c87.1 0 157.8 70.6 157.8 157.8v709.4c0 87.2-70.6 157.8-157.8 157.8z'
				fill='#1a1a1a'
				stroke='#000'
				strokeMiterlimit={10}
			/>
			<path fill='none' d='M85.9 94.4H938v835.1H85.9z' />
			<text
				transform='translate(167.603 791.998)'
				fontSize={800}
				fontFamily='PTSans-CaptionBold'
				fill='#1dd860'
			>
				{'P.'}
			</text>
		</svg>
	)
}

export default Populist
