import React, { useMemo } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import { useFormik } from 'formik';
import { useAuth } from '../../hooks/contexts/AuthProvider';
import { Styled } from './styles';

export default function Login() {
    const { SignIn, error } = useAuth();
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        onSubmit: async values => {
            // alert(JSON.stringify(values, null, 2));
            await SignIn(values);
            history.push("/home")
        }
    });

    const AppError = useMemo(
        () => <Styled.Error>{error}</Styled.Error>, [error]
    )

    return (
            <Container
                title="Login"
                size="sm"
            >
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-4">
                        <Form.Label>Login</Form.Label>
                        <Form.Control
                            id="login"
                            name="login"
                            placeholder="Coloque o seu melhor login"
                            onChange={formik.handleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Sua senha"
                            onChange={formik.handleChange}
                        />
                    </Form.Group>
                    {AppError}
                    <Button variant="primary" type="submit" className="mt-3 mb-2">
                        Entrar
                    </Button>
                </Form>

            </Container>
    )
}
