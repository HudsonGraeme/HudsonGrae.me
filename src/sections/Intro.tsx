import { Box, Button, Stack, Text, VStack } from '@chakra-ui/react'
import { get, isEmpty } from 'lodash'
import { useCallback, useEffect, useReducer, useRef } from 'react'
import { Link } from 'react-router-dom'
import { EASTER_EGG_1, VIEWPORT_HEIGHT } from '../common/constants'
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
	const boxRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const interval = setInterval(() => {
			dispatchThingChange(Action.NEXT)
		}, 2000)
		return () => clearInterval(interval)
	}, [])

	const handleDoubleClick = useCallback(
		(event: React.MouseEvent<HTMLDivElement>) => {
			if (isEmpty(get(boxRef, 'current'))) return
			const { clientX, clientY } = event
			const { x: _x, y: _y } = boxRef.current!.getBoundingClientRect()
			const plus = document.createElement('span')
			plus.innerText = '+'
			plus.style.position = 'absolute'
			plus.style.left = `${clientX - 10}px` // Adjusted to position '+' correctly
			plus.style.top = `${clientY - 24}px` // Adjusted to position '+' correctly
			plus.style.color = 'white'
			plus.style.fontWeight = 'bold'
			plus.style.fontSize = '2rem'
			plus.style.zIndex = '100'
			// Random color, ensuring it's bright enough to be seen
			plus.style.color = `hsl(${Math.floor(
				Math.random() * 360
			)}, 100%, 50%)`
			// Fade it out
			plus.style.animation = 'fade 1s forwards'

			boxRef.current!.appendChild(plus)
			setTimeout(() => {
				plus.remove()
			}, 1000)
			console.log('%cEaster Egg #1 activated 😎', EASTER_EGG_1)
		},
		[boxRef]
	)

	return (
		<VStack
			justify='center'
			align='start'
			w='full'
			h='full'
			spacing='6'
			minH={VIEWPORT_HEIGHT}
		>
			<Box
				userSelect='none'
				onDoubleClick={handleDoubleClick}
				cursor='crosshair'
				ref={boxRef}
			>
				<TitleAndSubtitle title="I'm Hudson." subtitle='Hi.' />
			</Box>
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
