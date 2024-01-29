import { Button, Stack, Text, VStack } from '@chakra-ui/react'
import { get } from 'lodash'
import { Link, useLocation } from 'react-router-dom'
import { VIEWPORT_HEIGHT } from '../../common/constants'
import TitleAndSubtitle from '../../components/TitleAndSubtitle'

const SuccessPage = () => {
	const { state } = useLocation()
	let thanksText = 'Thanks for reaching out.'
	let backToYouText = "I'll get back to you."
	if (get(state, 'firstName'))
		thanksText = `Thanks for reaching out, ${state.firstName}.`
	if (get(state, 'email'))
		backToYouText = `I'll get back to you at ${state.email}.`

	return (
		<VStack
			justify='center'
			align='start'
			w='full'
			h='full'
			spacing='6'
			minH={VIEWPORT_HEIGHT}
		>
			<TitleAndSubtitle
				title='Success.'
				subtitle={thanksText}
				variant={TitleAndSubtitle.TitleSubtitleVariant.SUCCESS}
			/>
			<Text>{backToYouText}</Text>
			<Stack direction={{ base: 'column', lg: 'row' }}>
				<Button size='sm' bg='whiteAlpha.300' as={Link} to='/'>
					Return Home
				</Button>
			</Stack>
		</VStack>
	)
}

export default SuccessPage
