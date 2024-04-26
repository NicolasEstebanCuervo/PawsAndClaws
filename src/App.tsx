import { FC, ReactNode, useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAnimals } from "./redux/reducers/animalSlice";
import { FetchAnimals } from "./redux/Api";
import { Store } from "./pages/Store";
import { Index } from "./pages/Index";
import { AnimalInAdoption } from "./pages/AnimalInAdoption";
import { ReviewProduct } from "./pages/ReviewProduct";
import { Adoption } from "./pages/Adoption";
import { Appointment } from "./pages/Appointment";
import { Requests } from "./pages/Requests";
import { Pay } from "./pages/Pay";
import { Thanks } from "./pages/Thanks";
import { FormPay } from "./pages/FormPay";

const Wrapper  = ({ children }: { children: ReactNode }) => {
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
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Wrapper>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/adoption" element={<Adoption />} />
                    <Route
                        path="/animals/adoption/:id"
                        element={<AnimalInAdoption />}
                    />
                    <Route path="/store" element={<Store />} />
                    <Route
                        path="/products/:id"
                        element={<ReviewProduct />}
                    />
                    <Route path="/pay" element={<Pay />} />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/requests" element={<Requests />} />
                    <Route path="/formPay" element={<FormPay />} />
                    <Route path="/thanks" element={<Thanks />} />
                </Routes>
            </Wrapper>
        </BrowserRouter>
    );
};

export default App;