import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// Configurações de modo light e dark
const config: ThemeConfig = {
  initialColorMode: 'dark',  // Iniciar com o modo escuro
  useSystemColorMode: false,  // Desativar uso automático do tema do sistema
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Poppins', sans-serif`,  // Fonte moderna para títulos
    body: `'Inter', sans-serif`,  // Fonte para o corpo do texto
  },
  styles: {
    global: (props: any) => ({
      body: {
        // Modo light
        backgroundColor: props.colorMode === 'light' 
          ? '#f5f5dc'  // Cor sólida clara para o modo light
          : '#1a1a1a',  // Cor sólida escura para o modo dark (inspirado em Takuya)
        color: props.colorMode === 'light' ? '#000' : '#fff',  // Texto preto no modo claro, branco no escuro
        minHeight: '100vh',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        fontFamily: 'Inter, sans-serif',  // Fonte global
      },
    }),
  },
  colors: {
    primary: {
      100: '#E5E5E5',
      200: '#333333',  // Cor neutra escura para o modo dark
      300: '#0f0f0f',  // Fundo mais escuro para o modo dark
      light: {
        100: '#f0f0f0',  // Fundo claro no modo light
        200: '#e0e0e0',  // Cinza claro no modo light
      },
      dark: {
        100: '#1a1a1a',  // Preto suave para o modo dark
        200: '#0a0a0a',  // Preto mais profundo para o modo dark
      },
    },
  },
  components: {
    Button: {
      baseStyle: (props: any) => ({
        bg: props.colorMode === 'light' ? '#e0e0e0' : '#333333',
        color: props.colorMode === 'light' ? '#000' : '#fff',
        _hover: {
          bg: props.colorMode === 'light' ? '#d0d0d0' : '#444444',
        },
      }),
    },
  },
});

export default theme;
