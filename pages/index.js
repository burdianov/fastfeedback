import Head from 'next/head';
import { Button, Flex, Text, Link, Stack, Box } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import { getAllFeedback } from '@/lib/db-admin';
import Feedback from '@/components/Feedback';
import LogoIcon from '@/components/icons/LogoIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';
import GoogleIcon from '@/components/icons/GoogleIcon';
import FeedbackLink from '@/components/FeedbackLink';

const SITE_ID = '1fqAHxry3LLLIllYDhZe';

export async function getStaticProps(context) {
  const { feedback } = await getAllFeedback(SITE_ID);

  return {
    props: {
      allFeedback: feedback
    },
    revalidate: 1
  };
}

export default function Home({ allFeedback }) {
  const auth = useAuth();

  return (
    <>
      <Box bg="gray.100" py={16}>
        <Head>
          <title>Fast Feedback</title>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                window.location.href = "/dashboard"
              }
            `
            }}
          />
        </Head>

        <Flex as="main" direction="column" maxW="400px" margin="0 auto">
          <LogoIcon color="black" size="64px" mb={2} />

          <Text mb={4} fontSize="lg" py={4}>
            <Text as="span" fontWeight="bold" display="inline">
              Fast Feedback
            </Text>
            {' is being built as part of '}
            <Link
              href="https://react2025.com"
              isExternal
              textDecoration="underline"
            >
              React 2025
            </Link>
            {`. It's the easiest way to add comments or reviews to your static site. It's still a work-in-progress, but you can try it out by logging in.`}
          </Text>

          {auth?.user ? (
            <Button
              as="a"
              href="/dashboard"
              backgroundColor="white"
              color="gray.900"
              fontWeight="medium"
              mt={4}
              maxW="200px"
              _hover={{ bg: 'gray.700' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.95)'
              }}
            >
              View Dashboard
            </Button>
          ) : (
            <Stack isInline>
              <Button
                onClick={(e) => auth.signinWithGitHub()}
                backgroundColor="gray.900"
                color="white"
                fontWeight="medium"
                leftIcon={<GitHubIcon color="white" />}
                _hover={{ bg: 'gray.700' }}
                _active={{
                  bg: 'gray.800',
                  transform: 'scale(0.95)'
                }}
              >
                Sign In with GitHub
              </Button>

              <Button
                onClick={(e) => auth.signinWithGoogle()}
                backgroundColor="white"
                color="gray.900"
                variant="outline"
                fontWeight="medium"
                leftIcon={<GoogleIcon />}
                _hover={{ bg: 'gray.100' }}
                _active={{
                  bg: 'gray.100',
                  transform: 'scale(0.95)'
                }}
              >
                Sign In with Google
              </Button>
            </Stack>
          )}
        </Flex>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width="full"
        maxWidth="700px"
        margin="0 auto"
        mt={8}
      >
        <FeedbackLink siteId={SITE_ID} />
        {allFeedback.map((feedback) => (
          <Feedback key={feedback.id} {...feedback} />
        ))}
      </Box>
    </>
  );
}
