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
	Textarea,
	VStack,
} from '@chakra-ui/react'
import { SubmitPayload, useFormspark } from '@formspark/use-formspark'
import { Field, Formik } from 'formik'
import { isEmpty, max } from 'lodash'
import { useCallback } from 'react'
import * as Yup from 'yup'
import { FORMSPARK_CONTACT_ID } from '../common/constants.ts'

// I ❤️ forms

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

const ContactPage = () => {
	const [submit] = useFormspark({
		formId: FORMSPARK_CONTACT_ID,
	})

	const submitForm = useCallback(
		async (values: SubmitPayload) => {
			await submit(values)
		},
		[submit]
	)

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
									Messages that do not begin with "GM" will be
									ignored.
								</Heading>
							</VStack>
						</HStack>
						<Formik
							initialValues={{
								firstName: '',
								lastName: '',
								email: '',
								message: '',
							}}
							onSubmit={submitForm}
							validationSchema={contactFormValidator}
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
											<Field
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
											<Field
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
											<Field
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
											<Field
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
													color={
														values.message.length >
														512
															? 'red.300'
															: 'yellow.300'
													}
												>
													{values.message.length > 400
														? values.message
																.length > 512
															? `${
																	values
																		.message
																		.length -
																	512
															  } character${
																	values
																		.message
																		.length -
																		512 >
																	1
																		? 's'
																		: ''
															  } over the limit`
															: `${max([
																	512 -
																		values
																			.message
																			.length,
																	0,
															  ])} characters remaining`
														: ''}
												</FormHelperText>
											</HStack>
										</FormControl>
										<Button
											isDisabled={
												isEmpty(touched) ||
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
