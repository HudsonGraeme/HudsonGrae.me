import {
	Center,
	Fade,
	Flex,
	Spinner,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react'
import { ReactNode, useEffect, useState } from 'react'
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
	const [featureLoading, setFeatureLoading] = useState(true)
	const [renderedFeature, setRenderedFeature] = useState<ReactNode>(feature)

	let renderedDescription: ReactNode = description
	if (typeof description === 'string') {
		renderedDescription = <Text>{description}</Text>
	}

	useEffect(() => {
		if (typeof renderedFeature !== 'string') {
			setRenderedFeature(feature)
			setFeatureLoading(false)
			return
		}
		import(renderedFeature)
			.then((module) => {
				setRenderedFeature(
					<Fade in>
						<Flex
							flex={1}
							w={{ base: '64', md: 'lg' }}
							h={{ base: '64', md: 'lg' }}
							bgSize='contain'
							bgPos='center'
							// css={{
							// 	'background-image': `url(${bg})`,
							// }}
							bgRepeat='no-repeat'
							boxShadow='0 0 1rem 1rem rgba(20,20,20,1) inset'
							justify='center'
							align='center'
						>
							<Flex
								w='90%'
								h='90%'
								bgPos='center'
								bgSize='contain'
								css={{
									'background-image': `url(${module.default})`,
								}}
								bgRepeat='no-repeat'
								rounded='xl'
							/>
						</Flex>
					</Fade>
				)
			})
			.finally(() => setFeatureLoading(false))
	}, [feature])

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
					{featureLoading ? (
						<Center h='full' w='lg'>
							<Spinner />
						</Center>
					) : (
						renderedFeature
					)}
				</Flex>
			</Fade>
		</Stack>
	)
}

export default Card
