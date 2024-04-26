import animals from "./index.json";
import comments from "./comments.json"

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
export const FetchProducts = async (category:string) => {
    const url = `https://walmart2.p.rapidapi.com/searchV2?query=${category}`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "dc11881de1msh65e18f63e3d7f8ep1176e8jsnbf3ed15883e9",
            "X-RapidAPI-Host": "walmart2.p.rapidapi.com",
        },
    };

        const response = await fetch(url, options);
        const result = await response.json();
        return result.itemsV2;
};

// Fetches comments data
export const FetchComments = () => {
    return [...comments.comments];
};
