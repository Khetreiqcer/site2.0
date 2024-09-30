'use client'
import { motion } from 'framer-motion';
import { Box, Heading, Text, Image, useColorMode } from '@chakra-ui/react';

export default function Hero() {
  const { colorMode } = useColorMode();  // Detecta o modo claro/escuro

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="25vh"
      textAlign="center"
      id='home'
    >
      {/* Foto com animação */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '20px' }}
      >
        <Image
          src="https://i.pinimg.com/564x/85/ce/80/85ce801b2f1464caf6ae27ef4d17ecf4.jpg"  // Substitua pelo caminho da sua foto
          alt="Sua Foto"
          borderRadius="full"
          boxSize="150px"
          objectFit="cover"
          boxShadow="lg"
          
        />
      </motion.div>

      {/* Título animado */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading as="h1" size="2xl" mb={4}>
        Welcome to my website
        </Heading>
      </motion.div>

      {/* Texto com animação de retângulo (sem borda) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ position: 'relative', display: 'inline-block' }}
      >
        <Box
          as={motion.div}
          initial={{ backgroundColor: 'transparent' }}
          animate={{
            backgroundColor:
              colorMode === 'light'
                ? 'rgba(0, 0, 0, 0.1)'  // Fundo escuro no modo claro
                : 'rgba(255, 255, 255, 0.1)',  // Fundo claro no modo escuro
          }}
          transition={{ duration: 0.8, delay: 0.5 }}
          padding="10px"
          display="inline-block"
        >
          <Text fontSize="xl" color={colorMode === 'light' ? 'gray.800' : 'gray.200'}>
          Full Stack Developer and minimalist design enthusiast
          </Text>
        </Box>
      </motion.div>
    </Box>
  );
}
