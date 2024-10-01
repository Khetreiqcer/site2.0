import { Box, Heading, Text } from "@chakra-ui/react";

export default function Bio() {
  return (
    <Box
      px={4}
      py={{ base: 12, md: 16 }}
      maxW="800px"
      mx="auto"
      textAlign="center"
      id="about"
    >
      <Heading as="h2" size="xl" mb={6}>
        About Me
      </Heading>
      <Text fontSize="lg">
        Hi! I am João Vitor Possenti, an Information Systems student at UFSM,
        expected to graduate in 2027. I have experience in web development using
        technologies such as Node.js, React, and MongoDB, in addition to
        knowledge in Python, relational and non-relational databases. My
        professional goal is to work as a software developer, creating robust
        and scalable applications.
      </Text>
      <Text fontSize="lg" mt={4}>
        I enjoy taking on challenges and proving to myself that I can overcome
        them. I am always looking for opportunities to learn and improve my
        skills. Im also a Linux enthusiast and passionate about runtime
        optimizations.
      </Text>
    </Box>
  );
}
