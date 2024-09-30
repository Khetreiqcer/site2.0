'use client'
import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, useToast } from '@chakra-ui/react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  // Função para enviar a mensagem
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault(); // Evitar o comportamento padrão do formulário

    try {
      const response = await fetch('https://sitev2-8e04632047ba.herokuapp.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });

      if (response.ok) {
        const data = await response.json();
        toast({
          title: 'Message Sent!',
          description: "We've received your message.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        // Limpar o formulário após enviar a mensagem
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast({
          title: 'Error',
          description: 'Failed to send message.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was a problem sending the message.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      as="form"
      onSubmit={sendMessage} // Lidar com o envio do formulário
      px={4}
      py={{ base: 12, md: 16 }}
      maxW="600px"
      mx="auto"
      textAlign="center"
    >
      <Heading as="h2" size="xl" mb={8}>
        Contact Me
      </Heading>

      <FormControl id="name" mb={4}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl id="email" mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="message" mb={6}>
        <FormLabel>Message</FormLabel>
        <Textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </FormControl>

      <Button colorScheme="blue" size="lg" width="full" type="submit">
        Send Message
      </Button>
    </Box>
  );
}
