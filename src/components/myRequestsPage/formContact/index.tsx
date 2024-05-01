import { FormEvent } from "react";
import styled from "@emotion/styled";
import * as color from "@theme/colors";
import { XLLM } from "@theme/fonts";

export const FormContact = () => {

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <Container>
            <Title>Formulario de contacto</Title>
            <Form onSubmit={handleSubmit}>
                <div>
                    <Label htmlFor="from_name">Nombre</Label>
                    <Input type="text" name="from_name" id="from_name"  required />
                </div>

                <div>
                    <Label htmlFor="from_email">Correo Electrónico</Label>
                    <Input type="email" name="from_email" id="from_email"  required />
                </div>

                <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <TextArea name="message" id="message" required />
                </div>
                <Button type="submit" value="Enviar" />
            </Form>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${color.Beige};
    width: 40rem;
    height: 35rem;
    border-radius: 0.5rem 0 0 0.5rem;
`;

const Title = styled(XLLM)`
    font-weight: bold;
`;

const Form = styled.form`
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    flex-direction: column;
    width: 90%;
    padding: 2rem;
    background: ${color.Beige};

    div {
        width: 100%;
    }
`;

const Label = styled.label`
    font-size: 22px;
`;

const Input = styled.input`
    width: 100%;
    padding: 1%;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);
`;

const TextArea = styled.textarea`
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    outline: none;
    resize: none;
    border: 1px solid rgb(220, 220, 220);
`;

const Button = styled.input`
    background-color: ${color.Brown};
    border: none;
    border-radius: 0.3rem;
    width: 50%;
    font-size: 1.2rem;
    height: 2.5rem;
    color: ${color.White};
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.9;
    }
`;
