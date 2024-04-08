import { createSlice } from "@reduxjs/toolkit";

export interface IAnimal {
    id: number;
    name: string;
    age: string;
    pet: string;
    sex:string;
    breed: string;
    information: {
        description: string;
        conditions?: string[];
        owner:string,
        history:string,
        description_large:string
    };
}

interface GlobalInterface {
    animals: IAnimal[];
    animalSelected: IAnimal | any;
    animalsFiltered: IAnimal[];
    inputFilterAnimals: string;
}

const initialStates: GlobalInterface = {
    animals: [],
    animalSelected: [],
    animalsFiltered: [],
    inputFilterAnimals: "",
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
        onChangeInputFilter: (state, action) => {
            state.animalSelected = action.payload;
        },
        setFilteredAnimals: (state, action) => {
            const animalsFiltered = state.animals.filter((animal:IAnimal)=>{
                return animal.name.includes(action.payload)
            })

            state.animalsFiltered = animalsFiltered
        },
    },
});

export const { setAnimals, setAnimalSelected,onChangeInputFilter,setFilteredAnimals } = AnimalSlice.actions;

export default AnimalSlice.reducer;
