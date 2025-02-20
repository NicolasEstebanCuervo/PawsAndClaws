import { FormEvent } from "react";
import styled from "@emotion/styled";
import * as color from "@theme/colors";
import { XLLM } from "@theme/fonts";
import { Input, Textarea } from "@chakra-ui/react";

export const FormContact = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <Container>
            <Title>Formulario de contacto</Title>
            <Form onSubmit={handleSubmit} data-testid="form">
                <div>
                    <Label htmlFor="from_name">Nombre</Label>
                    <Input
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        bgColor={color.White}
                        type="text"
                        name="from_name"
                        id="from_name"
                        placeholder="Nombre completo"
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="from_email">Correo Electrónico</Label>
                    <Input
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        bgColor={color.White}
                        type="email"
                        name="from_email"
                        id="from_email"
                        placeholder="Correo electrónico"
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <TextArea
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        bgColor={color.White}
                        name="message"
                        id="message"
                        required
                        placeholder="Mensaje"
                    />
                </div>
                <Button type="submit" value="Enviar" data-testid="button" />
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

    @media (max-width: 1250px) {
        width: 80%;
    }

    @media (max-width: 750px) {
        width: 95%;
        height: auto;
        padding: 2rem;
    }
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

    @media (max-width: 750px) {
        width: 100%;
        padding: 1rem;
    }
`;

const Label = styled.label`
    font-size: 22px;
`;


const TextArea = styled(Textarea)`
    outline: none;
    resize: none;
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

    @media (max-width: 750px) {
        font-size: 1rem;
    }
`;
