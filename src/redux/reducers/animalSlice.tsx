import { createSlice } from "@reduxjs/toolkit";
import {
    getAdoptionRQLC,
    getAnimalSelectedLC,
    getAnimalsLC,
    getAppointmentRQLC,
    setAdoptionRQLC,
    setAnimalSelectedLC,
    setAnimalsLC,
    setAppointmentRQLC,
} from "./localStorageFunctions";

// Interface for animal data structure
export interface IAnimal {
    id: number;
    name: string;
    age: string;
    pet: string;
    sex: string;
    breed: string;
    information: {
        description: string;
        conditions?: string[];
        owner: string;
        history: string;
        description_large: string;
    };
}

// Interface for adoption form data structure
export interface IFormAdoption {
    id: string;
    fullNameAdoption: string;
    addressAdoption: string;
    phoneNumberAdoption: string;
    emailAdoption: string;
    housingAdoption: string;
    landlorTenantAdoption: string;
    fencedYardAdoption: string;
    previousPetsAdoption: string;
    currentPetsAdoption: string;
    adoptedPetsAdoption: string;
    theAnimalAdoption: IAnimal[];
}

// Interface for appointment form data structure
export interface IFormAppointment {
    id: string;
    fullNameAppointment: string;
    phoneNumberAppointment: string;
    emailAppointment: string;
    petNameAppointment: string;
    petSpeciesAppointment: string;
    petBreedAppointment: string;
    petAgeAppointment: string;
    petSexAppointment: string;
    petWeightAppointment: string;
    reasonAppointment: string;
}

// Interface for the global state structure
interface GlobalInterface {
    animals: IAnimal[];
    animalSelected: IAnimal | any;
    animalsFiltered: IAnimal[];
    inputFilterAnimals: string;
    adoptionsRequests: IFormAdoption[];
    appointmentRequests: IFormAppointment[];
}

// Initial state setup
const initialStates: GlobalInterface = {
    animals: getAnimalsLC() || [],
    animalSelected: getAnimalSelectedLC() || [],
    animalsFiltered: [],
    inputFilterAnimals: "",
    adoptionsRequests: getAdoptionRQLC() || [],
    appointmentRequests: getAppointmentRQLC() || [],
};

// Redux slice creation for managing animal-related state
export const AnimalSlice = createSlice({
    name: "animals",
    initialState: initialStates,
    reducers: {
        // Function to set animals
        setAnimals: (state, action) => {
            state.animals = [...state.animals, ...action.payload];
            state.animalsFiltered = [...state.animals, ...action.payload];
            const animalsObject = { animals: state.animals };
            setAnimalsLC(animalsObject);
        },
        // Function to set the selected animal
        setAnimalSelected: (state, action) => {
            state.animalSelected = [action.payload];
            const animalSelected = { animals: state.animalSelected };
            setAnimalSelectedLC(animalSelected);
        },
        // Function to set filtered animals
        setFilteredAnimals: (state, action) => {
            state.animalsFiltered = [...action.payload];
        },
        // Function to set the value of an input field
        setInputValueChanged: (state, action) => {
            const { fieldName, value } = action.payload;
            (state as any)[fieldName] = value;
        },
        // Function to create an adoption request
        createAdoptionRequest: (state, action) => {
            state.adoptionsRequests = [
                ...state.adoptionsRequests,
                action.payload,
            ];

            const adoptionRequest = { requests: state.adoptionsRequests };
            setAdoptionRQLC(adoptionRequest);
        },
        // Function to create an appointment request
        createAppointmentRequest: (state, action) => {
            state.appointmentRequests = [
                ...state.appointmentRequests,
                action.payload,
            ];

            const appointmentRequests = { requests: state.appointmentRequests };
            setAppointmentRQLC(appointmentRequests);
        },
        // Function to delete adoption requests
        deleteAdoptionsRequests: (state, action) => {
            state.adoptionsRequests = state.adoptionsRequests.filter(
                (animal: IFormAdoption) => {
                    return animal.id !== action.payload.id;
                }
            );

            const adoptionRequest = { requests: state.adoptionsRequests };
            setAdoptionRQLC(adoptionRequest);
        },
        // Function to delete appointment requests
        deleteAppointmentsRequests: (state, action) => {
            state.appointmentRequests = state.appointmentRequests.filter(
                (animal: IFormAppointment) => {
                    return animal.id !== action.payload.id;
                }
            );

            const appointmentRequests = { requests: state.appointmentRequests };
            setAppointmentRQLC(appointmentRequests);
        },
    },
});

export const {
    setAnimals,
    setAnimalSelected,
    setFilteredAnimals,
    createAdoptionRequest,
    setInputValueChanged,
    createAppointmentRequest,
    deleteAdoptionsRequests,
    deleteAppointmentsRequests,
} = AnimalSlice.actions;

export default AnimalSlice.reducer;