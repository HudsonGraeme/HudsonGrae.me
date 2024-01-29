import { HStack, VStack } from '@chakra-ui/react'
import cards from '../common/experience.json'
import Card, { ICardProps } from '../components/Card'
import TitleAndSubtitle from '../components/TitleAndSubtitle'

const Experience = () => {
	return (
		<VStack
			justify='center'
			align='start'
			w='full'
			h='full'
			spacing='6'
			minH='100vh'
		>
			<TitleAndSubtitle
				title='Professional Experience'
				subtitle="What I've worked on"
			/>
			<HStack overflowX='scroll' maxW='full' align='start'>
				{(cards as ICardProps[]).map((card) => (
					<Card key={card.title} {...card} />
				))}
			</HStack>
		</VStack>
	)
}

export default Experience
