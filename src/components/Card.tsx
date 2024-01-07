import { Flex, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { ReactNode } from 'react'
import TitleAndSubtitle from './TitleAndSubtitle'

interface ICardProps {
	title: string
	subtitle: string
	description: string | ReactNode
	feature: string | ReactNode
}

const Card = ({ title, subtitle, description, feature }: ICardProps) => {
	if (typeof description === 'string') {
		description = <Text>{description}</Text>
	}

	if (typeof feature === 'string') {
		feature = <Image src={feature} aspectRatio={1} />
	}

	return (
		<Stack
			direction={{ base: 'column', md: 'row' }}
			spacing={8}
			align='start'
			justify='space-between'
			rounded='xl'
			w='100%'
			maxW='75%'
			p={{ base: 8, md: 16 }}
			bg='whiteAlpha.200'
			minH='container.sm'
		>
			<VStack justify='space-between' align='start' h='full' spacing={8}>
				<TitleAndSubtitle title={title} subtitle={subtitle} sm />
				{description}
			</VStack>
			<Flex maxW='75%' maxH='container.sm'>
				{feature}
			</Flex>
		</Stack>
	)
}

export default Card
