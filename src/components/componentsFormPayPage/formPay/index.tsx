import { Input, Select } from "@chakra-ui/react";
import styled from "@emotion/styled";
import * as color from "../../../theme/colors";
import { XLLLM, XLLM } from "../../../theme/fonts";
import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputValueChanged } from "../../../redux/reducers/productsSlice";
import { PopNotification } from "../../componentsGlobals/pop-up/popNotification";
import { setInterval } from "timers/promises";

export const FormPay = () => {
    const dispatch = useDispatch();

    const [activePop, setActivePop] = useState(false);

    const inputsForm = useSelector((state: any) => state.ProductSlice);

    const handleInputChange =
        (inputName: string) => (e: ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            dispatch(
                setInputValueChanged({ fieldName: `${inputName}`, value })
            );
        };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setActivePop(true);

        dispatch(setInputValueChanged({ fieldName: "fullNamePay", value: "" }));
        dispatch(
            setInputValueChanged({
                fieldName: "addressPay",
                value: "",
            })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "phoneNumberPay",
                value: "",
            })
        );
        dispatch(setInputValueChanged({ fieldName: "emailPay", value: "" }));
        dispatch(
            setInputValueChanged({
                fieldName: "cardNumberPay",
                value: "",
            })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "cardNamePay",
                value: "",
            })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "expiryDatePay",
                value: "",
            })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "cvvPay",
                value: "",
            })
        );
    };

    const navigate = () => {
        setTimeout(() => {
            window.location.href = "/thanks";
        }, 5000);
    };

    return (
        <SectionFormAnimalInAdoption>
            <TitleForm>Formulario de compra</TitleForm>
            <Form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullName">Nombre completo:</label>
                    <Input
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        maxLength={30}
                        required
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Nombre completo"
                        value={inputsForm.fullNamePay}
                        onChange={handleInputChange("fullNamePay")}
                    />
                </div>

                <div>
                    <label htmlFor="address">Dirección:</label>
                    <Input
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        required
                        maxLength={50}
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Dirección"
                        value={inputsForm.addressPay}
                        onChange={handleInputChange("addressPay")}
                    />
                </div>

                <div>
                    <label htmlFor="phoneNumber">Número de teléfono:</label>
                    <Input
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        required
                        maxLength={15}
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Número de teléfono"
                        value={inputsForm.phoneNumberPay}
                        onChange={handleInputChange("phoneNumberPay")}
                    />
                </div>

                <div>
                    <label htmlFor="email">
                        Dirección de correo electrónico:
                    </label>
                    <Input
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        maxLength={50}
                        required
                        type="email"
                        id="email"
                        name="emailAdoption"
                        placeholder="Correo electrónico"
                        value={inputsForm.emailPay}
                        onChange={handleInputChange("emailPay")}
                    />
                </div>

                <div>
                    <label htmlFor="cardNumber">Número de tarjeta:</label>
                    <Input
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        maxLength={20}
                        required
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="Número de tarjeta"
                        value={inputsForm.cardNumberPay}
                        onChange={handleInputChange("cardNumberPay")}
                    />
                </div>

                <div>
                    <label htmlFor="cardName">Nombre en la tarjeta:</label>
                    <Input
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        maxLength={20}
                        required
                        type="text"
                        id="cardName"
                        name="cardName"
                        placeholder="Nombre en la tarjeta"
                        value={inputsForm.cardNamePay}
                        onChange={handleInputChange("cardNamePay")}
                    />
                </div>

                <div>
                    <label htmlFor="expiryDate">Fecha de vencimiento:</label>
                    <Input
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        required
                        maxLength={20}
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={inputsForm.expiryDatePay}
                        onChange={handleInputChange("expiryDatePay")}
                    />
                </div>

                <div>
                    <label htmlFor="cvv">CVV:</label>
                    <Input
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        required
                        maxLength={4}
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="CVV"
                        value={inputsForm.cvvPay}
                        onChange={handleInputChange("cvvPay")}
                    />
                </div>

                <PopNotification
                    actionComponent={
                        <Button onClick={navigate} type="submit" />
                    }
                    active={activePop}
                    titleAlert="¡Tu compra se ha realizado con exito!"
                    descriptionAlert="Tu compra ha salido exitosa, en un par de minutos recibiras un correo con toda la informacion acerca de tu pedido"
                />
            </Form>
        </SectionFormAnimalInAdoption>
    );
};

const SectionFormAnimalInAdoption = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5rem 0;
`;

const TitleForm = styled(XLLM)`
    font-weight: bold;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    border-radius: 0.3rem;
    border: 1px solid ${color.LightGray};

    div {
        display: flex;
        flex-direction: column;
    }
`;

const LinkForm = styled(Link)`
    width: 100%;
`;

const Button = styled.input`
    background-color: ${color.Brown};
    border: none;
    border-radius: 0.3rem;
    width: 100%;
    font-size: 1.3rem;
    height: 3.5rem;
    color: ${color.White};
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.9;
    }
`;
