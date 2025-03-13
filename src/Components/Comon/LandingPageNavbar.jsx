import { Box, Button, Flex } from "@chakra-ui/react";

const LandingPageNavbar = () => {
  return (
    <Box bg="#0f172a" borderBottom="2px solid gray.400" p={2}>
      <Flex alignItems="center" justifyContent="space-between" gap={4} mx={5}>
        <Box>logo</Box>
        <Box>
          <Button
            bg="#0284c7"
            w="100%"
            borderRadius="md"
            size="sm"
            _hover={{ background: "#0284c7" }}
            color="white"
            fontWeight="normal"
          >
            Wallet
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingPageNavbar;
