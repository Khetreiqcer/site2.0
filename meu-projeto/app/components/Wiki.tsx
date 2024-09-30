'use client'
import { Box, Heading, VStack, HStack, Text, Icon, Divider } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';

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

      {/* Linha do Tempo */}
      <VStack spacing={10} align="stretch" position="relative">
        {/* Nascimento */}
        <HStack spacing={4} align="center" justify="flex-start">
          <Icon as={FaCircle} color="cyan.400" boxSize={4} />
          <VStack align="start">
            <Heading as="h3" size="md">
              Birth
            </Heading>
            <Text fontSize="md" color="gray.600">
              The beginning of my journey, born with curiosity and enthusiasm for life.
            </Text>
            <Text fontSize="md" color="gray.500">
              - I was born in a small town in Rio Grande do Sul, Brazil. Since I was a child, I have always been surrounded by video games and technology in general.
            </Text>
          </VStack>
        </HStack>
        <Divider orientation="vertical" borderColor="gray.300" />

        {/* Vida Pré-Adulta */}
        <HStack spacing={4} align="center" justify="flex-start">
          <Icon as={FaCircle} color="cyan.400" boxSize={4} />
          <VStack align="start">
            <Heading as="h3" size="md">
              Pre-adulthood
            </Heading>
            <Text fontSize="md" color="gray.600">
              First steps into my academic life
            </Text>
            
            <Text fontSize="sm" color="gray.500">
              - As a teenager, I always aimed to be an intellectual person dedicated to studies, particularly in the general knowledge of our world. I love philosophy, mathematics, geography, physics, and computer science.
            </Text>
          </VStack>
        </HStack>
        <Divider orientation="vertical" borderColor="gray.300" />

        {/* Vida Adulta */}
        <HStack spacing={4} align="center" justify="flex-start">
          <Icon as={FaCircle} color="cyan.400" boxSize={4} />
          <VStack align="start">
            <Heading as="h3" size="md">
              Adulthood
            </Heading>
            <Text fontSize="md" color="gray.600">
              Refining my skills through education and real-world projects.
            </Text>
            <Text fontSize="sm" color="gray.500">
              - Studying Information Systems at UFSM and developing full-stack applications.
            </Text>
            <Text fontSize="sm" color="gray.500">
              - Gained experience in technologies like React, Node.js, and Python.
            </Text>
          </VStack>
        </HStack>
        <Divider orientation="vertical" borderColor="gray.300" />
      </VStack>
    </Box>
  );
}
