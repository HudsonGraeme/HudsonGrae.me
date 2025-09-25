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
		renderedDescription = <Text fontSize='xs'>{description}</Text>
	}

	return (
		<Stack
			direction={{ base: 'column-reverse', lg: 'row' }}
			spacing={4}
			align={{ base: 'center', lg: 'start' }}
			justify='space-between'
			rounded='xl'
			w={{ base: '320px', md: '400px' }}
			h={{ base: '400px', md: '350px' }}
			p={{ base: 4, md: 6 }}
			bg='whiteAlpha.200'
			flex='none'
		>
			<VStack
				justify='start'
				align='start'
				h='full'
				w='full'
				spacing={4}
				overflow='hidden'
				maxW={{ base: 'full', md: '90%' }}
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

			<Flex
				h='150px'
				w='150px'
				flexShrink={0}
				justify='center'
				align='center'
				overflow='hidden'
				rounded='md'
			>
				<Fade
					in
					style={{
						width: '100%',
						height: '100%',
						display: 'flex',
						aspectRatio: 1,
						flexGrow: 1,
					}}
				>
					<Flex justify='end' h='full' w='full'>
						{typeof feature === 'string' ? (
							<Image
								key={imgKey}
								src={feature}
								w='full'
								h='full'
								objectFit='cover'
								alt={title}
								onError={() => {
									setFeatureError(true)
								}}
								fallback={
									<Center
										h='full'
										flex={1}
										bg='whiteAlpha.200'
									>
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
			</Flex>
		</Stack>
	)
}

export default Card
