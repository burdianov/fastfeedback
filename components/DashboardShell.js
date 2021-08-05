import React from 'react';
import {
  Flex,
  Link,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading
} from '@chakra-ui/react';

import LogoIcon from '@/components/icons/LogoIcon';
import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const { user } = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="white"
        alignItems="center"
        justifyContent="space-between"
        py={4}
        px={8}
      >
        <Flex justifyContent="flex-start" alignItems="center">
          <LogoIcon />
          <Link pl={4}>Sites</Link>
          <Link pl={4}>Feedback</Link>
        </Flex>
        <Flex alignItems="center" flexDirection="row">
          <Link mr={4}>Account</Link>
          <Avatar size="sm" src={user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} height="calc(100vh - 64px)">
        <Flex
          flexDirection="column"
          maxWidth="800px"
          w="100%"
          pl="auto"
          pr="auto"
          ml="auto"
          mr="auto"
        >
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink color="gray.700" fontSize="sm">
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mb={4}>Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
