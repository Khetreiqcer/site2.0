"use client";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Progress,
  Icon,
} from "@chakra-ui/react";
import { FaNodeJs, FaReact, FaPython, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "NodeJS", level: 80, icon: FaNodeJs },
  { name: "React", level: 75, icon: FaReact },
  { name: "Python", level: 70, icon: FaPython },
  { name: "Databases", level: 70, icon: FaDatabase },
  { name: "NextJS", level: 85, icon: SiNextdotjs },
  { name: "TypeScript", level: 90, icon: SiTypescript },
];

export default function SkillsGrid() {
  return (
    <Box
      px={4}
      py={{ base: 12, md: 16 }}
      maxW="900px"
      mx="auto"
      textAlign="center"
    >
      <Heading as="h2" size="xl" mb={8}>
        My Skills
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {skills.map((skill, index) => (
          <Box
            key={index}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            p={6}
            boxShadow="lg"
            _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
          >
            <Icon as={skill.icon} boxSize={12} color="blue.500" mb={4} />
            <Text fontSize="lg" mb={2}>
              {skill.name}
            </Text>
            <Progress
              value={skill.level}
              size="sm"
              colorScheme="blue"
              borderRadius="md"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
