import React from 'react';
import { Heading, Flex, Text, Button } from '@chakra-ui/react';

import AddSiteModal from '@/components/AddSiteModal';

const EmptyState = () => (
  <Flex
    width="100%"
    backgroundColor="white"
    borderRadius="8px"
    p={16}
    flexDirection="column"
    justify="center"
    align="center"
  >
    <Heading size="lg" mb={2}>
      You haven't added any sites
    </Heading>
    <Text mb={4}>Let's get started.</Text>
    <AddSiteModal>Add Your First Site</AddSiteModal>
  </Flex>
);

export default EmptyState;
