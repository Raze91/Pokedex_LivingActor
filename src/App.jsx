import Home from "./Pages/Home/Home";
import Types from "./Pages/Types/Types";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/types" element={<Types />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
