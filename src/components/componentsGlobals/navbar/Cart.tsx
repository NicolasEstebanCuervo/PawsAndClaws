import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import { ListProductsCart } from "./ListProductsCart";
import { useSelector } from "react-redux";

export const Cart = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const firstField = useRef<HTMLInputElement>(null);

    const productsInTheCart = useSelector((state: any) => state.ProductSlice);

    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
            size={"lg"}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth="1px">Tu carrito</DrawerHeader>

                <DrawerBody>
                    <ListProductsCart />
                </DrawerBody>

                {productsInTheCart.productsInTheCart <= 0 ? (
                    null
            ) : (

                <DrawerFooter borderTopWidth="1px">
                    <Button variant="outline" mr={3} onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button colorScheme="green">Comprar</Button>
                </DrawerFooter>

            )}
            </DrawerContent>
        </Drawer>
    );
};
