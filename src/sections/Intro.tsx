import { Button, Stack, Text, VStack } from '@chakra-ui/react'
import { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { VIEWPORT_HEIGHT } from '../common/constants'
import TitleAndSubtitle from '../components/TitleAndSubtitle'

enum Action {
	NEXT = 'NEXT',
}

const things = [
	'for blockchain',
	'for artificial intelligence',
	'for web',
	'for iOS',
	'for macOS',
]

const thingReducer = (state: number, action: Action) => {
	switch (action) {
		case Action.NEXT:
			return state + 1 >= things.length ? 0 : state + 1
		default:
			console.warn(`${action} isn't implemented in the thing reducer.`)
			return state
	}
}

const Intro = () => {
	const [thingIndex, dispatchThingChange] = useReducer(thingReducer, 0)
	useEffect(() => {
		const interval = setInterval(() => {
			dispatchThingChange(Action.NEXT)
		}, 2000)
		return () => clearInterval(interval)
	}, [])

	return (
		<VStack
			justify='center'
			align='start'
			w='full'
			h='full'
			spacing='6'
			minH={VIEWPORT_HEIGHT}
		>
			<TitleAndSubtitle title="I'm Hudson." subtitle='Hi.' />
			<Text>
				I develop <Text as='span'>{things[thingIndex]}</Text>
			</Text>
			<Stack direction={{ base: 'column', lg: 'row' }}>
				<Button size='sm' bg='whiteAlpha.300' as={Link} to='/contact'>
					Get in Touch
				</Button>
			</Stack>
		</VStack>
	)
}

export default Intro
