import { Heading, Tooltip, VStack } from '@chakra-ui/react'

enum TitleSubtitleVariant {
	ERROR = 'ERROR',
	SUCCESS = 'SUCCESS',
	ACTIVE = 'ACTIVE',
}

interface ITitleAndSubtitle {
	title: string
	subtitle: string
	variant?: TitleSubtitleVariant
	sm?: boolean
}

const colorForVariant = new Map<TitleSubtitleVariant, string>([
	[TitleSubtitleVariant.ERROR, 'rgba(255,90,90,0.6)'],
	[TitleSubtitleVariant.SUCCESS, 'rgba(90,255,90,0.6)'],
	[TitleSubtitleVariant.ACTIVE, 'rgba(120,120,255,0.8)'],
])

const TitleAndSubtitle = ({
	title,
	subtitle,
	variant,
	sm,
}: ITitleAndSubtitle) => {
	let subtitleColor = 'whiteAlpha.600'

	if (variant && colorForVariant.has(variant)) {
		subtitleColor = colorForVariant.get(variant)!
	}
	return (
		<VStack spacing={0} align='start'>
			<Tooltip
				label='Actively working in this field'
				placement='top'
				isDisabled={variant !== TitleSubtitleVariant.ACTIVE}
			>
				<Heading color={subtitleColor} fontSize={sm ? 'xl' : '2xl'}>
					{subtitle}
				</Heading>
			</Tooltip>
			<Heading fontSize={sm ? '3xl' : '4xl'}>{title}</Heading>
		</VStack>
	)
}

TitleAndSubtitle.TitleSubtitleVariant = TitleSubtitleVariant

export default TitleAndSubtitle
