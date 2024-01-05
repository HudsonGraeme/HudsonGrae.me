import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={24}
			height={24}
			viewBox='0 0 24 24'
			fill='none'
			stroke='white'
			strokeWidth={2}
			strokeLinecap='round'
			strokeLinejoin='round'
			className='prefix__feather prefix__feather-coffee'
			{...props}
		>
			<path d='M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3' />
		</svg>
	)
}

export default SvgComponent
