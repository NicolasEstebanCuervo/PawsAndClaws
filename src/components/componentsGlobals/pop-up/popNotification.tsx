import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
    CloseButton,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useRef } from "react";

interface IAlertNotification {
    actionComponent: ReactNode;
    titleAlert?: string;
    descriptionAlert?: string;
    active?: boolean;
    width?: string | undefined;
}

export const PopNotification = ({
    actionComponent,
    titleAlert,
    descriptionAlert,
    active,
    width,
}: IAlertNotification) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (active) {
            onOpen();
        }

        timeoutId = setTimeout(() => {
            onClose();
        }, 5000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [active, onOpen, onClose]);

    return (
        <>
            <div
                style={{ width: `${width ? width : "auto"}` }}
                onClick={active ? onOpen : undefined}
            >
                {actionComponent}
            </div>

            <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <Alert status="success" borderRadius="md">
                        <AlertIcon />
                        <Box flex="1">
                            {titleAlert && (
                                <AlertTitle>{titleAlert}</AlertTitle>
                            )}
                            {descriptionAlert && (
                                <AlertDescription>
                                    {descriptionAlert}
                                </AlertDescription>
                            )}
                        </Box>
                        <CloseButton
                            position="absolute"
                            right="8px"
                            top="8px"
                            onClick={onClose}
                        />
                    </Alert>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};