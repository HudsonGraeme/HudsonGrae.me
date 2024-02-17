import {
	Button,
	Center,
	Fade,
	Flex,
	Image,
	Spinner,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react'
import { uniqueId } from 'lodash'
import { ReactNode, useState } from 'react'
import TitleAndSubtitle from './TitleAndSubtitle'

export interface ICardProps {
	title: string
	start: string
	end: string
	description: string | ReactNode
	feature: string | ReactNode
}

const calculateTimeDifference = (start: string, end?: string) => {
	const endDate = end ? new Date(end) : new Date()
	const diff = Math.abs(new Date(start).getTime() - endDate.getTime())
	const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
	const months = Math.floor(
		(diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
	)

	return years > 0
		? `${years}${end ? '' : '+'} Year${years > 1 ? 's' : ''}`
		: `${months}${end ? '' : '+'} Month${months > 1 ? 's' : ''}`
}

const Card = ({ title, start, end, description, feature }: ICardProps) => {
	const [featureError, setFeatureError] = useState(false)
	const [imgKey, setImgKey] = useState(uniqueId())
	let renderedDescription: ReactNode = description
	if (typeof description === 'string') {
		renderedDescription = <Text>{description}</Text>
	}

	return (
		<Stack
			direction={{ base: 'column-reverse', md: 'row' }}
			spacing={8}
			align={{ base: 'center', md: 'start' }}
			justify='space-between'
			rounded='xl'
			w='100%'
			p={{ base: 8, md: 16 }}
			bg='whiteAlpha.200'
			minH='container.sm'
			minW={{ base: '90%', md: '80%' }}
		>
			<VStack
				justify='start'
				align='start'
				h='full'
				spacing={8}
				maxW={{ base: 'full', md: '40%' }}
			>
				<TitleAndSubtitle
					title={title}
					subtitle={calculateTimeDifference(start, end)}
					sm
					variant={
						end
							? undefined
							: TitleAndSubtitle.TitleSubtitleVariant.ACTIVE
					}
				/>

				{renderedDescription}
			</VStack>
			<Fade in>
				<Flex h='full' aspectRatio={1}>
					{typeof feature === 'string' ? (
						<Image
							key={imgKey}
							src={feature}
							alt={title}
							onError={(e) => {
								setFeatureError(true)
							}}
							fallback={
								<Center h='full' w='lg' bg='whiteAlpha.200'>
									{featureError ? (
										<VStack spacing={4}>
											<Text fontWeight={'bold'}>
												Image failed to load
											</Text>
											<Button
												onClick={() =>
													setImgKey(uniqueId())
												}
											>
												Retry
											</Button>
										</VStack>
									) : (
										<Spinner />
									)}
								</Center>
							}
						/>
					) : (
						feature
					)}
				</Flex>
			</Fade>
		</Stack>
	)
}

export default Card
