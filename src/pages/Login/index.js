import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Container from '../../components/Container';
import { useFormik } from 'formik';

export default function Login() {
    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })

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
                    <Button variant="primary" type="submit" className="mt-3 mb-2">
                        Entrar
                    </Button>
                </Form>

            </Container>
    )
}
