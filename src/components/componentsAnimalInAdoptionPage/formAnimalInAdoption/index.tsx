import { Input, Select } from "@chakra-ui/react";
import styled from "@emotion/styled";
import * as color from "../../../theme/colors"
import { XLLM } from "../../../theme/fonts";

export const FormAnimalInAdoption = () => {
    return (
        <SectionFormAnimalInAdoption>
            <Form>
                <div>
                    <label htmlFor="fullName">Nombre completo:</label>
                    <Input borderColor={color.LightGray2} _hover={{color: `${color.Gray}`, borderColor: `${color.Gray}`}} focusBorderColor={color.Gray} type="text" id="fullName" name="fullName" />
                </div>
                <div>
                    <label htmlFor="address">Dirección:</label>
                    <Input borderColor={color.LightGray2} _hover={{color: `${color.Gray}`, borderColor: `${color.Gray}`}} focusBorderColor={color.Gray} type="text" id="address" name="address" />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Número de teléfono:</label>
                    <Input borderColor={color.LightGray2} _hover={{color: `${color.Gray}`, borderColor: `${color.Gray}`}} focusBorderColor={color.Gray} type="text" id="phoneNumber" name="phoneNumber" />
                </div>
                <div>
                    <label htmlFor="email">Dirección de correo electrónico:</label>
                    <Input borderColor={color.LightGray2} _hover={{color: `${color.Gray}`, borderColor: `${color.Gray}`}} focusBorderColor={color.Gray} type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="age">Edad:</label>
                    <Input borderColor={color.LightGray2} _hover={{color: `${color.Gray}`, borderColor: `${color.Gray}`}} focusBorderColor={color.Gray} type="text" id="age" name="age" />
                </div>
                <div>
                    <label htmlFor="maritalStatus">Estado civil (opcional):</label>
                    <Input borderColor={color.LightGray2} _hover={{color: `${color.Gray}`, borderColor: `${color.Gray}`}} focusBorderColor={color.Gray} type="text" id="maritalStatus" name="maritalStatus" />
                </div>
                <div>
                    <label htmlFor="occupation">Ocupación:</label>
                    <Input borderColor={color.LightGray2} _hover={{color: `${color.Gray}`, borderColor: `${color.Gray}`}} focusBorderColor={color.Gray} type="text" id="occupation" name="occupation" />
                </div>
                <div>
                    <label htmlFor="housingType">Tipo de vivienda:</label>
                    <Select borderColor={color.LightGray2} _hover={{color: `${color.Gray}`, borderColor: `${color.Gray}`}} focusBorderColor={color.Gray} id="housingType" name="housingType">
                        <option value="casa">Casa</option>
                        <option value="apartamento">Apartamento</option>
                    </Select>
                </div>
                <div>
                    <label htmlFor="homeOwner">Propietario o inquilino:</label>
                    <Select borderColor={color.LightGray2} _hover={{color: `${color.Gray}`, borderColor: `${color.Gray}`}} focusBorderColor={color.Gray} id="homeOwner" name="homeOwner">
                        <option value="propietario">Propietario</option>
                        <option value="inquilino">Inquilino</option>
                    </Select>
                </div>
                <div>
                    <label htmlFor="fencedYard">¿Tiene un patio vallado?</label>
                    <Select borderColor={color.LightGray2} _hover={{color: `${color.Gray}`, borderColor: `${color.Gray}`}} focusBorderColor={color.Gray} id="fencedYard" name="fencedYard">
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                    </Select>
                </div>
                <div>
                    <label htmlFor="previousPets">¿Ha tenido mascotas anteriormente?</label>
                    <Select borderColor={color.LightGray2} _hover={{color: `${color.Gray}`, borderColor: `${color.Gray}`}} focusBorderColor={color.Gray} id="previousPets" name="previousPets">
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                    </Select>
                </div>
                <div>
                    <label htmlFor="currentPets">¿Actualmente tiene mascotas?</label>
                    <Select borderColor={color.LightGray2} _hover={{color: `${color.Gray}`, borderColor: `${color.Gray}`}} focusBorderColor={color.Gray} id="currentPets" name="currentPets">
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                    </Select>
                </div>
                <div>
                    <label htmlFor="adoptedPets">¿Ha tenido alguna mascota que haya sido adoptada, comprada o rescatada?</label>
                    <Select borderColor={color.LightGray2} _hover={{color: `${color.Gray}`, borderColor: `${color.Gray}`}} focusBorderColor={color.Gray} id="adoptedPets" name="adoptedPets">
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                    </Select>
                </div>
                <Button>Enviar</Button>
            </Form>
        </SectionFormAnimalInAdoption>
    );
};

const SectionFormAnimalInAdoption = styled.section`
    width: 40%;
    padding: 2rem;
    border-radius: 0.3rem;
    border: 1px solid ${color.LightGray};
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    div{
        display: flex;
        flex-direction: column;
    }
`

const Button = styled.button`
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