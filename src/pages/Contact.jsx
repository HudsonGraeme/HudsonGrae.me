import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useFormspark } from '@formspark/use-formspark';
import { useCallback } from 'react';
import { FORMSPARK_CONTACT_ID } from '../common/constants';

// I ❤️ forms

const contactFormValidator = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .required("I'll need to know your first name")
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
    .required("I'll need an email address so I know who I can reach out to"),
  message: Yup.string()
    .trim()
    .required(
      "Ideally I'd like to know why you're reaching out using this fancy message field here"
    )
    .max(
      512,
      'Alright, alright, save it for the blog. Either your cat is (still) on the keyboard or you are truly writing a novel there. Either way try to keep it under 512 characters.'
    ),
});

const ContactPage = () => {
  const [submit] = useFormspark({
    formId: FORMSPARK_CONTACT_ID,
  });

  const submitForm = useCallback(
    async (values) => {
      await submit(values);
    },
    [submit]
  );

  return (
    <>
      <HStack
        w="100%"
        align="start"
        px={{ base: 4, xl: 16 }}
        mt={{ base: 4, xl: 8 }}
      >
        <Heading
          fontSize="6xl"
          rounded="xl"
          bg="gray.900"
          textAlign="left"
          p={2}
          px={16}
        >
          Contact
        </Heading>
      </HStack>
      <VStack justify="center" minH="80vh" w="100%">
        <VStack
          w="100%"
          maxW="80rem"
          rounded="2xl"
          overflow="hidden"
          p={{ base: 4, xl: 16 }}
          bg="gray.900"
        >
          <VStack w="100%" align="stretch">
            <Heading fontSize="4xl">Give me a shout</Heading>
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
              {({ handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4} align="start">
                    <FormControl
                      isInvalid={!!errors.firstName && touched.firstName}
                    >
                      <FormLabel htmlFor="firstName">First Name</FormLabel>
                      <Field
                        as={Input}
                        id="firstName"
                        name="firstName"
                        type="firstName"
                        variant="filled"
                        placeholder="Jim"
                      />
                      <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.lastName && touched.lastName}
                    >
                      <FormLabel htmlFor="lastName">
                        Last Name (optional)
                      </FormLabel>
                      <Field
                        as={Input}
                        placeholder="Pearseed"
                        id="lastName"
                        name="lastName"
                        type="lastName"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.email && touched.email}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Field
                        as={Input}
                        placeholder="elon@x.com"
                        id="email"
                        name="email"
                        type="email"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.message && touched.message}
                    >
                      <FormLabel htmlFor="lastName">Message</FormLabel>
                      <Field
                        as={Textarea}
                        placeholder="Hello Hudson, I have a million dollar deal lined up for you. All you need to do is wire me $10,000 in Apple gift cards to cover the transaction costs..."
                        maxH={64}
                        id="message"
                        name="message"
                        type="message"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.message}</FormErrorMessage>
                    </FormControl>
                    <Button type="submit" variant="primary" width="full">
                      Holler 📢
                    </Button>
                  </VStack>
                </form>
              )}
            </Formik>
          </VStack>
        </VStack>
      </VStack>
    </>
  );
};

export default ContactPage;
