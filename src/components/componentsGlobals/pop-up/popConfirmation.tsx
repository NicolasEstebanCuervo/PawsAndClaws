
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import { ReactNode, useRef } from "react";

interface IAlertConfirmation {
    actionComponent: ReactNode;
    titleAlert?: string;
    descriptionAlert?: string;
    functionActive: ()=>void;
    width?: string | undefined;
}

export const PopConfirmation = ({
    actionComponent,
    titleAlert,
    descriptionAlert,
    functionActive,
    width,
}: IAlertConfirmation) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const onClickFuntion = ()=>{
        onClose()
        functionActive()
    }

    return (
        <>
            <div style={{ width: `${width ? width : "auto"}` }}  onClick={onOpen}>{actionComponent}</div>
            <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent width={"90%"}>
                    <AlertDialogHeader>{titleAlert}</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>{descriptionAlert}</AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={buttonRef} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button colorScheme="red" ml={3} onClick={onClickFuntion}>
                            Aceptar
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};