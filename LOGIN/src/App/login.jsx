
import LOGO from "../public/LOG-removebg-preview.png"
import React, { useState } from 'react';
import "../style/styleApp.css"
import {
  LoginBox,
  Title,
  InputGroup,
  Label,
  Input,
  Button,
  ErrorMessage,
  Container,
  LeftSection,
  Logo,
  LogoImage,
  Text,
  Subtitulo
} from '../style/styled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (!email || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage('Por favor, insira um email válido.');
      return;
    }

    alert('Login realizado com sucesso!');

  };

  return (
    <Container>
      <LeftSection>
      <Logo>
      <LogoImage img src={LOGO} alt="Logo" />
      </Logo>
      <Text>Welcome to website</Text>
        <Subtitulo>Com cada ocorrência organizada,</Subtitulo>
        <Subtitulo>você transforma o caos em proteção</Subtitulo>
      </LeftSection>
      <LoginBox>
        <Title>Login</Title>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <InputGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Senha:</Label>
          <Input

            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>
        <Button type="submit" onClick={handleSubmit}>ENTRAR</Button>
      </LoginBox>
    </Container>
  );
};

export default Login;