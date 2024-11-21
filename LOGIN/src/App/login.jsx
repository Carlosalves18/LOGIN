import React, { useState } from 'react';
import { Container, Form, Input, Button, Titulo, Img, H1} from "../styled/styled.js"


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMessage('');

        if (!email || !password) {
            setErrorMessage('Por favor, preencha todos os campos.');
            return;
        }

        alert('Login realizado com sucesso!');
    };

    return (    
        <> 
        <Img src="../src/public/LOG-removebg-preview.png" height="300px"/>
        <H1>Welcome to website</H1>
   <Container>
            <Form onSubmit={handleSubmit}>
                <Titulo>Login</Titulo>
                <br />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <br />
                <Button type="submit">ENTRAR</Button>
            </Form>
        </Container>
        </> 
    );

};

export default Login;