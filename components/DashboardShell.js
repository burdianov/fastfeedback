import React from 'react';
import {
  Box,
  Button,
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
import AddSiteModal from './AddSiteModal';

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex backgroundColor="white" mb={16} w="full">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
        >
          <Flex>
            <LogoIcon />
            <Link mr={4} ml={4}>
              Sites
            </Link>
            <Link>Feedback</Link>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            {user && (
              <Button variant="ghost" mr={2} onClick={() => signout()}>
                Log Out
              </Button>
            )}
            <Avatar size="sm" src={user?.photoUrl} />
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink>Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex justifyContent="space-between">
          <Heading mb={8}>My Sites</Heading>
          <AddSiteModal>+ Add Site</AddSiteModal>
        </Flex>
        {children}
      </Flex>
    </Box>
  );
};

export default DashboardShell;

// const DashboardShell = ({ children }) => {
//   const { user } = useAuth();

//   return (
//     <Flex backgroundColor="gray.100" h="100vh">
//       <Flex
//         backgroundColor="white"
//         alignItems="center"
//         justifyContent="space-between"
//         py={4}
//         px={8}
//       >
//         <Flex justifyContent="flex-start" alignItems="center">
//           <LogoIcon />
//           <Link pl={4}>Sites</Link>
//           <Link pl={4}>Feedback</Link>
//         </Flex>
//         <Flex alignItems="center" flexDirection="row">
//           <Link mr={4}>Account</Link>
//           <Avatar size="sm" src={user?.photoUrl} />
//         </Flex>
//       </Flex>
//       <Flex backgroundColor="gray.100" p={8} height="calc(100vh - 64px)">
//         <Flex
//           flexDirection="column"
//           maxWidth="800px"
//           w="100%"
//           pl="auto"
//           pr="auto"
//           ml="auto"
//           mr="auto"
//         >
//           <Breadcrumb>
//             <BreadcrumbItem>
//               <BreadcrumbLink color="gray.700" fontSize="sm">
//                 Sites
//               </BreadcrumbLink>
//             </BreadcrumbItem>
//           </Breadcrumb>
//           <Heading mb={4}>Sites</Heading>
//           {children}
//         </Flex>
//       </Flex>
//     </Flex>
//   );
// };

// export default DashboardShell;
