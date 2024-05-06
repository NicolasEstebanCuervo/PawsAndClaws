import { FC, ReactNode, useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAnimals } from "@reducers/animalSlice";
import { FetchAnimals, FetchProducts } from "@api/";
import { Store } from "@pages/Store";
import { Index } from "@pages/Index";
import { AnimalInAdoption } from "@pages/AnimalInAdoption";
import { ReviewProduct } from "@pages/ReviewProduct";
import { Adoption } from "@pages/Adoption";
import { Appointment } from "@pages/Appointment";
import { Requests } from "@pages/Requests";
import { Pay } from "@pages/Pay";
import { Thanks } from "@pages/Thanks";
import { FormPay } from "@pages/FormPay";
import { setProducts } from "@reducers/productsSlice";

const Wrapper = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return <>{children}</>;
};

const App: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setAnimals(FetchAnimals()));

        const fetchData = async () => {
            const data = await FetchProducts();
            dispatch(setProducts(data));
        };
        fetchData();
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Wrapper>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/adoption" element={<Adoption />} />
                    <Route
                        path="/adoption/animal/:id"
                        element={<AnimalInAdoption />}
                    />
                    <Route path="/products" element={<Store />} />
                    <Route
                        path="/products/product/:id"
                        element={<ReviewProduct />}
                    />
                    <Route path="/products/product/pay" element={<Pay />} />
                    <Route
                        path="/products/product/formPay"
                        element={<FormPay />}
                    />
                    <Route
                        path="/products/product/thanks"
                        element={<Thanks />}
                    />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/requests" element={<Requests />} />
                </Routes>
            </Wrapper>
        </BrowserRouter>
    );
};

export default App;
