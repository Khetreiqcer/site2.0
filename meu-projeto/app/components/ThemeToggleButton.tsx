// components/ThemeToggleButton.tsx
'use client';

import { IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();  // Certifique-se de que useColorMode está funcionando

  return (
    <IconButton
      aria-label="Alternar tema"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}  // A função deve ser chamada, não passada diretamente
      variant="ghost"
      color="current"
    />
  );
}
