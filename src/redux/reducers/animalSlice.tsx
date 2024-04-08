import { createSlice } from "@reduxjs/toolkit";

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
    petsAdopted: IFormAdoption[];
    appointmentRequests: IFormAppointment[];
}

const initialStates: GlobalInterface = {
    animals: [],
    animalSelected: [],
    animalsFiltered: [],
    inputFilterAnimals: "",
    petsAdopted: [],
    appointmentRequests: [],
};

export const AnimalSlice = createSlice({
    name: "animals",
    initialState: initialStates,
    reducers: {
        setAnimals: (state, action) => {
            state.animals = [...state.animals, action.payload];
            state.animalsFiltered = [...state.animals, action.payload];
        },
        setAnimalSelected: (state, action) => {
            state.animalSelected = [action.payload];
        },

        setFilteredAnimals: (state, action) => {
            const animalsFiltered = state.animals.filter((animal: IAnimal) => {
                return animal.name.includes(action.payload);
            });

            state.animalsFiltered = animalsFiltered;
        },
        setInputValueChanged: (state, action) => {
            const { fieldName, value } = action.payload;
            (state as any)[fieldName] = value;
        },
        createAdoptionRequest: (state, action) => {
            state.petsAdopted = [...state.petsAdopted, action.payload];
        },
        createAppointmentRequest: (state, action) => {
            state.appointmentRequests = [...state.appointmentRequests, action.payload];
        },
    },
});

export const {
    setAnimals,
    setAnimalSelected,
    setFilteredAnimals,
    createAdoptionRequest,
    setInputValueChanged,
    createAppointmentRequest
} = AnimalSlice.actions;

export default AnimalSlice.reducer;
