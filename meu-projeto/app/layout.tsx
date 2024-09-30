// app/layout.tsx
import GundamScene from '@/app/components/Gundam';
import Chakra from './components/ChakraProviders';

import Hero from './components/Hero';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Chakra>
          {children}
        </Chakra>
      </body>
    </html>
  );
}