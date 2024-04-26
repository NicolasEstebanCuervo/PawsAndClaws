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
import { LM } from "../../../theme/fonts";
import { Link } from "react-router-dom";

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

                {productsInTheCart.productsInTheCart <= 0 ? null : (
                    <DrawerFooter justifyContent={"space-between"} borderTopWidth="1px">
                        <LM>Total: {productsInTheCart.totalPrice.toFixed(2)}</LM>
                        <div>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancelar
                            </Button>
                            <Link to="/pay">
                            <Button colorScheme="green">Comprar</Button>
                            </Link>
                        </div>
                    </DrawerFooter>
                )}
            </DrawerContent>
        </Drawer>
    );
};