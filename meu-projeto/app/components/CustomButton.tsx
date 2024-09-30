'use client'
import { Button } from '@chakra-ui/react';

export default function CustomButton({ children }: { children: React.ReactNode }) {
  return (
    <Button
      bg="cyan.400"
      color="white"
      _hover={{ bg: 'cyan.300' }}
      transition="background-color 0.3s ease" // Adiciona uma transição suave na cor do botão
    >
      {children}
    </Button>
  );
}