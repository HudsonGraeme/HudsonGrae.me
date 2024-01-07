import { Button, Stack, Text, VStack } from '@chakra-ui/react'
import { get } from 'lodash'
import { Link, useLocation } from 'react-router-dom'
import { VIEWPORT_HEIGHT } from '../../common/constants'
import TitleAndSubtitle, {
	TitleSubtitleVariant,
} from '../../components/TitleAndSubtitle'

const ErrorPage = () => {
	const { state } = useLocation()
	let sorryText = 'Sorry.'
	if (get(state, 'firstName')) sorryText = `Sorry, ${state.firstName}.`
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
				title='Error.'
				subtitle={sorryText}
				variant={TitleSubtitleVariant.ERROR}
			/>
			<Text>
				Your form submission couldn't be sent. Please try again.
			</Text>
			<Stack direction={{ base: 'column', lg: 'row' }}>
				<Button
					size='sm'
					bg='whiteAlpha.300'
					as={Link}
					to='/contact'
					state={state}
				>
					Retry
				</Button>
			</Stack>
		</VStack>
	)
}

export default ErrorPage
