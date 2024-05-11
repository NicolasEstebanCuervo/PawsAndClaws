import styled from "@emotion/styled";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Divider,
    List,
    ListItem,
    ListIcon,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import { MM, SM, SMM } from "@theme/fonts";
import * as color from "@theme/colors";
import { useEffect, useRef, useState } from "react";
import { IoPawSharp } from "react-icons/io5";
import {
    IAnimal,
    IFormAdoption,
    deleteAdoptionsRequests,
} from "@reducers/animalSlice";
import { ImagesGenerator } from "@api/";
import { useDispatch, useSelector } from "react-redux";
import { PopConfirmation } from "../../componentsGlobals/pop-up/popConfirmation";

export const CardAdoptionRequests = ({
    requestInfo,
}: {
    requestInfo: IFormAdoption;
}) => {
    const [clicked, setClicked] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [animal, setAnimal] = useState<IAnimal>();
    const dispatch = useDispatch();

    const changeTrueClicked = () => {
        setClicked(true);
    };

    const changeFalseClicked = () => {
        setClicked(false);
    };

    const deleteAdoptionRequest = () => {
        dispatch(deleteAdoptionsRequests(requestInfo));
    };

    useEffect(() => {
        const fetchImages = async () => {
            if (requestInfo && requestInfo.theAnimalAdoption.length > 0) {
                const animalToLoad = requestInfo.theAnimalAdoption[0];
                setAnimal(animalToLoad);
                const breed = animalToLoad.breed;
                const data = await ImagesGenerator(breed);
                setImageUrl(data);
            }
        };

        fetchImages();
    }, [requestInfo]);

    const [statusRequest, setStatusRequest] = useState<string>("");

    useEffect(() => {
        const startDate = new Date();
        const currentDate = new Date();
        const difference = currentDate.getTime() - startDate.getTime();
        const daysPassed = Math.ceil(difference / (1000 * 3600 * 24));

        if (daysPassed < 3) {
            setStatusRequest("Pendiente");
        } else if (daysPassed < 6) {
            const random = Math.random();
            if (random < 0.1) {
                setStatusRequest("Rechazada");
            } else {
                setStatusRequest("En progreso");
            }
        } else if (daysPassed < 9) {
            if (statusRequest !== "Rechazada") {
                setStatusRequest("Aprobada");
            }
        } else {
            if (statusRequest !== "Rechazada") {
                setStatusRequest("Finalizada");
            }
        }
    }, [statusRequest]);

    return (
        <div data-testid="container">
            <Popover onOpen={changeTrueClicked} onClose={changeFalseClicked}>
                <PopoverTrigger>
                    <ContentTrigger status={statusRequest} clicked={clicked} data-testid="trigger-container">
                        <MM>
                            Solicitud de adopcion a nombre de:{" "}
                            {requestInfo.fullNameAdoption}
                        </MM>
                        <SM>Estado de la solicitud: {statusRequest}</SM>
                    </ContentTrigger>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        <HeaderPopover>
                            <ImagePopover
                                src={imageUrl}
                                alt={`Imagen de: ${imageUrl}`}
                            />

                            <TextsHeader>
                                <TitleHeader>
                                    Nombre: {animal?.name}
                                </TitleHeader>
                                <SubtitleHeader colorText={color.LightGray2}>
                                    Dueño: {animal?.information.owner}
                                </SubtitleHeader>
                            </TextsHeader>
                        </HeaderPopover>

                        <Divider />

                        <ContentPopover>
                            <TitleContentPopover>
                                Informacion del solicitante:
                            </TitleContentPopover>
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon
                                        as={IoPawSharp}
                                        color={color.Green}
                                    />
                                    <b>Nombre completo: </b>
                                    {requestInfo.fullNameAdoption}
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={IoPawSharp}
                                        color={color.Green}
                                    />
                                    <b>Dirección: </b>
                                    {requestInfo.addressAdoption}
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={IoPawSharp}
                                        color={color.Green}
                                    />
                                    <b>Email: </b>
                                    {requestInfo.emailAdoption}
                                </ListItem>

                                <ListItem>
                                    <ListIcon
                                        as={IoPawSharp}
                                        color={color.Green}
                                    />
                                    <b>Numero de telefono: </b>
                                    {requestInfo.phoneNumberAdoption}
                                </ListItem>
                            </List>
                        </ContentPopover>

                        <PopConfirmation
                            functionActive={deleteAdoptionRequest}
                            actionComponent={
                                <Button
                                    margin="0 0 1rem 1rem"
                                    colorScheme="teal"
                                    data-testid="button"
                                >
                                    Borrar peticion
                                </Button>
                            }
                            titleAlert="¿Estas seguro que quieres eliminar esta peticion de adopcion?"
                            descriptionAlert="Si eliminas esta peticion, tendras que llenar el formulario de la mascota nuevamente."
                        />
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </div>
    );
};

const ContentTrigger = styled.div`
    width: 50%;
    position: relative;
    padding: 1rem;
    border-radius: 0.3rem;
    background: ${({ clicked, status }: { clicked: boolean; status: string }) =>
        status === "Rechazada"
            ? clicked
                ? `${color.LightRed2}`
                : `${color.LightRed}`
            : clicked
            ? `${color.Beige}`
            : `${color.LightBrown}`};

    @media (max-width: 750px) {
        width: 95%;
    }
`;
const HeaderPopover = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const ImagePopover = styled.img`
    border-radius: 500rem;
    width: 5rem;
    height: 5rem;
    object-fit: cover;
`;

const TextsHeader = styled.div`
    display: flex;
    flex-direction: column;
`;
const TitleHeader = styled(SMM)`
    font-weight: 600;
`;

const SubtitleHeader = styled(SM)`
    font-weight: 500;
`;

const ContentPopover = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const TitleContentPopover = styled(MM)`
    font-weight: 500;
`;
