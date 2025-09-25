import { ArrowUpIcon } from '@chakra-ui/icons'
import {
	Button,
	Center,
	Fade,
	Flex,
	Image,
	Link,
	Spinner,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react'
import { uniqueId } from 'lodash'
import { ReactNode, useState } from 'react'
import TitleAndSubtitle from './TitleAndSubtitle'

export interface IAppCardProps {
	title: string
	description: string | ReactNode
	feature: string | ReactNode
	url: string
}

const AppCard = ({ title, description, feature, url }: IAppCardProps) => {
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
				justify='space-between'
				align='start'
				h='full'
				w='full'
				spacing={4}
				maxW={{ base: 'full', md: '90%' }}
			>
				<VStack spacing={2} align='start' flex={1}>
					<TitleAndSubtitle title={title} subtitle='App' sm />
					{renderedDescription}
				</VStack>

				<Button
					as={Link}
					href={url}
					isExternal
					target='_blank'
					size='md'
					bg='black'
					color='white'
					borderRadius='md'
					px={6}
					py={3}
					_hover={{ textDecoration: 'none' }}
					textDecoration='none'
					rightIcon={<ArrowUpIcon transform="rotate(45deg)" />}
				>
					Launch
				</Button>
			</VStack>

			<Flex
				h='150px'
				w='150px'
				flexShrink={0}
				justify='center'
				align='center'
				overflow='hidden'
				rounded='3xl'
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

export default AppCard
