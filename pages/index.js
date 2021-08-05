import Head from 'next/head';
import { Button, Flex } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import LogoIcon from '@/components/icons/LogoIcon';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        h="100vh"
      >
        <LogoIcon color="black" size="64px" />

        {auth.user ? (
          <>
            <Button onClick={(e) => auth.signout()}>Sign Out</Button>
          </>
        ) : (
          <Button size="sm" mt={4} onClick={(e) => auth.signinWithGithub()}>
            Sign In
          </Button>
        )}
      </Flex>
    </div>
  );
}
