'use client';

import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../theme';
import Navbar from './Navbar';
import Footer from './Footer';

interface ChakraProps {
  children: ReactNode;
}

export default function ChakraProviders({ children }: ChakraProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />  
      <main style={{ minHeight: 'calc(100vh - 100px)', zIndex: -1}}>  
        {children}  
      </main>
      <Footer /> 
    </ChakraProvider>
  );
}
