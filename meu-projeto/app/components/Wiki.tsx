// components/Wiki.tsx


import { Box, Heading, List, ListItem, Link } from '@chakra-ui/react';

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
        Minha Wiki
      </Heading>
      <List spacing={4} textAlign="left">
        <ListItem>
          <Link
            href="https://link-para-seu-artigo-1.com"
            isExternal
            color="cyan.400" // Destaque suave
            _hover={{ textDecoration: 'underline', color: 'cyan.300' }}
          >
            Artigo 1: Tópico sobre Desenvolvimento Web
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://link-para-seu-artigo-2.com"
            isExternal
            color="cyan.400"
            _hover={{ textDecoration: 'underline', color: 'cyan.300' }}
          >
            Artigo 2: Guia sobre Otimizações de Código
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://link-para-seu-artigo-3.com"
            isExternal
            color="cyan.400"
            _hover={{ textDecoration: 'underline', color: 'cyan.300' }}
          >
            Artigo 3: Tutorial de Python Avançado
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}