"use client";

import { Box, Text, Link, Stack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="brand.background" color="brand.text" py={4}>
      <Stack direction="row" spacing={4} justify="center">
        <Link href="https://github.com/Khetreiqcer" isExternal>
          GitHub
        </Link>
        <Link
          href="https://linkedin.com/in/joão-possenti-4434bb1a1/"
          isExternal
        >
          LinkedIn
        </Link>
        <Link href="mailto:jvpossentics@gmail.com">Email</Link>
      </Stack>
      <Text textAlign="center" mt={2}>
        &copy; {new Date().getFullYear()} NEC computer https://skfb.ly/oZpSq by
        Lelouch is licensed under Creative Commons Attribution.
        http://creativecommons.org/licenses/by/4.0/. &copy;{" "}
        {new Date().getFullYear()} Joao Possenti. Todos os direitos reservados.
      </Text>
      <Text textAlign="center" mt={2}>
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by João Possenti. {new Date().getFullYear()}{" "}
        <Link href="https://www.linkedin.com/in/joão-possenti-4434bb1a1/">
          Follow me on LinkedIn
        </Link>
      </Text>
    </Box>
  );
}
