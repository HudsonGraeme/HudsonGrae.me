import { Heading, VStack } from '@chakra-ui/react'

export enum TitleSubtitleVariant {
	ERROR = 'ERROR',
	SUCCESS = 'SUCCESS',
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
			<Heading color={subtitleColor} fontSize={sm ? 'xl' : '2xl'}>
				{subtitle}
			</Heading>
			<Heading fontSize={sm ? '3xl' : '4xl'}>{title}</Heading>
		</VStack>
	)
}

export default TitleAndSubtitle
