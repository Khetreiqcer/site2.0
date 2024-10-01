"use client";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

export default function Wiki() {
  return (
    <Box
      px={4}
      py={{ base: 12, md: 16 }}
      maxW="800px"
      mx="auto"
      textAlign="center"
    >
      <Heading as="h2" size="xl" mb={6}>
        My Journey
      </Heading>

      <VStack spacing={10} align="stretch" position="relative">
        <HStack spacing={4} align="center" justify="flex-start">
          <Icon as={FaCircle} color="cyan.400" boxSize={4} />
          <VStack align="start">
            <Heading as="h3" size="md">
              Birth
            </Heading>
            <Text fontSize="md" color="gray.600">
              I was born in a small town in Rio Grande do Sul, Brazil.
            </Text>
          </VStack>
        </HStack>
        <Divider orientation="vertical" borderColor="gray.300" />

        <HStack spacing={4} align="center" justify="flex-start">
          <Icon as={FaCircle} color="cyan.400" boxSize={4} />
          <VStack align="start">
            <Heading as="h3" size="md">
              Pre-adulthood
            </Heading>
            <Text fontSize="md" color="gray.600">
              First steps into my academic life
            </Text>
          </VStack>
        </HStack>
        <Divider orientation="vertical" borderColor="gray.300" />

        <HStack spacing={4} align="center" justify="flex-start">
          <Icon as={FaCircle} color="cyan.400" boxSize={4} />
          <VStack align="start">
            <Heading as="h3" size="md">
              Adulthood
            </Heading>
            <Text fontSize="md" color="gray.600">
              Refining my skills through education and real-world projects.
            </Text>
          </VStack>
        </HStack>
        <Divider orientation="vertical" borderColor="gray.300" />
      </VStack>
    </Box>
  );
}
