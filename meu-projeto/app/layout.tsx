
import Chakra from './components/ChakraProviders';
export default function RootLayout({ children }: { children: React.ReactNode }) {
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