
import { Box, Heading, Text } from '@chakra-ui/react';

export default function Bio() {
  return (
    <Box
      px={4}
      py={{ base: 12, md: 16 }} // Espaçamento responsivo
      maxW="800px"
      mx="auto"
      textAlign="center"
    >
      <Heading as="h2" size="xl" mb={6}>
        Sobre Mim
      </Heading>
      <Text fontSize="lg">
        Olá! Eu sou João Vitor Possenti, estudante de Sistemas de Informação na UFSM, com previsão de formatura para 2027.
        Tenho experiência em desenvolvimento web, utilizando tecnologias como Node.js, React, e MongoDB, além de conhecimentos
        em Python, bancos de dados relacionais e não relacionais. Meu objetivo profissional é trabalhar como desenvolvedor
        de software, criando aplicações robustas e escaláveis.
      </Text>
      <Text fontSize="lg" mt={4} >
        Gosto de enfrentar desafios e de me mostrar que posso superá-los. Estou sempre em busca de oportunidades para aprender
        e melhorar minhas habilidades. Também sou um entusiasta por Linux e otimizações de runtime.
      </Text>
    </Box>
  );
}