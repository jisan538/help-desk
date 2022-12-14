import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./Components/MainRoutes";

function App() {
    return (
        <BrowserRouter>
            <MainRoutes />
        </BrowserRouter>
    );
}

export default App;
