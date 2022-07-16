// App.jsx
import { Postallist } from "./components/Postallist";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

const App = () => {
  const getDataFromAPI = async (keyword) => {
    const requestUrl = "http://geoapi.heartrails.com/api/json?method=getTowns";
    const result = await axios.get(`${requestUrl}&city=${keyword}`);
    return result;
  };
  const erias = ["山口市", "防府市", "宇部市"];
  return (
    <BrowserRouter>
      <h1>郵便番号一覧 app</h1>
      <ul>
        <li>
          <Link to="/yamaguchi">山口県山口市</Link>
        </li>
        <li>
          <Link to="/houfu">山口県防府市</Link>
        </li>
        <li>
          <Link to="/ube">山口県宇部市</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/yamaguchi" element={<Postallist eria={erias[0]} getData={getDataFromAPI} />} />
        <Route path="/houfu" element={<Postallist eria={erias[1]} getData={getDataFromAPI} />} />
        <Route path="/ube" element={<Postallist eria={erias[2]} getData={getDataFromAPI} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

