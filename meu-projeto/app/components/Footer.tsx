// components/Footer.tsx
'use client';

import { Box, Text, Link, Stack } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box bg="brand.background" color="brand.text" py={4}>
      <Stack direction="row" spacing={4} justify="center">
        <Link href="https://github.com/seu-usuario" isExternal>
          GitHub
        </Link>
        <Link href="https://linkedin.com/in/seu-usuario" isExternal>
          LinkedIn
        </Link>
        <Link href="mailto:seu-email@example.com">
          Email
        </Link>
      </Stack>
      <Text textAlign="center" mt={2}>
        &copy; {new Date().getFullYear()} [Seu Nome]. Todos os direitos reservados.
      </Text>
    </Box>
  );
}