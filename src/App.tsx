import { FC, ReactNode, useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAnimals } from "./redux/reducers/animalSlice";
import { FetchAnimals } from "./redux/Api";
import { StorePage } from "./pages/StorePage";
import { IndexPage } from "./pages/IndexPage";
import { AnimalInAdoptionPage } from "./pages/AnimalInAdoptionPage";
import { ReviewProductPage } from "./pages/ReviewProductPage";
import { AdoptionPage } from "./pages/AdoptionPage";
import { AppointmentPage } from "./pages/AppointmentPage";
import { RequestsPage } from "./pages/RequestsPage";


const Wrapper= ({ children }:{children: ReactNode}) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return <>{children}</>;
};

const App:FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAnimals(FetchAnimals()));
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Wrapper>
                <Routes>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/adoption" element={<AdoptionPage />} />
                    <Route
                        path="/animals/adoption/:id"
                        element={<AnimalInAdoptionPage />}
                    />
                    <Route path="/store" element={<StorePage />} />
                    <Route
                        path="/products/:id"
                        element={<ReviewProductPage />}
                    />
                    <Route
                        path="/appointment"
                        element={<AppointmentPage />}
                    />
                    <Route path="/requests" element={<RequestsPage />} />
                </Routes>
            </Wrapper>
        </BrowserRouter>
    );
};

export default App;
