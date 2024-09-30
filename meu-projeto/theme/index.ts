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
        transition: 'background-color 0.2s ease, color 0.2s ease',  // Suave transição de tema
        backgroundColor: props.colorMode === 'light' 
          ? '#faf8ef'  // Tom claro e neutro (quase off-white) para o modo light
          : '#1a1a1a',  // Cor sólida escura para o modo dark
        color: props.colorMode === 'light' ? '#333333' : '#f0f0f0',  // Texto suavizado em ambos os modos
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
        100: '#faf8ef',  // Off-white no modo light
        200: '#e8e8e8',  // Cinza claro no modo light
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
        transition: 'background-color 0.2s ease',  // Transição suave no hover
        bg: props.colorMode === 'light' ? '#e8e8e8' : '#333333',  // Cores suaves
        color: props.colorMode === 'light' ? '#000' : '#fff',
        _hover: {
          bg: props.colorMode === 'light' ? '#d8d8d8' : '#444444',  // Hover discreto
        },
      }),
    },
  },
});

export default theme;
