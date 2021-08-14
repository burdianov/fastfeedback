import Head from 'next/head';
import { Button, Flex, Text, Link } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import LogoIcon from '@/components/icons/LogoIcon';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
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

      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        h="100vh"
        maxW="400px"
        margin="0 auto"
      >
        <LogoIcon color="black" size="42px" mb={2} />

        <Text mb={4}>
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

        {auth.user ? (
          <Button as="a" size="sm" fontWeight="medium" href="/dashboard">
            View Dashboard
          </Button>
        ) : (
          <Button
            mt={4}
            size="sm"
            fontWeight="medium"
            onClick={(e) => auth.signinWithGitHub()}
          >
            Sign In
          </Button>
        )}
      </Flex>
    </div>
  );
}
