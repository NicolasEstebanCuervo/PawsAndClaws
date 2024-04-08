import { AnimalInAdoptionPage } from "./pages/AnimalInAdoptionPage";
import { IndexPage } from "./pages/IndexPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReviewProductPage } from "./pages/ReviewProductPage";
import { AdoptionPage } from "./pages/AdoptionPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAnimals } from "./redux/reducers/animalSlice";
import { FetchAnimals } from "./redux/Api";
import { StorePage } from "./pages/StorePage";
import { AppointmentPage } from "./pages/AppointmentPage";
import { AppointmentScheduledPage } from "./pages/AppointmentScheduledPage";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAnimals(FetchAnimals()));
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage></IndexPage>}></Route>
                <Route path="/adoption" element={<AdoptionPage></AdoptionPage>}></Route>
                <Route path="/store" element={<StorePage></StorePage>}></Route>
                <Route path="/appointment" element={<AppointmentPage></AppointmentPage>}></Route>
                <Route path="/appointment/scheduled" element={<AppointmentScheduledPage></AppointmentScheduledPage>}></Route>
                <Route path="/animals/adoption/:id" element={<AnimalInAdoptionPage></AnimalInAdoptionPage>}></Route>
                <Route path="/products/:id" element={<ReviewProductPage></ReviewProductPage>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
