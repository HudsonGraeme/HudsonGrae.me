import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	HStack,
	Heading,
	Input,
	Text,
	Textarea,
	VStack,
} from '@chakra-ui/react'
import { SubmitPayload, useFormspark } from '@formspark/use-formspark'
import { FastField, Formik } from 'formik'
import { isEmpty } from 'lodash'
import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { EASTER_EGG_1, FORMSPARK_CONTACT_ID } from '../../common/constants.ts'

// I ❤️ forms

const getHelperTextForMessageField = (message: string) => {
	const messageLength = message.length
	if (messageLength > 512) {
		return `${messageLength - 512} characters over the limit`
	} else if (messageLength > 400) {
		return `${512 - messageLength} characters remaining`
	} else {
		return ''
	}
}

const getHelperTextColorForMessageField = (message: string) => {
	const messageLength = message.length
	if (messageLength > 512) {
		return 'red.300'
	} else {
		return 'yellow.300'
	}
}

const contactFormValidator = Yup.object().shape({
	firstName: Yup.string()
		.trim()
		.required("I'll need to know your first name so I can refer to you")
		.max(
			64,
			"Wow, that's a long name! Maybe try your nickname? What do your friends refer to you as?"
		),
	lastName: Yup.string()
		.trim()
		.notRequired()
		.max(
			64,
			'Oh man, your last name is either huge or your cat is sitting on your keyboard. Try to shorten it down or lure the cat away from the keyboard.'
		),
	email: Yup.string()
		.trim()
		.email(
			"Looks like what you've entered isn't quite a valid email address... Did you forget the @? Maybe missing a .com?"
		)
		.required(
			"I'll need an email address so I know where to send my reply"
		),
	message: Yup.string()
		.trim()
		.required(
			"Ideally I'd like to know why you're reaching out using this fancy message field here..."
		)
		.max(
			512,
			'Alright, alright, save it for the blog. Either your cat is (still) on the keyboard or you are truly writing a novel there. Either way keep it under 512 characters.'
		),
})

interface IPayload extends SubmitPayload {
	firstName: string
	lastName: string
	email: string
	message: string
}

const ContactPage = () => {
	const [submit, submitting] = useFormspark({
		formId: FORMSPARK_CONTACT_ID,
	})
	const { state } = useLocation()
	const navigate = useNavigate()

	let initialFormValues: IPayload = {
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	}

	if (!isEmpty(state)) {
		initialFormValues = {
			...initialFormValues,
			...state,
		}
	}

	const submitForm = useCallback(
		async (values: IPayload) => {
			try {
				await submit(values)
				navigate('/contact/success', {
					state: values,
				})
			} catch (error) {
				console.error(error)
				navigate('/contact/error', {
					state: values,
				})
			}
		},
		[submit, navigate] // Added navigate to the dependency array
	)

	const handleGM = useCallback((_event: React.MouseEvent<HTMLSpanElement>) => {
		// Implement the "GM" raining effect with insets to prevent overflow
		document.body.style.overflow = 'hidden'
		const endTime = Date.now() + 10000 // 10 seconds from now
		const interval = setInterval(() => {
			if (Date.now() > endTime) {
				clearInterval(interval)
				document.body.style.overflow = 'unset'
				return
			}
			const gm = document.createElement('span')
			gm.innerText = 'GM'
			gm.style.position = 'absolute'
			// Calculate random positions with insets
			const inset = 50 // pixels from the edge
			const maxWidth = document.documentElement.clientWidth - inset
			const maxHeight = document.documentElement.clientHeight - inset
			gm.style.left = `${Math.random() * maxWidth + inset / 2}px`
			gm.style.top = `${Math.random() * maxHeight + inset / 2}px`
			gm.style.fontSize = '2rem'
			gm.style.color = `hsl(${Math.floor(
				Math.random() * 360
			)}, 100%, 50%)`
			gm.style.animation = 'fade 1s forwards'
			document.body.appendChild(gm)

			setTimeout(() => {
				gm.remove()
			}, 1000)
			console.log('%cEaster Egg #2 activated 😎', EASTER_EGG_1)
		}, 100)
	}, [])

	return (
		<>
			<VStack justify='center' minH='80vh' w='100%' pt={24}>
				<VStack
					w='100%'
					maxW='80rem'
					rounded='xl'
					overflow='hidden'
					p={8}
					bg='whiteAlpha.200'
				>
					<VStack w='100%' align='stretch' spacing={8}>
						<HStack w='full' justify='space-between' align='start'>
							<VStack align='start'>
								<Heading>Send me a message</Heading>
								<Heading color='whiteAlpha.600' fontSize='md'>
									Messages that do not begin with{' '}
									<Text
										as='span'
										onClick={handleGM}
										cursor='crosshair'
										userSelect='none'
									>
										"GM"
									</Text>{' '}
									will be ignored.
								</Heading>
							</VStack>
						</HStack>
						<Formik
							initialValues={initialFormValues}
							onSubmit={submitForm}
							validationSchema={contactFormValidator}
							validateOnMount={!isEmpty(state)}
						>
							{({ handleSubmit, errors, touched, values }) => (
								<form onSubmit={handleSubmit}>
									<VStack spacing={4} align='start'>
										<FormControl
											isRequired
											isInvalid={
												!!errors.firstName &&
												touched.firstName
											}
										>
											<FormLabel htmlFor='firstName'>
												First Name
											</FormLabel>
											<FastField
												as={Input}
												id='firstName'
												name='firstName'
												type='firstName'
												variant='filled'
												placeholder='Jim'
											/>
											<FormErrorMessage>
												{errors.firstName}
											</FormErrorMessage>
										</FormControl>
										<FormControl
											isInvalid={
												!!errors.lastName &&
												touched.lastName
											}
										>
											<FormLabel htmlFor='lastName'>
												Last Name
											</FormLabel>
											<FastField
												as={Input}
												placeholder='Pearseed'
												id='lastName'
												name='lastName'
												type='lastName'
												variant='filled'
											/>
											<FormErrorMessage>
												{errors.lastName}
											</FormErrorMessage>
										</FormControl>
										<FormControl
											isRequired
											isInvalid={
												!!errors.email && touched.email
											}
										>
											<FormLabel htmlFor='email'>
												Email
											</FormLabel>
											<FastField
												as={Input}
												placeholder='elon@x.com'
												id='email'
												name='email'
												type='email'
												variant='filled'
											/>
											<FormErrorMessage>
												{errors.email}
											</FormErrorMessage>
										</FormControl>
										<FormControl
											isRequired
											isInvalid={
												!!errors.message &&
												touched.message
											}
										>
											<FormLabel htmlFor='message'>
												Message
											</FormLabel>
											<FastField
												as={Textarea}
												placeholder='Hello Hudson, I have a million dollar deal lined up for you. All you need to do is wire me $10,000 in Apple gift cards to cover the transaction costs...'
												maxH={64}
												id='message'
												name='message'
												type='message'
												variant='filled'
											/>
											<HStack justify='space-between'>
												{!errors.message ? (
													<Box></Box>
												) : null}
												<FormErrorMessage>
													{errors.message}
												</FormErrorMessage>
												<FormHelperText
													color={getHelperTextColorForMessageField(
														values.message
													)}
												>
													{getHelperTextForMessageField(
														values.message
													)}
												</FormHelperText>
											</HStack>
										</FormControl>
										<Button
											isLoading={submitting}
											isDisabled={
												(isEmpty(touched) &&
													isEmpty(state)) ||
												!isEmpty(errors)
											}
											type='submit'
											variant='primary'
											w='32'
										>
											Send 🚀
										</Button>
									</VStack>
								</form>
							)}
						</Formik>
					</VStack>
				</VStack>
			</VStack>
		</>
	)
}

export default ContactPage
