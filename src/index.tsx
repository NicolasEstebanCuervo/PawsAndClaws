import ReactDOM from "react-dom";
import { Global, css } from "@emotion/react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Provider} from "react-redux"
import store from "./redux/store";
import { ChakraProvider } from '@chakra-ui/react'

const globalStyles = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Archivo", sans-serif;
    }
`;

ReactDOM.render(
    <Provider store={store}>
        <Global styles={globalStyles} />
        <ChakraProvider>
        <App />
        </ChakraProvider>
    </Provider>,
    document.getElementById("root")
);
