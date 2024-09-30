"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Stack,
  useColorMode,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./ThemeToggleButton";
import { Link as ScrollLink } from 'react-scroll';

const links = ["Home", "About", "Blog", "Contact"];

const NavLink = ({ children }: { children: string }) => (
  <ScrollLink
    to={children.toLowerCase()}
    smooth={true}
    duration={500}
    spy={true}
    activeClass="active"
    offset={-70} // Offset para ajustar a posição do scroll com relação à navbar fixa
  >
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "hoverBackground", // A cor de hover será definida no tema
      }}
    >
      {children}
    </Link>
  </ScrollLink>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  // Verifica se estamos no lado do cliente antes de habilitar ScrollLink
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Atualiza quando estamos no lado do cliente
  }, []);

  if (!isClient) {
    return null; // Retorna null no lado do servidor para evitar erros de hidratação
  }

  return (
    <Box
      bg={colorMode === "light" ? "rgba(255, 255, 255, 0.3)" : "rgba(26, 32, 44, 0.3)"}
      backdropFilter="blur(10px)" // Adiciona o desfoque na navbar
      px={4}
      position="fixed"
      width="100%"
      zIndex={10}
      boxShadow="lg"
      transition="background-color 0.3s ease"
    >
      <Flex h={14} alignItems="center" justifyContent="space-between" maxW="1200px" mx="auto">
        {/* Ícone de menu mobile */}
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* Logo centralizada */}
        <HStack spacing={8} alignItems="center">
          <Text fontSize="xl" fontWeight="bold">
            ☯ Kheth
          </Text>
        </HStack>

        {/* Links de Navegação para Desktop */}
        <HStack
          spacing={8}
          display={{ base: "none", md: "flex" }}
          mx="auto"
          justifyContent="center"
        >
          {links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>

        {/* Botão de Toggle de Tema */}
        <HStack alignItems={"center"} justify="center">
          <ThemeToggleButton />
        </HStack>
      </Flex>

      {/* Menu mobile dropdown */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
