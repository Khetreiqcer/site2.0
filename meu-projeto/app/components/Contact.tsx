'use client';

import { Box, Heading, Text, Stack, Link, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <Box
      px={4}
      py={{ base: 12, md: 16 }}
      maxW="800px"
      mx="auto"
      textAlign="center"
    >
      <Heading as="h2" size="xl" mb={6} >
        Entre em Contato
      </Heading>
      <Text fontSize="lg" mb={6}>
        Estou disponível para discussões, novos projetos e oportunidades. Entre em contato pelas redes sociais ou via e-mail.
      </Text>
      <Stack direction="row" spacing={4} justify="center">
        <Link href="https://github.com/seu-usuario" isExternal>
          <IconButton
            aria-label="GitHub"
            icon={<FaGithub />}
            size="lg"
            variant="ghost"
            _hover={{ color: 'cyan.400' }} // Leve destaque no hover
          />
        </Link>
        <Link href="https://linkedin.com/in/seu-usuario" isExternal>
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            size="lg"
            variant="ghost"
            _hover={{ color: 'cyan.400' }}
          />
        </Link>
        <Link href="mailto:seu-email@example.com">
          <IconButton
            aria-label="Email"
            icon={<FaEnvelope />}
            size="lg"
            variant="ghost"
            _hover={{ color: 'cyan.400' }}
          />
        </Link>
      </Stack>
    </Box>
  );
}