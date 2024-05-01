import { IAnimal, IFormAdoption, IFormAppointment } from "./animalSlice";
import { IComment, IProduct } from "./productsSlice";

// Functions localStorage for the animals

export const setAnimalSelectedLC = ({animals}:{animals:IAnimal})=>{
    localStorage.setItem("animalSelected", JSON.stringify(animals));
}

export const getAnimalSelectedLC = () => {
    const dataString = localStorage.getItem("animalSelected");
    if (dataString) {
        const animals = JSON.parse(dataString);
        return animals;
    } else {
        return null; 
    }
};

export const setAdoptionRQLC = ({requests}:{requests:IFormAdoption[]})=>{
    localStorage.setItem("adoptionRequests", JSON.stringify(requests));
}

export const getAdoptionRQLC = () => {
    const dataString = localStorage.getItem("adoptionRequests");
    if (dataString) {
        const animals = JSON.parse(dataString);
        return animals;
    } else {
        return null; 
    }
};

export const setAppointmentRQLC = ({requests}:{requests:IFormAppointment[]})=>{
    localStorage.setItem("appointmentRequests", JSON.stringify(requests));
}

export const getAppointmentRQLC = () => {
    const dataString = localStorage.getItem("appointmentRequests");
    if (dataString) {
        const animals = JSON.parse(dataString);
        return animals;
    } else {
        return null; 
    }
};

// Functions localStorage for the products

export const setProductsLC = ({products}:{products:IProduct[]})=>{
    localStorage.setItem("products", JSON.stringify(products));
}

export const getProductsLC = () => {
    const dataString = localStorage.getItem("products");
    if (dataString) {
        const animals = JSON.parse(dataString);
        return animals;
    } else {
        return null; 
    }
};

export const setProductsInCartsLC = ({products}:{products:IProduct[]})=>{
    localStorage.setItem("productsCart", JSON.stringify(products));
}

export const getProductsInCartRQLC = () => {
    const dataString = localStorage.getItem("productsCart");
    if (dataString) {
        const animals = JSON.parse(dataString);
        return animals;
    } else {
        return null; 
    }
};


export const setProductSelectedLC = ({products}:{products:IProduct[]})=>{
    localStorage.setItem("productSelected", JSON.stringify(products));
}

export const getProductSelectedLC = () => {
    const dataString = localStorage.getItem("productSelected");
    if (dataString) {
        const animals = JSON.parse(dataString);
        return animals;
    } else {
        return null; 
    }
};

export const setNewCommentsLC = ({comments}:{comments:IComment[]})=>{
    localStorage.setItem("newComments", JSON.stringify(comments));
}

export const getNewCommentsLC = () => {
    const dataString = localStorage.getItem("newComments");
    if (dataString) {
        const animals = JSON.parse(dataString);
        return animals;
    } else {
        return null; 
    }
};