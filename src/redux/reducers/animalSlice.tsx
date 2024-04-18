import { createSlice, current } from "@reduxjs/toolkit";

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

export interface IFormAdoption {
    id:string
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
    theAnimalAdoption:IAnimal[]
}

export interface IFormAppointment {
    id:string;
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

interface GlobalInterface {
    animals: IAnimal[];
    animalSelected: IAnimal | any;
    animalsFiltered: IAnimal[];
    inputFilterAnimals: string;
    adoptionsRequests: IFormAdoption[];
    appointmentRequests: IFormAppointment[];
}

const initialStates: GlobalInterface = {
    animals: [],
    animalSelected: [],
    animalsFiltered: [],
    inputFilterAnimals: "",
    adoptionsRequests: [],
    appointmentRequests: [],
};

export const AnimalSlice = createSlice({
    name: "animals",
    initialState: initialStates,
    reducers: {
        setAnimals: (state, action) => {
            state.animals = [...state.animals, ...action.payload];
            state.animalsFiltered = [...state.animals, ...action.payload];
        },
        setAnimalSelected: (state, action) => {
            state.animalSelected = [action.payload];
        },
        setFilteredAnimals: (state, action) => {
            state.animalsFiltered = [...action.payload];
        },
        setInputValueChanged: (state, action) => {
            const { fieldName, value } = action.payload;
            (state as any)[fieldName] = value;
        },
        createAdoptionRequest: (state, action) => {
            state.adoptionsRequests = [...state.adoptionsRequests, action.payload];
        },
        createAppointmentRequest: (state, action) => {
            state.appointmentRequests = [...state.appointmentRequests, action.payload];
        },
        deleteAdoptionsRequests: (state, action) => {
            state.adoptionsRequests = state.adoptionsRequests.filter(
                (animal: IFormAdoption) => {
                    return animal.id !== action.payload.id;
                }
            );
        },
        deleteAppointmentsRequests: (state, action) => {
            state.appointmentRequests = state.appointmentRequests.filter(
                (animal: IFormAppointment) => {
                    return animal.id !== action.payload.id;
                }
            );
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
