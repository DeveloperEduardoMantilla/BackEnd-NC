import Main from "../pages/main.jsx";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Usuario from "../pages/Usuario.jsx";

export default function RouterNc() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/usuario" element={<Usuario/>} />
      </Routes>
    </BrowserRouter>
  )
}
