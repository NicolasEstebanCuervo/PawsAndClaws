import animals from "./animals.json";
import comments from "./comments.json"
import products from "./products.json"

// Fetches animals data
export const FetchAnimals = () => {
    return animals.animals;
};

// Generates images based on the provided breed
export const ImagesGenerator = async (breed: string) => {
    const data = await fetch(
        `https://pixabay.com/api/?key=37848833-62f906d3f5b6f66e64578261a&q=${breed}&image_type=photo&category=animals`
    );
    const response = await data.json();
    const image = response.hits[0].largeImageURL;
    return image;
};

// Fetches products based on the provided category
export const FetchProducts = async () => {
    return products.products;
};

// Fetches comments data
export const FetchComments = () => {
    return [...comments.comments];
};
